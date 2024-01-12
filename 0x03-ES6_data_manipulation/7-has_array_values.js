export default function hasValuesFromArray(set, array) {
  const check = array.map((element) => set.has(element));
  return !(check.includes(false));
}
