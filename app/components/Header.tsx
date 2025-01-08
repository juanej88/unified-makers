import Logo from '@/app/ui/Logo';
import LocationButton from '@/app/ui/LocationButton';
import ProfileButton from '@/app/ui/ProfileButton';
import LocationMenu from '@/app/components/LocationMenu';

function Header() {
  return (
    <header className='fixed w-full max-w-screen-2xl h-12 grid grid-cols-3 px-4 shadow z-10 bg-background'>
      <Logo />
      <LocationButton />
      <LocationMenu />
      <ProfileButton />
    </header>
  );
};

export default Header;