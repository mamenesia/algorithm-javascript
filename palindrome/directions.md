# --- Directions
  Given a string, return true if the string is a palindrome or false if it is not.  Palindromes are strings that form the same word if it is reversed. *Do* include spaces and punctuation in determining if the string is a palindrome.

#  --- Examples:
  * palindrome("abba") === true
  * palindrome("abcdefg") === false


# --- Solutions

Solution No. 1, using reverse() method

    function palindrome(str) {
      let reversed = str.split('').reverse().join('')
      return str === reversed;
    }

Solution No. 2, using every() method

    function palindrome(str) {
      return str.split('').every((char, i) => {
        return char === str[str.length -i -1];
      });
}