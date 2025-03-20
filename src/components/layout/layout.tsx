import Header from './header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-background text-primary h-dvh w-full max-w-screen-sm shadow-xl'>
      <div className='relative flex h-full flex-col'>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
