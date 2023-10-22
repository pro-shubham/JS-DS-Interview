// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples


function chunk(array, size) {
  const chunk = [];
  let index = 0;

  while (index < array.length) {
    chunk.push(array.slice(index, index + size));
    index += size;
  }
  
  return chunk;
}

module.exports = chunk;
