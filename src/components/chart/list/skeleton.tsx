import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ChartItemSkeleton = () => {
  return (
    <div className='px-1.5 py-0.5'>
      <Card className='bg-secondary/10 w-full'>
        <CardContent className='flex items-center gap-6'>
          <Skeleton className='h-16 w-16 rounded-sm' />
          <div className='space-y-3'>
            <Skeleton className='h-3 w-72' />
            <Skeleton className='h-3 w-64' />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartItemSkeleton;
