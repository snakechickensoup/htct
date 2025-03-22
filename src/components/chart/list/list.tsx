import { getChartData } from '@/lib/api';
import ChartItem from './item';

const ChartList = async () => {
  const { success, data } = await getChartData('weekly');
  if (!success || !data) {
    throw Error('오류가 발생했습니다.');
  }
  return (
    <ul className='from-primary/80 flex-1 bg-linear-to-t to-transparent'>
      {data.map((item) => (
        <ChartItem key={item.targetIdx} {...item} />
      ))}
    </ul>
  );
};

export default ChartList;
