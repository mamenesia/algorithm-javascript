function reverseWords(string){
  let wordsArr = string.split(' ');
  let reverseWordsArr = [];

  wordsArr.forEach( word => {
    let reverseWord = '';
    for( var i = word.length-1; i>=0; i--){
      reverseWord += word[i];
    }
    reverseWordsArr.push(reverseWord);
  });

  return reverseWordsArr.join(' ');
}

reverseWords('this is a reversed words');