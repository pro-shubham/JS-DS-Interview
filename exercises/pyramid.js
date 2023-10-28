function pyramid(input) {
    const calCol = input * 2 - 1;
    let midpoint = Math.floor(calCol / 2);
    for (let row = 0; row < input; row++) {
      let level = '';
      for (let col = 0; col < calCol; col++) {
        if (midpoint - row <= col && midpoint + row >= col) {
          level += '#';
        } else {
          level += ' ';
        }
      }
       console.log(level);
    }
}

module.exports = pyramid;
