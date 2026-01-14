import type { PeriodType } from './common';

/** KPI 지표 */
export interface KpiMetrics {
  /** 총 매출액 */
  totalRevenue: number;
  /** 총 주문수 */
  orderCount: number;
  /** 평균 주문 금액 */
  averageOrderValue: number;
  /** 환불 건수 */
  refundCount: number;
  /** 환불 금액 */
  refundAmount: number;
}

/** 전기간 대비 증감률 포함 KPI */
export interface KpiWithChange extends KpiMetrics {
  changes: {
    totalRevenue: number;
    orderCount: number;
    averageOrderValue: number;
    refundCount: number;
    refundAmount: number;
  };
}

/** KPI API 요청 파라미터 */
export interface KpiParams {
  period: PeriodType;
}

/** 카테고리별 매출 인사이트 */
export interface CategoryInsight {
  category: string;
  categoryLabel: string;
  revenue: number;
  percentage: number;
  orderCount: number;
}
