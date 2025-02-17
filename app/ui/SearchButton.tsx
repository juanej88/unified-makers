'use client';

import { useCity } from '@/app/providers/cityProvider';
import { menu } from '@/app/lib/definitions';

function SearchButton({ toggleMenu }: { toggleMenu: (menu: menu) => void }) {
  const city = useCity();

  return (
    <section className='flex-center'>
      <button id='location-btn' onClick={() => toggleMenu('location')} className='flex-center primary-btn px-3 py-1 text-secondary'>
        <p className='truncate max-w-40 pt-[2px]'>
          {city ? `${city} | All` : 'Search'}
        </p>
      </button>
    </section>
  );
};

export default SearchButton;