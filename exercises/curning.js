//10-5*20/2 // 50
function calc() {
    return function add(i1) {
      return function sub(i2) {
        return function multi(i3) {
          return function divide(i4) {
            return function getResult() {
                    return (((i1 -i2) * i3) / i4);
                }
            }
          }
       }
   }
}

// closure
function print(i) {
    setTimeout(() => {
     console.log(i);
    }, 1);
}

function closure() {
  for(var i = 0 ; i<3; i++) {
    print(i);
  }
}


module.exports = {
  calc,
  closure
}