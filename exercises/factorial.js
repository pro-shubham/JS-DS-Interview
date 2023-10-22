function factorial(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers";
    }
    if (n === 0 || n === 1) {
      return 1;
    }
  
    return Array.from({length: n}, (_,index)=> index+1).reduce((a,b) => a*b, 1);
}

function factorialRecur(n) {
  if (n === 0) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
}

module.exports = {factorial, factorialRecur};