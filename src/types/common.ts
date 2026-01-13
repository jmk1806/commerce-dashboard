/** 기간 필터 */
export const Period = {
  THIS_YEAR: 'year',
  LAST_YEAR: 'last_year',
  THIS_QUARTER: 'this_quarter',
  LAST_QUARTER: 'previous_quarter',
} as const;

export type PeriodType = (typeof Period)[keyof typeof Period];

/** 주문 상태 */
export const OrderStatus = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  REFUNDED: 'refunded',
} as const;

export type OrderStatusType = (typeof OrderStatus)[keyof typeof OrderStatus];

/** 카테고리 */
export const Category = {
  ELECTRONICS: 'electronics',
  FASHION: 'fashion',
  FOOD: 'food',
  HOME: 'home',
  BEAUTY: 'beauty',
} as const;

export type CategoryType = (typeof Category)[keyof typeof Category];

/** 정렬 방향 */
export type SortDirection = 'asc' | 'desc';

/** 정렬 옵션 */
export interface SortOption<T extends string = string> {
  field: T;
  direction: SortDirection;
}
