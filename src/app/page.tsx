import { Suspense } from 'react';
import Banner from '@/components/chart/banner/banner';
import ChartList from '@/components/chart/list/list';

export default function Home() {
  return (
    <main className='flex flex-col items-center overflow-hidden'>
      <Banner />
      <article className='flex w-full flex-1 flex-col overflow-hidden pt-1'>
        <h2 className='px-3 text-lg font-semibold'>글로벌 월드 차트 - 아티스트</h2>
        <Suspense fallback={<div>로딩중...</div>}>
          <ChartList />
        </Suspense>
      </article>
    </main>
  );
}
