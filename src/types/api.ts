/** 페이지네이션 응답 메타 */
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

/** 페이지네이션 응답 */
export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

/** 무한스크롤용 커서 기반 응답 */
export interface CursorResponse<T> {
  data: T[];
  nextCursor: string | null;
  hasMore: boolean;
}

/** API 에러 응답 */
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, string[]>;
}

/** 단일 리소스 응답 */
export interface SingleResponse<T> {
  data: T;
}

/** 뮤테이션 성공 응답 */
export interface MutationResponse<T = void> {
  success: boolean;
  data?: T;
  message?: string;
}
