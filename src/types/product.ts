import type { CategoryType, SortOption } from './common';
import type { Order } from './order';

/** 상품 */
export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

/** 상품 상세 (관련 주문 포함) */
export interface ProductDetail extends Product {
  recentOrders: Order[];
}

/** 상품 목록 필터 */
export interface ProductFilters {
  keyword?: string;
  category?: CategoryType;
  priceMin?: number;
  priceMax?: number;
  inStock?: boolean;
}

/** 상품 목록 요청 파라미터 */
export interface ProductListParams extends ProductFilters {
  page?: number;
  limit?: number;
  sort?: SortOption<'name' | 'price' | 'stock' | 'createdAt'>;
}

/** 상품 재고 업데이트 요청 */
export interface ProductStockUpdateRequest {
  id: string;
  stock: number;
}
