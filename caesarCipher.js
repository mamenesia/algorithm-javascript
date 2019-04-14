function caesarCipher(str, num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for(var i = 0; i < lowerCaseString.length; i++){
    let currentLetter = lowerCaseString[i];
    if(currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if(newIndex > 25) newIndex = newIndex - 26;
    else if(newIndex < 0) newIndex = 26 + newIndex;
    else newIndex = newIndex;

    if(str[i] === str[i].toUpperCase()){
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }

  console.log(newString);
  return newString;
}


caesarCipher('Javascript', -900); 