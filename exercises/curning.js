//10-5*20/2 // 50
function calc() {
  return function add(i1) {
    return function sub(i2) {
      return function multi(i3) {
        return function divide(i4) {
          return function getResult() {
            return (((i1 - i2) * i3) / i4);
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

//if the ask for exact format to apply function 
function get() {
  let value = 0;

  const api = {
    add: function (num) {
      value += num;
      return api;
    },
    sub: function (num) {
      value -= num;
      return api;
    },
    multiply: function (num) {
      value *= num;
      return api;
    },
    divided: function (num) {
      if (num !== 0) {
        value /= num;
      } else {
        console.error("Cannot divide by zero.");
      }
      return api;
    },
    getResult: function () {
      return value;
    },
  };

  return api;
}

// // Example usage:
// const result = get().add(5).sub(2).multiply(10).divided(2).getResult();
// console.log(result); // Output: 20


module.exports = {
  calc,
  closure
}
