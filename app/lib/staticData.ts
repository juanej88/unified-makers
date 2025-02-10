import { Camera, Video, Flower, ChefHat } from 'lucide-react';

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
    [Camera, 'Photographer'],
    [Video, 'Videographer'],
    [Flower, 'Florist'],
    [ChefHat, 'Caterer'],
  ];

  return categories.map(category => new Category(category[0], category[1]));
};