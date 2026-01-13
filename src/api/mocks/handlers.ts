import { http, HttpResponse, delay } from 'msw';
import {
  generateKpi,
  generateCategoryInsights,
  generateOrder,
  generateProduct,
  generateDailySummary,
  randomInt,
} from './data/generators';
import type { Order, Product, DailySummary } from '@/types';

// 인메모리 데이터 스토어
const store = {
  orders: Array.from({ length: 50 }, () => generateOrder()) as Order[],
  products: Array.from({ length: 30 }, () => generateProduct()) as Product[],
  memos: new Map<string, { memo: string; updatedAt: string; updatedBy: string }>(),
};

export const handlers = [
  // KPI
  http.get('/api/kpi', async () => {
    await delay(300);
    return HttpResponse.json({ data: generateKpi() });
  }),

  http.get('/api/kpi/categories', async () => {
    await delay(200);
    return HttpResponse.json({ data: generateCategoryInsights() });
  }),

  // 주문 목록 (페이지네이션)
  http.get('/api/orders', async ({ request }) => {
    await delay(300);
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 1;
    const limit = Number(url.searchParams.get('limit')) || 10;
    const keyword = url.searchParams.get('keyword');
    const status = url.searchParams.get('status');
    const category = url.searchParams.get('category');

    let filtered = [...store.orders];

    if (keyword) {
      filtered = filtered.filter(
        (o) =>
          o.orderNumber.includes(keyword) ||
          o.customerName.includes(keyword)
      );
    }
    if (status) {
      filtered = filtered.filter((o) => o.status === status);
    }
    if (category) {
      filtered = filtered.filter((o) => o.category === category);
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const data = filtered.slice(start, start + limit);

    return HttpResponse.json({
      data,
      meta: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    });
  }),

  // 주문 목록 (커서 기반)
  http.get('/api/orders/cursor', async ({ request }) => {
    await delay(300);
    const url = new URL(request.url);
    const cursor = url.searchParams.get('cursor');
    const limit = Number(url.searchParams.get('limit')) || 10;

    const startIndex = cursor
      ? store.orders.findIndex((o) => o.id === cursor) + 1
      : 0;
    const data = store.orders.slice(startIndex, startIndex + limit);
    const hasMore = startIndex + limit < store.orders.length;
    const nextCursor = hasMore ? data[data.length - 1]?.id ?? null : null;

    return HttpResponse.json({ data, nextCursor, hasMore });
  }),

  // 주문 상세
  http.get('/api/orders/:id', async ({ params }) => {
    await delay(200);
    const order = store.orders.find((o) => o.id === params.id);

    if (!order) {
      return HttpResponse.json(
        { code: 'NOT_FOUND', message: '주문을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    return HttpResponse.json({ data: order });
  }),

  // 주문 수정
  http.put('/api/orders/:id', async ({ params, request }) => {
    await delay(300);
    const body = (await request.json()) as Partial<Order>;
    const index = store.orders.findIndex((o) => o.id === params.id);

    if (index === -1) {
      return HttpResponse.json(
        { code: 'NOT_FOUND', message: '주문을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    store.orders[index] = { ...store.orders[index], ...body };

    return HttpResponse.json({
      success: true,
      data: store.orders[index],
      message: '주문이 수정되었습니다.',
    });
  }),

  // 캘린더 일별 요약
  http.get('/api/calendar', async ({ request }) => {
    await delay(300);
    const url = new URL(request.url);
    const year = Number(url.searchParams.get('year')) || new Date().getFullYear();
    const month = Number(url.searchParams.get('month')) || new Date().getMonth() + 1;

    const daysInMonth = new Date(year, month, 0).getDate();
    const summaries: DailySummary[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const memo = store.memos.get(date);
      summaries.push({
        ...generateDailySummary(date),
        memo: memo?.memo,
        memoUpdatedAt: memo?.updatedAt,
        memoUpdatedBy: memo?.updatedBy,
      });
    }

    return HttpResponse.json({ data: summaries });
  }),

  // 날짜별 메모 저장/수정
  http.post('/api/calendar/memo', async ({ request }) => {
    await delay(200);
    const body = (await request.json()) as { date: string; memo: string };

    store.memos.set(body.date, {
      memo: body.memo,
      updatedAt: new Date().toISOString(),
      updatedBy: '현재 사용자',
    });

    return HttpResponse.json({ success: true, message: '메모가 저장되었습니다.' });
  }),

  http.put('/api/calendar/memo', async ({ request }) => {
    await delay(200);
    const body = (await request.json()) as { date: string; memo: string };

    store.memos.set(body.date, {
      memo: body.memo,
      updatedAt: new Date().toISOString(),
      updatedBy: '현재 사용자',
    });

    return HttpResponse.json({ success: true, message: '메모가 수정되었습니다.' });
  }),

  // 상품 목록
  http.get('/api/products', async ({ request }) => {
    await delay(300);
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 1;
    const limit = Number(url.searchParams.get('limit')) || 10;
    const keyword = url.searchParams.get('keyword');
    const category = url.searchParams.get('category');

    let filtered = [...store.products];

    if (keyword) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const data = filtered.slice(start, start + limit);

    return HttpResponse.json({
      data,
      meta: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    });
  }),

  // 상품 상세
  http.get('/api/products/:id', async ({ params }) => {
    await delay(200);
    const product = store.products.find((p) => p.id === params.id);

    if (!product) {
      return HttpResponse.json(
        { code: 'NOT_FOUND', message: '상품을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    // 관련 주문 5개
    const recentOrders = store.orders
      .filter((o) => o.items.some((item) => item.productId === product.id))
      .slice(0, 5);

    return HttpResponse.json({
      data: { ...product, recentOrders },
    });
  }),

  // 상품 재고 수정
  http.patch('/api/products/:id/stock', async ({ params, request }) => {
    await delay(200);
    const body = (await request.json()) as { stock: number };
    const index = store.products.findIndex((p) => p.id === params.id);

    if (index === -1) {
      return HttpResponse.json(
        { code: 'NOT_FOUND', message: '상품을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    store.products[index] = {
      ...store.products[index],
      stock: body.stock,
      updatedAt: new Date().toISOString(),
    };

    return HttpResponse.json({
      success: true,
      data: store.products[index],
      message: '재고가 수정되었습니다.',
    });
  }),
];
