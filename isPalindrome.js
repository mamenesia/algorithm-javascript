function isPalindrome(str){
  str = str.toLowerCase();
  let charArray = str.split('');
  let validChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let letterArr = []
  charArray.forEach(char => {
    if(validChar.indexOf(char) > -1) letterArr.push(char);
  });

  if(letterArr.join('') === letterArr.reverse().join('')){console.log(true);    
  return true;}
  else {console.log(false);
  return false;}
}

isPalindrome("Madam, I'm Adam");