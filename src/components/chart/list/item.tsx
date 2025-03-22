'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { ChartItem as ChartItemType } from '@/lib/types';
import { useRouter } from 'next/navigation';

type ChartItemProps = {} & ChartItemType;

const ChartItem = (props: ChartItemProps) => {
  const {
    rank,
    targetIdx,
    targetName,
    targetImg,
    detail: { entertainment }
  } = props;
  const router = useRouter();

  return (
    <li
      className='w-full px-1.5 hover:cursor-pointer'
      onClick={() => router.push(`${process.env.NEXT_PUBLIC_DETAIL_URL}/${targetIdx}`)}
    >
      <Card className='hover:bg-secondary/50 bg-secondary/10 w-full'>
        <CardContent className='flex items-center gap-6'>
          <div className='relative h-16 w-16'>
            <Image
              src={`https://${process.env.NEXT_PUBLIC_RESOURCE_HOST}${targetImg}`}
              alt={targetName}
              className='rounded object-cover'
              sizes='100%'
              fill
            />
          </div>
          <strong className='pb-5 text-xl'>{rank}</strong>
          <section className='space-y-0.5'>
            <h3 className='font-semibold tracking-wide'>{targetName}</h3>
            <div className='text-sm tracking-wide opacity-50'>{entertainment}</div>
          </section>
        </CardContent>
      </Card>
    </li>
  );
};

export default ChartItem;
