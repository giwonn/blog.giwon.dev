export interface ApiResponse<T> {
  data: T;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface PageResponse<T> {
  content: T[];
  page: {
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
  };
}

export interface PopularArticle {
  id: number;
  title: string;
  viewCount: number;
}

export interface RecentComment {
  body: string;
  author: string;
  avatarUrl: string;
  url: string;
  createdAt: string;
}

export interface VisitorSummary {
  total: number;
  today: number;
  yesterday: number;
}
