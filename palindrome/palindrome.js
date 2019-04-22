// Solution No. 1, using reverse() method

function palindrome(str) {
  let reversed = str.split('').reverse().join('')
  return str === reversed;
}

// Solution No. 2, using every() method

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length -i -1];
  });
}