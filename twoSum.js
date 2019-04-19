function twoSum(arr, sum) {
  let pairs = [];
  let hashtable = [];

  for( var i=0; i < arr.length; i++) {
    var currentNum = arr[i];
    var counterpart = sum - currentNum;
    if(hashtable.indexOf(counterpart) !== -1) {
      pairs.push([ currentNum, counterpart] );
    }
    hashtable.push(currentNum);
  }

  console.log(pairs)
  return pairs;
}


twoSum([1, 6, 4, 5, 3, 3], 7);