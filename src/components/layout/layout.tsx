import Banner from '../chart/banner/banner';
import Header from './header';
import MainCarousel from './main-carousel';
import Nav from './nav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-background text-primary h-dvh w-full max-w-md shadow-xl'>
      <div className='relative flex h-full flex-col'>
        <Header>
          <Nav />
        </Header>
        <main className='flex flex-col items-center overflow-hidden'>
          <Banner />
          <MainCarousel>{children}</MainCarousel>
        </main>
      </div>
    </div>
  );
};

export default Layout;
