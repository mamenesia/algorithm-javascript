function fibMemo(index, cache) {
  cache = cache || [];
  if( cache[index] ) return cache[index];
  else {
    if( index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}

// Testing fibMemo to calculate the sum of even numbers in fibonacci array under number num;
function fibEvenSum(num){
  let sum = 0; 
  for(var i=0; fibMemo(i)<num; i++){
    if(fibMemo(i)%2 === 0) { sum += fibMemo(i);}
    else continue;
  }
  console.log(sum);
  return sum;
}

fibEvenSum(100);