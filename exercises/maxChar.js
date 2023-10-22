// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples

function maxChar(input) {
    const charCount = {};
    input.replace(/[^\w]/g, '').split('').forEach(char => {
        charCount[char] = (charCount[char] || 0) + 1;
    });
  
    let maxChar = '';
    let maxCount = 0;
  
    for (const char in charCount) {
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }
  
    return `{ ${maxChar} : ${maxCount} }`; 
}

module.exports = maxChar;
  
