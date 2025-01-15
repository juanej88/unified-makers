'use client';

import { useCity } from '@/app/providers/cityProvider';
import { menu } from '@/app/lib/definitions';

function LocationButton({ toggleMenu }: { toggleMenu: (menu: menu) => void }) {
  const city = useCity();

  return (
    <section className='flex-center'>
      <button id='location-btn' onClick={() => toggleMenu('location')} className='flex-center primary-btn px-3 py-1 text-secondary'>
        <p className='text-lg truncate max-w-40'>
          {city ? city : 'Select Location'}
        </p>
      </button>
    </section>
  );
};

export default LocationButton;