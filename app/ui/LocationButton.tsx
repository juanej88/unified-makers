'use client';

import { useState } from 'react';

function LocationButton() {
  const [location, setLocation] = useState('Select Location');
  const [active, setActive] = useState(false);

  return (
    <section className='flex-center'>
      <button className='flex-center px-3 py-1 text-secondary rounded-full hover:text-foreground hover:shadow active:shadow-none hover:bg-gray-500/10 active:bg-gray-500/15'>
        <p className='text-lg md:text-base pl-1 truncate max-w-40'>{location}</p>
      </button>
    </section>
  );
};

export default LocationButton;