function fizbuzz(input) 
{
    if(input <  1 ) return input;
    const filledArray = Array.from({ length: input }, (_, index) => index+1);
  
    let fizbuzzMap = filledArray.map((e) => {
        const fiz = e % 3 == 0;
        const buzz = e % 5 == 0;
        return ( fiz && buzz ) ? 'fizbuzz' : fiz ? 'fiz' : buzz ? 'buzz' : e;
    });
  
    return fizbuzzMap;
}

function fizzBuzz1(n) {
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

module.exports = {fizbuzz, fizzBuzz1};
