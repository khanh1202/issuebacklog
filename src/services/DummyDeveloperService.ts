export interface IDeveloper {
  _id: string;
  name: string;
}

const developers: IDeveloper[] = [
  { _id: 'DP1', name: 'Khanh Dinh' },
  { _id: 'DP2', name: 'Duong Tran' },
  { _id: 'DP3', name: 'Dummy Dev' },
  { _id: 'DP4', name: 'Unassigned' }
];

export const getDevelopers = () => developers;
export const getDeveloper = (developerId: string) =>
  developers.find(developer => developer._id === developerId)!;
