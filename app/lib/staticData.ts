class State {
  name: string;
  cities: string[];
  constructor(name: string, cities: string[]) {
    this.name = name;
    this.cities = cities;
  }
}

export const getLocationsData = (): State[] => {
  const nsw = ['Newcastle', 'Sydney', 'Wollongong'];
  const qld = ['Brisbane', 'Gold Coast'];
  const tas = ['Launceston', 'Hobart'];
  const wa = ['Perth', 'Margaret River'];

  const states: [string, string[]][] = [
    ['New South Wales', nsw],
    ['Queensland', qld],
    ['Tasmania', tas],
    ['Western Australia', wa],
  ];

  return states.map(state => new State(state[0], state[1]));
};
