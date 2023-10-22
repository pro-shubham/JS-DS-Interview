function stepsRTL(input) {
    for (let row = input - 1; row >= 0; row--) {
      let level = '';
      for (let col = 0; col < input; col++) {
        if (col >= row) {
          level += '*';
        } else {
          level += ' ';
        }
      }
      console.log(level);
    }
  }
  function stepsLTR(input) {
    for (let row = 0; row < input; row++) {
      let level = '';
      for (let col =  row; col > 0; col--) {
          level += '*';
      }
       console.log(level);
    }
  }
  function downToTop(input) {
     for (let row = 0; row < input; row++) {
       let level = '';
       for (let col = row; col < input; col++) {
           level += '*';
       }
        console.log(level);
     }
  }
  
module.exports = { 
  stepsRTL,
  stepsLTR,
  downToTop
}