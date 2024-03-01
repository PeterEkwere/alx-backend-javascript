import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const numArr = [19, 20, 34];
  const objArr = [];
  for (const num of numArr) {
    objArr.push(new ClassRoom(num));
  }
  return objArr;
}
