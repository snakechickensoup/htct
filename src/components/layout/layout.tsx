import Header from './header';
import Nav from './nav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-background text-primary h-dvh w-full max-w-md shadow-xl'>
      <div className='relative flex h-full flex-col'>
        <Header>
          <Nav />
        </Header>
        {children}
      </div>
    </div>
  );
};

export default Layout;
