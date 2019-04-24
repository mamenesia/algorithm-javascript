# --- Directions
Given an array and chunk size, divide the array into many subarrays where each subarray is of length size

# --- Examples

* chunk([1, 2, 3, 4], 2) should return [[ 1, 2], [3, 4]]
* chunk([1, 2, 3, 4, 5], 2) should return [[ 1, 2], [3, 4], [5]]
* chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) should return [[ 1, 2, 3], [4, 5, 6], [7, 8]]
* chunk([1, 2, 3, 4, 5], 4) should return [[ 1, 2, 3, 4], [5]]
* chunk([1, 2, 3, 4, 5], 10) should return [[ 1, 2, 3, 4, 5]]

# --- Solution

Solution No. 1

    function arrayChunk(array, size) {
      let chunked = [];

      for(let element of array) {
        let lastElement = chunked[chunked.length -1];

        if(!lastElement || chunked.length === size) {
          chunked.push([element]);
        } else {
          lastElement.push(element);
        }
      }

      return chunked;
    }

Solution No. 2

    function arrayChunk(array, size) {
      let chunked = [];
      let index = 0;
      while(index < array.length) {
        chunked.push(array.slice(index, index+size));
        index += size;
      }

      return chunked
    }