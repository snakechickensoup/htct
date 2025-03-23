import InfiniteChartList from '@/components/chart/list/infinite-list';
import { getChartData } from '@/lib/api';

const RealPage = async () => {
  const { success, data } = await getChartData('real', 0);
  if (!success || !data) {
    throw Error('오류가 발생했습니다.');
  }
  return (
    <article className='flex w-full flex-1 flex-col overflow-hidden pt-1'>
      <h2 className='px-3 pb-0.5 text-lg font-semibold'>실시간 음원 차트 - 앨범 정보</h2>
      <InfiniteChartList initialData={data} chartType='real' />
    </article>
  );
};

export default RealPage;
