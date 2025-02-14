'use client';

import { useCity } from '@/app/providers/cityProvider';
import { menu } from '@/app/lib/definitions';
// import { Library } from 'lucide-react';

function SearchButton({ toggleMenu }: { toggleMenu: (menu: menu) => void }) {
  const city = useCity();

  return (
    <section className='flex-center'>
      <button id='location-btn' onClick={() => toggleMenu('location')} className='flex-center primary-btn px-3 py-1 text-secondary'>
        {/* <Library size={18} strokeWidth={1.5} /> */}
        <p className='truncate max-w-40'>
          {city ? city : 'Category | Location'}
        </p>
      </button>
    </section>
  );
};

export default SearchButton;