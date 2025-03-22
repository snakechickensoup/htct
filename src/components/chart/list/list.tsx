import { getChartData } from '@/lib/api';
import ChartItem from './item';

const ChartList = async () => {
  const { success, data } = await getChartData('weekly');
  if (!success || !data) {
    throw Error('오류가 발생했습니다.');
  }
  return (
    <ul className='from-primary/70 via-secondary flex-1 space-y-0.5 overflow-y-auto bg-linear-to-t from-30% via-80% to-transparent p-2'>
      {data.map((item) => (
        <ChartItem key={item.targetIdx} {...item} />
      ))}
    </ul>
  );
};

export default ChartList;
