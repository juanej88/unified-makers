'use client';

import { LogIn } from 'lucide-react';

function ProfileMenu() {
  return (
    <section className='modal justify-end'>
      <article id='profile-menu' className='menu max-w-32 origin-top-right'>
        <button className='primary-btn flex items-center w-full h-8 px-1'>
          <LogIn size={16} strokeWidth={1.75} />
          <p className='pl-2'>Log In</p>
        </button>
      </article>
    </section>
  )
}

export default ProfileMenu;