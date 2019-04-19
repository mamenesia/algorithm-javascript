function binarySearch(arr, key) {
  let middleIndex = Math.floor(arr.length/2);
  let middleNum = arr[middleIndex];

  if(middleNum === key) {
    return true;
  } else if(middleNum < key && arr.length > 1){
    return binarySearch(arr.splice(middleIndex, arr.length), key);
  } else if(middleNum > key && arr.length > 1) {
    return binarySearch(arr.splice(0, middleIndex), key);
  } else {
    return false;
  }
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 5);
binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 15);