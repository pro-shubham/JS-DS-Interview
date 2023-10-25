const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  const q = new Queue;
  
  // Continue looping until both sourceOne and sourceTwo are empty
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  // Return the result as an array with alternating elements
  return q;
}

module.exports = weave;
