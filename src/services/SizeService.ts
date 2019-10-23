export interface ISize {
  _id: string;
  name: string;
}

const sizes: ISize[] = [
  { _id: 'SZ1', name: 'Small' },
  { _id: 'SZ2', name: 'Medium' },
  { _id: 'SZ3', name: 'Large' },
  { _id: 'SZ4', name: 'Unknown' }
];

export const getSizes = () => sizes;
export const getSize = (sizeId: string) =>
  sizes.find(size => size._id === sizeId)!;
