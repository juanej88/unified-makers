'use client';

import { useState } from 'react';
import { useCity } from '@/app/providers/cityProvider';

function LocationButton() {
  const city = useCity();
  const [active, setActive] = useState(false);

  return (
    <section className='flex-center'>
      <button className='flex-center primary-btn px-3 py-1 text-secondary'>
        <p className='text-lg md:text-base truncate max-w-40'>
          {city ? city : 'Select Location'}
        </p>
      </button>
    </section>
  );
};

export default LocationButton;