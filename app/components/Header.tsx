import Logo from '@/app/ui/Logo';

function Header() {
  return (
    <header className='w-full max-w-screen-2xl h-12 flex items-center px-4'>
      <Logo />
    </header>
  );
};

export default Header;