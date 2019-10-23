import { IPriority, getPriority } from './PriorityService';
import { ISize, getSize } from './SizeService';
import { IStatus, getStatus } from './StatusService';
import { IDeveloper, getDeveloper } from './DummyDeveloperService';

export interface IIssue {
  _id: string;
  name: string;
  priority: IPriority;
  size: ISize;
  status: IStatus;
  assignedTo: IDeveloper;
}

export const issues: IIssue[] = [
  {
    _id: 'IS1',
    name: 'Validation bug',
    priority: getPriority('PR1'),
    size: getSize('SZ1'),
    status: getStatus('ST1'),
    assignedTo: getDeveloper('DP4')
  },
  {
    _id: 'IS2',
    name: 'Console crashing out',
    priority: getPriority('PR2'),
    size: getSize('SZ2'),
    status: getStatus('ST1'),
    assignedTo: getDeveloper('DP4')
  },
  {
    _id: 'IS3',
    name: 'Incorrect matching transactions',
    priority: getPriority('PR2'),
    size: getSize('SZ2'),
    status: getStatus('ST1'),
    assignedTo: getDeveloper('DP4')
  },
  {
    _id: 'IS4',
    name: 'Exiting Defect',
    priority: getPriority('PR2'),
    size: getSize('SZ2'),
    status: getStatus('ST1'),
    assignedTo: getDeveloper('DP4')
  },
  {
    _id: 'IS5',
    name: 'Change Title',
    priority: getPriority('PR2'),
    size: getSize('SZ2'),
    status: getStatus('ST1'),
    assignedTo: getDeveloper('DP4')
  },
  {
    _id: 'IS6',
    name: 'Migrate data',
    priority: getPriority('PR2'),
    size: getSize('SZ2'),
    status: getStatus('ST1'),
    assignedTo: getDeveloper('DP4')
  },
  {
    _id: 'IS7',
    name: 'Revert issue 1 from the system',
    priority: getPriority('PR2'),
    size: getSize('SZ2'),
    status: getStatus('ST1'),
    assignedTo: getDeveloper('DP4')
  },
  {
    _id: 'IS8',
    name: 'Improve the logic of business case',
    priority: getPriority('PR2'),
    size: getSize('SZ2'),
    status: getStatus('ST1'),
    assignedTo: getDeveloper('DP4')
  },
  {
    _id: 'IS9',
    name: 'Change data structure',
    priority: getPriority('PR2'),
    size: getSize('SZ2'),
    status: getStatus('ST1'),
    assignedTo: getDeveloper('DP4')
  }
];

export const getIssues = () => issues;
