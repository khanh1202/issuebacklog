export interface IPriority {
  _id: string;
  name: string;
}

const priorities: IPriority[] = [
  { _id: 'PR1', name: 'Priority 1' },
  { _id: 'PR2', name: 'Priority 2' },
  { _id: 'PR3', name: 'Priority 3' }
];

export const getPriorities = () => priorities;
export const getPriority = (priorityID: string) =>
  priorities.find(priority => priority._id === priorityID)!;
