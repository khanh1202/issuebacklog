export interface IStatus {
  _id: string;
  name: string;
}

const statuses: IStatus[] = [
  { _id: 'ST1', name: 'To Do' },
  { _id: 'ST2', name: 'In Progress' },
  { _id: 'ST3', name: 'Testing' },
  { _id: 'ST4', name: 'Problem' },
  { _id: 'ST5', name: 'Resolved' }
];

export const getStatuses = () => statuses;
export const getStatus = (statusid: string) =>
  statuses.find(status => status._id === statusid)!;
