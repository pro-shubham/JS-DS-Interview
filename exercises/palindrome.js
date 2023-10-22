function palindrome(string) {
   const reverseString = string.split('').reverse().join('');
   return string === reverseString;
}

module.exports = palindrome;