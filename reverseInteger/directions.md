# --- Directions
Given an integer, return an integer that is the reverse ordering of numbers.

# --- Examples
  * reverseInt(15) should return 51
  * reverseInt(981) should return 189
  * reverseInt(500) should return 5
  * reverseInt(-15) should return -51
  * reverseInt(-90) should return -9

# --- Solutions
  Solution No. 1

    function reverseInt(n) {
      const reversed = n.toString().split('').reverse().join('');
      return parseInt(reversed) * Math.sign(n);
    }