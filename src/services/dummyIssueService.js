export const issues = [
  {
    _id: "IS1",
    name: "Validation bug",
    priority: { _id: "PR1", name: "Priority 1" },
    size: { _id: "SZ1", name: "Small" },
    status: { _id: "ST1", name: "To Do" },
    assignedto: {}
  },
  {
    _id: "IS2",
    name: "Console crashing out",
    priority: { _id: "PR2", name: "Priority 2" },
    size: { _id: "SZ1", name: "Priority 1" },
    status: { _id: "ST1", name: "To Do" },
    assignedto: {}
  },
  {
    _id: "IS3",
    name: "Incorrect matching transactions",
    priority: { _id: "PR2", name: "Priority 2" },
    size: { _id: "SZ1", name: "Priority 1" },
    status: { _id: "ST1", name: "To Do" },
    assignedto: {}
  },
  {
    _id: "IS4",
    name: "Exiting Defect",
    priority: { _id: "PR2", name: "Priority 2" },
    size: { _id: "SZ1", name: "Priority 1" },
    status: { _id: "ST1", name: "To Do" },
    assignedto: {}
  },
  {
    _id: "IS5",
    name: "Change Title",
    priority: { _id: "PR2", name: "Priority 2" },
    size: { _id: "SZ1", name: "Priority 1" },
    status: { _id: "ST1", name: "To Do" },
    assignedto: {}
  },
  {
    _id: "IS6",
    name: "Migrate data",
    priority: { _id: "PR2", name: "Priority 2" },
    size: { _id: "SZ1", name: "Priority 1" },
    status: { _id: "ST1", name: "To Do" },
    assignedto: {}
  },
  {
    _id: "IS7",
    name: "Revert issue 1 from the system",
    priority: { _id: "PR2", name: "Priority 2" },
    size: { _id: "SZ1", name: "Priority 1" },
    status: { _id: "ST1", name: "To Do" },
    assignedto: {}
  },
  {
    _id: "IS8",
    name: "Improve the logic of business case",
    priority: { _id: "PR2", name: "Priority 2" },
    size: { _id: "SZ1", name: "Priority 1" },
    status: { _id: "ST1", name: "To Do" },
    assignedto: {}
  },
  {
    _id: "IS9",
    name: "Change data structure",
    priority: { _id: "PR2", name: "Priority 2" },
    size: { _id: "SZ1", name: "Priority 1" },
    status: { _id: "ST1", name: "To Do" },
    assignedto: {}
  }
];

export function getStatuses() {
  return statuses.filter(i => i);
}
