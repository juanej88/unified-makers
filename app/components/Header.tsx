'use client';

import Logo from '@/app/ui/Logo';
import LocationButton from '@/app/ui/LocationButton';
import LocationMenu from '@/app/components/LocationMenu';
import ProfileButton from '@/app/ui/ProfileButton';
import ProfileMenu from '@/app/components/ProfileMenu';
import { useState } from 'react';
import { menu } from '@/app/lib/definitions';

function Header() {
  const [showMenu, setShowMenu] = useState({ location: false, profile: false });

  const toggleMenu = (menu: menu) => {
    setShowMenu(prevState => {
      return {
        ...prevState,
        [menu]: !prevState[menu],
      };
    });
  };
  
  return (
    <header className='fixed w-full max-w-screen-2xl h-12 grid grid-cols-3 px-4 border-b-[1px] z-10 bg-background'>
      <Logo />
      <LocationButton toggleMenu={toggleMenu} />
      {showMenu.location && <LocationMenu toggleMenu={toggleMenu} />}
      <ProfileButton toggleMenu={toggleMenu} />
      {showMenu.profile && <ProfileMenu toggleMenu={toggleMenu} />}
    </header>
  );
};

export default Header;