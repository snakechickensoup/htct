import { cache } from 'react';
import type { ChartItem, ChartType } from './types';
import { PAGE_SIZE } from './constants';

export const getChartData = cache(async (chartType: ChartType, index: number) => {
  try {
    const fetched = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${chartType}`, {
      cache: 'force-cache'
    });
    const data: ChartItem[] = await fetched.json();
    return {
      success: true,
      data: data.slice(index, index + PAGE_SIZE)
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      data: null
    };
  }
});
