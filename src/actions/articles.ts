"use server";

import { cookies, headers } from "next/headers";
import { apiClient } from "@/lib/api";
import type { Article as ApiArticle, PageResponse } from "@/types";

const SESSION_COOKIE = "blog-session";

async function getOrCreateSessionId(): Promise<string> {
  const cookieStore = await cookies();
  const existing = cookieStore.get(SESSION_COOKIE)?.value;
  if (existing) return existing;

  const newSessionId = crypto.randomUUID();
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);

  cookieStore.set(SESSION_COOKIE, newSessionId, {
    path: "/",
    httpOnly: true,
    expires: midnight,
  });
  return newSessionId;
}

export interface ArticleSummary {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export interface Article extends ArticleSummary {
  content: string;
}

function toArticleSummary(article: ApiArticle): ArticleSummary {
  return {
    id: article.id,
    slug: String(article.id),
    title: article.title,
    date: new Date(article.createdAt).toLocaleDateString("ko-KR"),
    excerpt: article.content.substring(0, 150).replace(/[#*!\[\]()]/g, "") + "...",
  };
}

function toArticle(article: ApiArticle): Article {
  return {
    ...toArticleSummary(article),
    content: article.content,
  };
}

export async function getArticleSummaries(): Promise<ArticleSummary[]> {
  const page = await apiClient<PageResponse<ApiArticle>>("/articles?size=20");
  return page.content.map(toArticleSummary);
}

export async function getArticle(
  articleId: string
): Promise<Article | null> {
  try {
    const headersList = await headers();
    const sessionId = await getOrCreateSessionId();
    const forwardHeaders: Record<string, string> = {
      "X-Session-Id": sessionId,
    };

    const xff = headersList.get("x-forwarded-for");
    if (xff) forwardHeaders["X-Forwarded-For"] = xff;

    const referer = headersList.get("referer");
    if (referer) forwardHeaders["Referer"] = referer;

    const article = await apiClient<ApiArticle>(`/articles/${articleId}`, {
      headers: forwardHeaders,
    });
    return toArticle(article);
  } catch {
    return null;
  }
}
