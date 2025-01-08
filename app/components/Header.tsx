import Logo from '@/app/ui/Logo';
import LocationButton from '@/app/ui/LocationButton';
import ProfileButton from '@/app/ui/ProfileButton';

function Header() {
  return (
    <header className='w-full max-w-screen-2xl h-12 grid grid-cols-3 px-4 shadow'>
      <Logo />
      <LocationButton />
      <ProfileButton />
    </header>
  );
};

export default Header;