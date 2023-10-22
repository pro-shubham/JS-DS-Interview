function fizbuzz(input) {
    if(input <  1 ) return input;
    const filledArray = Array.from({ length: input }, (_, index) => index+1);
  
    let fizbuzzMap = filledArray.map((e) => {
        const fiz = e % 3 == 0;
        const buzz = e % 5 == 0;
        return ( fiz && buzz ) ? 'fizbuzz' : fiz ? 'fiz' : buzz ? 'buzz' : e;
    });
  
    return fizbuzzMap;
  }

module.exports = fizbuzz;