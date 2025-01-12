'use client';

import { createContext, useContext, useReducer } from 'react';

export const CityContext = createContext<string | null>('null');
export const CityDispatchContext = createContext<React.Dispatch<{ type: string, city: string }> | null>(null);

const cityReducer = (city: string, action: {type: string, city: string}) => {
  switch(action.type) {
    case 'changed': {
      return action.city;
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
};

const initialCity = '';

export function CityProvider({ children }: { children: React.ReactNode }) {
  const [city, dispatch] = useReducer(cityReducer, initialCity);

  return (
    <CityContext.Provider value={city}>
      <CityDispatchContext.Provider value={dispatch}>
        {children}
      </CityDispatchContext.Provider>
    </CityContext.Provider>
  );
}

export function useCity() {
  return useContext(CityContext);
}

export function useCityDispatch() {
  return useContext(CityDispatchContext);
}
