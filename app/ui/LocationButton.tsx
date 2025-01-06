'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';

function LocationButton() {
  const [location, setLocation] = useState('Set Location');
  
  return (
    <section className='flex-center'>
      <button className='flex-center rounded-full px-4 py-1'>
        <MapPin size={16} strokeWidth={1.75} className='text-secondary' />
        <p className='text-lg md:text-base pl-1 truncate text-secondary max-w-32'>{location}</p>
      </button>
    </section>
  );
};

export default LocationButton;