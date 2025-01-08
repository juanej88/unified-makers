'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

function LocationMenu() {
  const [citySelected, setCitySelected] = useState('Brisbane');

  const locationOptions = [
    {
      name: 'New South Wales',
      cities: [
        'Newcastle',
        'Sydney',
        'Wollongong',
      ]
    },
    {
      name: 'Queensland',
      cities: [
        'Brisbane',
        'Gold Coast',
      ]
    },
    {
      name: 'Tasmania',
      cities: [
        'Launceston',
        'Hobart',
      ]
    },
    {
      name: 'Western Australia',
      cities: [
        'Perth',
        'Margaret River',
      ]
    },
  ];

  const getCities = (cities: string[]) => {
    return cities.map(city => {
      return (
        <button key={city} className='w-full grid grid-location-option items-center justify-items-start h-8 primary-btn text-secondary'>
          <p className='pl-6'>{city}</p>
          {citySelected === city && <Check size={16} />}
        </button>
      );
    });
  };
  
  const getLocations = () => {
    return locationOptions.map(state => {
      return (
        <aside key={state.name}>
          <h2 className='flex items-center h-8 pl-2 font-medium cursor-default'>{state.name}</h2>
          {getCities(state.cities)}
        </aside>
      );
    });
  };
  
  return (
    <section className='fixed left-0 top-12 w-full h-full flex justify-center'>
      <article className='mt-4 p-1 w-full max-w-72 h-full max-h-96 bg-background rounded shadow overflow-auto scrollbar-thin'>
        {getLocations()}
      </article>
    </section>
  );
};

export default LocationMenu;