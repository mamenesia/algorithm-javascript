// Solution No. 1 using reverse() build-in function...

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Solution No. 2 using for loops... 

function reverseString(str) {
  let reversed = '';
  for(let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

// Solution No. 3 using reduce() build-in method...

function reverseString(str) {
  return str.split('').reduce((reversed, char) => char+reversed, "");
}
