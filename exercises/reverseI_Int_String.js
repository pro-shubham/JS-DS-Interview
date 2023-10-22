// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples

function reverseString(string) {
  const revStr = string?.split('')?.reverse()?.join('');
  return revStr;
}

function reverseInteger(input) {
  const convertNumber = Math.floor(input).toString().split('').reverse().join('');
  return parseInt(convertNumber) * Math.sign(input)
}

module.exports = { reverseString, reverseInteger};