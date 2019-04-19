function recursiveFibonacci(position) {
  if(position < 3){
    return 1;
  } else {
    return recursiveFibonacci(position -1) + recursiveFibonacci(position -2);
  }
}

recursiveFibonacci(4);