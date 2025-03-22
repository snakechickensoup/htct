import Banner from '@/components/chart/banner/banner';
import ChartList from '@/components/chart/list/list';

export default function Home() {
  return (
    <main className='flex flex-col items-center overflow-hidden'>
      <Banner />
      <ChartList />
    </main>
  );
}
