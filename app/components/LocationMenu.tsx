'use client';

import { Check } from 'lucide-react';
import { getLocationsData } from '@/app/lib/staticData';
import { useCity, useCityDispatch } from '@/app/providers/cityProvider';
import { useEffect } from 'react';

function LocationMenu({ toggleLocationMenu }: { toggleLocationMenu: () => void }) {
  const selectedCity = useCity();
  const dispatchCity = useCityDispatch();

  // it closes the LocationMenu when the user clicks outside the menu
  useEffect(() => {
    const checkClick = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement;
      const parentElement = clickedElement.closest('#location-menu');
      if (!parentElement) toggleLocationMenu();
    };
    document.addEventListener('click', checkClick);
    return () => {
      document.removeEventListener('click', checkClick);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(dispatchCity === null) return;
    dispatchCity({
      type: 'changed',
      city: event.currentTarget.id,
    });
    toggleLocationMenu();
  };

  const getCities = (cities: string[]) => {
    return cities.map(city => {
      return (
        <button key={city} id={city} onClick={handleClick} className='w-full grid grid-location-option items-center justify-items-start h-8 primary-btn text-secondary'>
          <p className='pl-6'>{city}</p>
          {selectedCity === city && <Check size={16} />}
        </button>
      );
    });
  };
  
  const getLocations = () => {
    const locations = getLocationsData();
    return locations.map(state => {
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
      <article id='location-menu' className='mt-4 p-1 w-full max-w-72 h-fit max-h-96 bg-background rounded-md shadow overflow-auto scrollbar-thin transition-transform animate-scaleUp origin-top'>
        {getLocations()}
      </article>
    </section>
  );
};

export default LocationMenu;