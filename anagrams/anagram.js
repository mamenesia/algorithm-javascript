// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') should return True
//   anagrams('RAIL! SAFETY!', 'fairy tales') should return True
//   anagrams('Hi there', 'Bye there') should return False

// Solution No.1

function anagrams(string1, string2) {
  let charMap1 = buildCharMap(string1);
  let charMap2 = buildCharMap(string2);

  if(Object.keys(charMap1).length !== Object.keys(charMap2).length){
    return false;
  }

  for (let char in charMap1) {
    if(charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  let charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}


// Solution No. 2

function anagrams(string1, string2) {
  return cleanString(string1) === cleanString(string2);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}