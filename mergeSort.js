function mergeSort(array) {
  if(array.length < 2) return array;
  let middleIndex = Math.floor(array.length/2);
  let firstArray = array.slice(0, middleIndex);
  let secondArray = array.slice(middleIndex);
  
  merge(firstArray, secondArray);
}

function merge(array1, array2) {  
  var result = [];
  while(array1.length && array2.length){
    let minNum;
    if(array1[0] < array2[0]) minNum = array1.shift();
    else minNum = array2.shift();

    result.push(minNum);
  }

  if(array1.length) result = result.concat(array1);
  else result = result.concat(array2);

  return result;
}