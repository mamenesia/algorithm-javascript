# --- Directions

Write a function that returns the number of vowels
used in a string.  Vowels are the characters 'a', 'e'
'i', 'o', and 'u'.

# --- Examples
  * vowels('Hi There!') should return 3
  * vowels('Why do you ask?') should return 4
  * vowels('Why?') should return 0


# --- Solutions

// Solution no 1

    function vowels(str) {
      let count = 0;
      let checker = ['a', 'i', 'u', 'e', 'o'];

      for(let char of str.toLowerCase()) {
        if(checker.includes(char)) {
          count++;
        }

      }

      return count;
    }


// Solution no 2

    function vowels(str) {
      const matches = str.match(/[aiueo]/gi);
      return matches ? matches.length: 0;
    }