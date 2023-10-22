// for beginners 
function countVowelsType1(string) {
    const vowel= ['a','e','i','o','u'];
    return  string.split('').filter(e => vowel.includes(e)).length;
 }

function countVowels(string) {
   const matchString = string.toLowerCase().match(/[aeiou]/gi);
   return  matchString ? matchString.length : 0;
}

module.exports = countVowels;
