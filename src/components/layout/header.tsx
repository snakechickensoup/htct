const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <header className='relative flex h-12 w-full items-center justify-center bg-rose-300/70 px-2 py-6'>
      {children}
    </header>
  );
};

export default Header;
