'use client';

import { useState } from 'react';

function LocationButton() {
  const [location, setLocation] = useState('Select Location');
  const [active, setActive] = useState(false);

  return (
    <section className='flex-center'>
      <button className='flex-center primary-btn px-3 py-1 text-secondary'>
        <p className='text-lg md:text-base truncate max-w-40'>{location}</p>
      </button>
    </section>
  );
};

export default LocationButton;