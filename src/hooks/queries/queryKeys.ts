import type {
  PeriodType,
  OrderListParams,
  ProductListParams,
} from '@/types';

/**
 * Query Key Factory
 * 일관된 캐시 키 전략을 위한 팩토리 함수들
 */
export const queryKeys = {
  // KPI
  kpi: {
    all: ['kpi'] as const,
    metrics: (period: PeriodType) => [...queryKeys.kpi.all, 'metrics', period] as const,
    categories: (period: PeriodType) => [...queryKeys.kpi.all, 'categories', period] as const,
  },

  // 주문
  orders: {
    all: ['orders'] as const,
    lists: () => [...queryKeys.orders.all, 'list'] as const,
    list: (params: OrderListParams) => [...queryKeys.orders.lists(), params] as const,
    infinite: (params: Omit<OrderListParams, 'page'>) =>
      [...queryKeys.orders.all, 'infinite', params] as const,
    details: () => [...queryKeys.orders.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.orders.details(), id] as const,
  },

  // 캘린더
  calendar: {
    all: ['calendar'] as const,
    monthly: (year: number, month: number) =>
      [...queryKeys.calendar.all, 'monthly', year, month] as const,
    daily: (date: string) => [...queryKeys.calendar.all, 'daily', date] as const,
  },

  // 상품
  products: {
    all: ['products'] as const,
    lists: () => [...queryKeys.products.all, 'list'] as const,
    list: (params: ProductListParams) => [...queryKeys.products.lists(), params] as const,
    details: () => [...queryKeys.products.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.products.details(), id] as const,
  },
} as const;
