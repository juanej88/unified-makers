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
