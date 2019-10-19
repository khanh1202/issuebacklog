export const priorities = [
  { _id: "PR1", name: "Priority 1" },
  { _id: "PR2", name: "Priority 2" },
  { _id: "PR3", name: "Priority 3" }
];

export function getPriorities() {
  return priorities.filter(p => p);
}
