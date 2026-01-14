import {
  Category,
  OrderStatus,
  type CategoryType,
  type OrderStatusType,
  type Order,
  type Product,
  type KpiWithChange,
  type CategoryInsight,
  type DailySummary,
} from '@/types';

/** 랜덤 ID 생성 */
export const generateId = () => Math.random().toString(36).substring(2, 11);

/** 랜덤 숫자 (범위) */
export const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/** 랜덤 날짜 (올해 내) */
export const randomDateThisYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const randomTime = start.getTime() + Math.random() * (now.getTime() - start.getTime());
  return new Date(randomTime).toISOString();
};

/** 카테고리 목록 */
const categories = Object.values(Category);
const categoryLabels: Record<CategoryType, string> = {
  electronics: '전자기기',
  fashion: '패션',
  food: '식품',
  home: '홈/리빙',
  beauty: '뷰티',
};

/** 상태 목록 */
const statuses = Object.values(OrderStatus);

/** 상품명 샘플 */
const productNames: Record<CategoryType, string[]> = {
  electronics: ['무선 이어폰', '스마트워치', '태블릿', '블루투스 스피커', '충전기'],
  fashion: ['니트 스웨터', '청바지', '패딩 자켓', '스니커즈', '백팩'],
  food: ['유기농 사과', '프리미엄 소고기', '수제 잼', '올리브오일', '견과류 세트'],
  home: ['무선 청소기', '공기청정기', '전기포트', '이불 세트', '수납박스'],
  beauty: ['스킨케어 세트', '선크림', '립스틱', '헤어에센스', '바디로션'],
};

/** 상품 생성 */
export const generateProduct = (id?: string): Product => {
  const category = categories[randomInt(0, categories.length - 1)] as CategoryType;
  const names = productNames[category];

  return {
    id: id ?? generateId(),
    name: names[randomInt(0, names.length - 1)],
    category,
    price: randomInt(10000, 500000),
    stock: randomInt(0, 100),
    createdAt: randomDateThisYear(),
    updatedAt: new Date().toISOString(),
  };
};

/** 주문 생성 */
export const generateOrder = (id?: string): Order => {
  const category = categories[randomInt(0, categories.length - 1)] as CategoryType;
  const status = statuses[randomInt(0, statuses.length - 1)] as OrderStatusType;
  const itemCount = randomInt(1, 3);

  const items = Array.from({ length: itemCount }, () => {
    const unitPrice = randomInt(10000, 200000);
    const quantity = randomInt(1, 5);
    return {
      productId: generateId(),
      productName: productNames[category][randomInt(0, productNames[category].length - 1)],
      quantity,
      unitPrice,
      totalPrice: unitPrice * quantity,
    };
  });

  const totalAmount = items.reduce((sum, item) => sum + item.totalPrice, 0);

  return {
    id: id ?? generateId(),
    orderNumber: `ORD-${Date.now()}-${generateId()}`,
    customerName: `고객${randomInt(1, 100)}`,
    status,
    category,
    items,
    totalAmount,
    orderedAt: randomDateThisYear(),
  };
};

/** KPI 생성 */
export const generateKpi = (): KpiWithChange => ({
  totalRevenue: randomInt(100000000, 500000000),
  orderCount: randomInt(1000, 5000),
  averageOrderValue: randomInt(50000, 150000),
  refundCount: randomInt(10, 100),
  refundAmount: randomInt(1000000, 10000000),
  changes: {
    totalRevenue: (Math.random() - 0.3) * 30,
    orderCount: (Math.random() - 0.3) * 20,
    averageOrderValue: (Math.random() - 0.5) * 15,
    refundCount: (Math.random() - 0.5) * 25,
    refundAmount: (Math.random() - 0.5) * 20,
  },
});

/** 카테고리 인사이트 생성 */
export const generateCategoryInsights = (): CategoryInsight[] => {
  const total = randomInt(100000000, 500000000);
  let remaining = 100;

  return categories.map((category, index) => {
    const isLast = index === categories.length - 1;
    const percentage = isLast ? remaining : randomInt(10, remaining - (categories.length - index - 1) * 10);
    remaining -= percentage;

    return {
      category,
      categoryLabel: categoryLabels[category as CategoryType],
      revenue: Math.round((total * percentage) / 100),
      percentage,
      orderCount: randomInt(100, 1000),
    };
  });
};

/** 일별 요약 생성 */
export const generateDailySummary = (date: string): DailySummary => ({
  date,
  revenue: randomInt(1000000, 10000000),
  orderCount: randomInt(10, 100),
  refundCount: randomInt(0, 5),
});
