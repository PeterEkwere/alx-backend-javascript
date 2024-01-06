export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = [];
  for (const element of array) {
    arrayCopy.push(appendString + element);
  }

  return arrayCopy;
}
