'use client';

import { useCity } from '@/app/providers/cityProvider';

function LocationButton({ toggleLocationMenu }: { toggleLocationMenu: () => void }) {
  const city = useCity();

  return (
    <section className='flex-center'>
      <button onClick={toggleLocationMenu} className='flex-center primary-btn px-3 py-1 text-secondary'>
        <p className='text-lg truncate max-w-40'>
          {city ? city : 'Select Location'}
        </p>
      </button>
    </section>
  );
};

export default LocationButton;