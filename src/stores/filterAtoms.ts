import { atom } from 'jotai';
import { Period, type PeriodType, type CategoryType } from '@/types';

/** 선택된 KPI 기간 */
export const selectedPeriodAtom = atom<PeriodType>(Period.THIS_YEAR);

/** 선택된 카테고리 (null = 전체) */
export const selectedCategoryAtom = atom<CategoryType | null>(null);

/** 선택된 날짜 범위 */
export interface DateRange {
  from: string | null;
  to: string | null;
}

export const selectedDateRangeAtom = atom<DateRange>({
  from: null,
  to: null,
});

/** 파생 atom: 날짜 범위가 선택되었는지 */
export const hasDateRangeAtom = atom((get) => {
  const range = get(selectedDateRangeAtom);
  return range.from !== null && range.to !== null;
});

/** 필터 초기화 */
export const resetFiltersAtom = atom(null, (_, set) => {
  set(selectedPeriodAtom, Period.THIS_YEAR);
  set(selectedCategoryAtom, null);
  set(selectedDateRangeAtom, { from: null, to: null });
});
