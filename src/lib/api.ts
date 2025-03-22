import { cache } from 'react';
import type { ChartItem, ChartType } from './types';

export const getChartData = cache(async (chartType: ChartType) => {
  try {
    const fetched = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${chartType}`, {
      cache: 'force-cache'
    });
    const data: ChartItem[] = await fetched.json();
    return {
      success: true,
      data
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      data: null
    };
  }
});
