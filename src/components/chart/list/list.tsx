import { getChartData } from '@/lib/api';
import InfiniteChartList from './infinite-list';

const ChartList = async () => {
  const { success, data } = await getChartData('weekly', 0);
  if (!success || !data) {
    throw Error('오류가 발생했습니다.');
  }
  return (
    <article className='flex w-full flex-1 flex-col overflow-hidden pt-1'>
      <h2 className='px-3 text-lg font-semibold'>글로벌 월드 차트 - 아티스트</h2>
      <InfiniteChartList initialData={data} />
    </article>
  );
};

export default ChartList;
