"use server";

import {
  mockArticleSummaries,
  getMockArticle,
} from "@/features/articles/mocks/articles";

// Domain Models
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

// API Functions
export async function getArticleSummaries(): Promise<ArticleSummary[]> {
  // TODO: 백엔드 API 연동 후 mock 제거
  return mockArticleSummaries.data;
}

export async function getArticle(articleId: string): Promise<Article | null> {
  // TODO: 백엔드 API 연동 후 mock 제거
  return getMockArticle(parseInt(articleId));
}
