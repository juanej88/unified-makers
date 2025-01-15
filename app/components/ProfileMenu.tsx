'use client';

import { useEffect } from 'react';
import { LogIn } from 'lucide-react';
import { menu } from '@/app/lib/definitions';

function ProfileMenu({ toggleMenu }: { toggleMenu: (menu: menu) => void }) {
  useEffect(() => {
    const checkClick = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement;
      const parentElement = clickedElement.closest('#profile-menu');
      if (!parentElement) toggleMenu('profile');
    };
    document.addEventListener('click', checkClick);
    return () => {
      document.removeEventListener('click', checkClick);
    };
  }, []);
  
  return (
    <section className='modal justify-end'>
      <article id='profile-menu' className='menu max-w-32'>
        <button onClick={() => toggleMenu('profile')} className='primary-btn flex items-center w-full h-8 px-1'>
          <LogIn size={16} strokeWidth={1.75} />
          <p className='pl-2'>Log In</p>
        </button>
      </article>
    </section>
  )
}

export default ProfileMenu;