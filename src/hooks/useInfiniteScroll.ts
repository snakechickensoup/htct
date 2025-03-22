import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { PAGE_SIZE } from '@/lib/constants';
import { getChartData } from '@/lib/api';
import type { ChartItem, ChartType } from '@/lib/types';

type UseInfiniteScroll = (
  type: ChartType,
  initialData: ChartItem[]
) => {
  ref: (node?: Element | null) => void;
  data: ChartItem[];
  hasMore: boolean;
};

export const useInfinteScroll: UseInfiniteScroll = (type, initialData) => {
  const [data, setData] = useState<ChartItem[]>(initialData);
  const [hasMore, setHasMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { ref, inView } = useInView({
    rootMargin: '200px'
  });

  const handleFetchMore = async () => {
    const { success, data } = await getChartData(type, currentIndex + PAGE_SIZE);
    if (!success || !data) {
      setHasMore(false);
      return;
    }
    setData((prevData) => [...prevData, ...data]);
    setCurrentIndex((prevIndex) => prevIndex + PAGE_SIZE);
    if (data.length < PAGE_SIZE) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    if (inView && hasMore) {
      handleFetchMore();
    }
  }, [inView, hasMore]);

  return { ref, data, hasMore };
};
