export const statuses = [
  { _id: "ST1", name: "To Do" },
  { _id: "ST2", name: "In Progress" },
  { _id: "ST3", name: "Testing" },
  { _id: "ST4", name: "Problem" },
  { _id: "ST5", name: "Resolved" }
];

export function getStatuses() {
  return statuses.filter(s => s);
}
