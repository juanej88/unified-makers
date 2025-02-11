import { Aperture, Bus, Camera, ChefHat, Dessert, Disc3, Flower, MapPinHouse, Martini, Palette, PartyPopper, Route, Scissors, Signature, SwatchBook, Tent, Truck, Video } from 'lucide-react';

class State {
  name: string;
  cities: string[];
  constructor(name: string, cities: string[]) {
    this.name = name;
    this.cities = cities;
  }
}

export const getLocationsData = (): State[] => {
  const states: [string, string[]][] = [
    ['New South Wales', ['Sydney']],
    ['Queensland', ['Brisbane']],
    ['South Australia', ['Adelaide']],
    ['Victoria', ['Melbourne']],
    ['Western Australia', ['Perth']],
  ];

  return states.map(state => new State(state[0], state[1]));
};

class Category {
  icon: React.ElementType;
  label: string;
  constructor(icon: React.ElementType, label: string) {
    this.label = label;
    this.icon = icon;
  }
}

export const getCategoryData = (): Category[] => {
  const categories: [React.ElementType, string][] = [
    [Martini, 'Bar'],
    [ChefHat, 'Caterers'],
    [Signature, 'Celebrants'],
    [Disc3, 'Dance Floors'],
    [SwatchBook, 'Decorators'],
    [PartyPopper, 'Entertainers'],
    [Flower, 'Florists'],
    [Truck, 'Food Trucks'],
    [Dessert, 'Grazers'],
    [Scissors, 'Hair Stylists'],
    [Tent, 'Marquees'],
    [Palette, 'Makeup Artists'],
    [Aperture, 'Photo Booths'],
    [Camera, 'Photographers'],
    [Route, 'Planners'],
    [Bus, 'Transport'],
    [Video, 'Videographers'],
    [MapPinHouse, 'Venues'],
  ];

  return categories.map(category => new Category(category[0], category[1]));
};