export const sizes = [
  { _id: "SZ1", name: "Small" },
  { _id: "SZ2", name: "Medium" },
  { _id: "SZ3", name: "Large" }
];

export function getSizes() {
  return sizes.filter(s => s);
}
