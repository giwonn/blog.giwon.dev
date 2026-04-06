"use server";

import { cookies, headers } from "next/headers";
import { apiClient } from "@/lib/api";
import type { Article as ApiArticle, PageResponse } from "@/types";

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

async function getBrowserHeaders(): Promise<Record<string, string>> {
  const headersList = await headers();
  const cookieStore = await cookies();
  const forwardHeaders: Record<string, string> = {};

  const sessionId = cookieStore.get("blog-session")?.value;
  if (sessionId) forwardHeaders["X-Session-Id"] = sessionId;

  const xff = headersList.get("x-forwarded-for");
  if (xff) forwardHeaders["X-Forwarded-For"] = xff;

  const referer = headersList.get("referer");
  if (referer) forwardHeaders["Referer"] = referer;

  return forwardHeaders;
}

export async function getArticleSummaries(): Promise<ArticleSummary[]> {
  const forwardHeaders = await getBrowserHeaders();
  const page = await apiClient<PageResponse<ApiArticle>>("/articles?size=20", {
    headers: forwardHeaders,
  });
  return page.content.map(toArticleSummary);
}

export async function getArticle(
  articleId: string
): Promise<Article | null> {
  try {
    const forwardHeaders = await getBrowserHeaders();
    const article = await apiClient<ApiArticle>(`/articles/${articleId}`, {
      headers: forwardHeaders,
    });
    return toArticle(article);
  } catch {
    return null;
  }
}
