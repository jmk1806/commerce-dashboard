import type { CategoryType, OrderStatusType, SortOption } from './common';

/** 주문 아이템 (주문에 포함된 상품) */
export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

/** 주문 */
export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  status: OrderStatusType;
  category: CategoryType;
  items: OrderItem[];
  totalAmount: number;
  orderedAt: string;
  memo?: string;
}

/** 주문 목록 필터 */
export interface OrderFilters {
  keyword?: string;
  status?: OrderStatusType;
  category?: CategoryType;
  dateFrom?: string;
  dateTo?: string;
  amountMin?: number;
  amountMax?: number;
  orderNumber?: string;
}

/** 주문 목록 요청 파라미터 */
export interface OrderListParams extends OrderFilters {
  page?: number;
  limit?: number;
  sort?: SortOption<'orderedAt' | 'totalAmount'>;
}

/** 주문 업데이트 요청 */
export interface OrderUpdateRequest {
  id: string;
  memo?: string;
  status?: OrderStatusType;
}

/** 일별 주문 요약 (캘린더용) */
export interface DailySummary {
  date: string;
  revenue: number;
  orderCount: number;
  refundCount: number;
  memo?: string;
  memoUpdatedAt?: string;
  memoUpdatedBy?: string;
}

/** 날짜별 메모 요청 */
export interface DailyMemoRequest {
  date: string;
  memo: string;
}
