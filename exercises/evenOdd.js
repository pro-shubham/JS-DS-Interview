function checkEvenOdd(input) {
    if(input <= 0) return 'Not valid number';
    return (input % 2 == 0) ? 'Even number' :  'Odd number';
}

function printEvenOdd(input) {
   if(input <= 0) return 'Not valid number';
   return Array.from({length: input}, (_, index) => { 

     return  `${index+1}: ${((index+1)%2 == 0) ? 'Even Number' : 'Odd Number'}`
   })
  }

module.exports = {
  printEvenOdd,
  checkEvenOdd
}