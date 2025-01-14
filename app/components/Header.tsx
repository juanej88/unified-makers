'use client';

import Logo from '@/app/ui/Logo';
import LocationButton from '@/app/ui/LocationButton';
import LocationMenu from '@/app/components/LocationMenu';
import ProfileButton from '@/app/ui/ProfileButton';
import ProfileMenu from '@/app/components/ProfileMenu';
import { useState } from 'react';

function Header() {
  const [showLocationMenu, setShowLocationMenu] = useState(false);

  const toggleLocationMenu = () => {
    setShowLocationMenu(prevState => !prevState);
  };
  
  return (
    <header className='fixed w-full max-w-screen-2xl h-12 grid grid-cols-3 px-4 shadow z-10 bg-background'>
      <Logo />
      <LocationButton toggleLocationMenu={toggleLocationMenu} />
      {showLocationMenu && <LocationMenu toggleLocationMenu={toggleLocationMenu} />}
      <ProfileButton />
      {/* <ProfileMenu /> */}
    </header>
  );
};

export default Header;