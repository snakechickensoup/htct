'use client';

import ChartItem from './item';
import ChartItemSkeleton from './skeleton';
import { useInfinteScroll } from '@/hooks/useInfiniteScroll';
import type { ChartItem as ChartItemType } from '@/lib/types';

type InfiniteChartListProps = {
  initialData: ChartItemType[];
};

const InfiniteChartList = (props: InfiniteChartListProps) => {
  const { data, hasMore, ref, loading } = useInfinteScroll('weekly', props.initialData);
  return (
    <ul className='from-primary/65 via-secondary flex-1 space-y-0.5 overflow-y-auto bg-linear-to-t from-30% via-80% to-transparent p-2'>
      {data.map((item) => (
        <ChartItem key={item.targetIdx} {...item} />
      ))}
      {loading && (
        <>
          {Array.from({ length: 3 }).map((_, index) => (
            <ChartItemSkeleton key={`chart-item-skeleton-${index}`} />
          ))}
        </>
      )}
      {hasMore && <li ref={ref} className='h-1' aria-hidden='true' />}
    </ul>
  );
};

export default InfiniteChartList;
