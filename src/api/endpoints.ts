import { apiClient } from './client';
import type {
  PaginatedResponse,
  CursorResponse,
  SingleResponse,
  MutationResponse,
  KpiWithChange,
  KpiParams,
  CategoryInsight,
  Order,
  OrderListParams,
  OrderUpdateRequest,
  DailySummary,
  DailyMemoRequest,
  Product,
  ProductDetail,
  ProductListParams,
  ProductStockUpdateRequest,
} from '@/types';

/** KPI */
export const kpiApi = {
  getMetrics: ({ period }: KpiParams) =>
    apiClient.get<SingleResponse<KpiWithChange>>('/kpi', { period }),

  getCategoryInsights: ({ period }: KpiParams) =>
    apiClient.get<SingleResponse<CategoryInsight[]>>('/kpi/categories', { period }),
};

/** 주문 */
export const orderApi = {
  getList: (params: OrderListParams) =>
    apiClient.get<PaginatedResponse<Order>>('/orders', {
      ...params,
      sort: params.sort
        ? `${params.sort.field}:${params.sort.direction}`
        : undefined,
    }),

  getListByCursor: (params: OrderListParams & { cursor?: string }) =>
    apiClient.get<CursorResponse<Order>>('/orders/cursor', { ...params }),

  getDetail: (id: string) =>
    apiClient.get<SingleResponse<Order>>(`/orders/${id}`),

  update: (data: OrderUpdateRequest) =>
    apiClient.put<MutationResponse<Order>>(`/orders/${data.id}`, data),
};

/** 캘린더 (일별 요약) */
export const calendarApi = {
  getDailySummaries: (year: number, month: number) =>
    apiClient.get<SingleResponse<DailySummary[]>>('/calendar', { year, month }),

  getDailySummary: (date: string) =>
    apiClient.get<SingleResponse<DailySummary>>(`/calendar/${date}`),

  saveMemo: (data: DailyMemoRequest) =>
    apiClient.post<MutationResponse>('/calendar/memo', data),

  updateMemo: (data: DailyMemoRequest) =>
    apiClient.put<MutationResponse>('/calendar/memo', data),
};

/** 상품 */
export const productApi = {
  getList: (params: ProductListParams) =>
    apiClient.get<PaginatedResponse<Product>>('/products', {
      ...params,
      sort: params.sort
        ? `${params.sort.field}:${params.sort.direction}`
        : undefined,
    }),

  getDetail: (id: string) =>
    apiClient.get<SingleResponse<ProductDetail>>(`/products/${id}`),

  updateStock: (data: ProductStockUpdateRequest) =>
    apiClient.patch<MutationResponse<Product>>(`/products/${data.id}/stock`, {
      stock: data.stock,
    }),
};
