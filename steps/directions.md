# --- Directions

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

# --- Examples

* steps(2)
  should return:
      '# '
      '##'
* steps(3)
  should return:
      '#  '
      '## '
      '###'
* steps(4)
  should return:
      '#   '
      '##  '
      '### '
      '####'


# --- Solutions

// Solution No 1

    function step(n) {
      for(let row = 0; row < n; row++){
        let step = "";

        for(let col = 0; col < n; col++){
          if(col <= row) {
            step += '#';
          } else {
            step = ' ';
          }
        }

        console.log(step);
      }
    }


// Solution No 2

    function steps(n, row = 0, step = '') {
      if(n === row){
        return;
      }

      if(n === step.length) {
        console.log(step);
        return steps(n, row+1);
      }

      // if(step.length <= row) {
      //   step += '#';
      // } else {
      //   step += ' ';
      // }

      let add = step.length <= row ? '#' : ' ';
      steps(n, row, step + add);
    }