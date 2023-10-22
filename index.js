// Import all required functions and modules
const anagrams = require('./exercises/anagrams');
const arrayChunk = require('./exercises/arrayChunk');
const capitalize = require('./exercises/capitalize');
const countChar = require('./exercises/characterCount');
const curning = require('./exercises/curning');
const evenOdd = require('./exercises/evenOdd');
const factorial = require('./exercises/factorial');
const countVowels = require('./exercises/findVowels');
const fizbuzz = require('./exercises/fizzbuzz');
const maxChar = require('./exercises/maxChar');
const matrix = require('./exercises/makeMatrix');
const mergeIntervals  = require('./exercises/mergeIntervals');
const paildrome = require('./exercises/palindrome');
const isPrime = require('./exercises/primeNumber');
const pyramid = require('./exercises/pyramid');
const reverse = require('./exercises/reverseI_Int_String');
const playRPS = require('./exercises/rockPaperScissors');
const sort = require('./exercises/sorting');
const printSteps = require('./exercises/steps');

// Example usages for different functions

console.log("Anagrams:");
console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));

console.log("Array Chunking:");
console.log(arrayChunk([1, 2, 3, 4], 2));
console.log(arrayChunk([1, 2, 3, 4, 5], 2));

console.log("String Capitalize:");
console.log(capitalize("i love india"));

console.log("Character Count:");
const inputString = "abbbccddddaab";
console.log(countChar.countCharSerlize(inputString));
console.log(countChar.countAllChar(inputString));

console.log("Curning Function:");
console.log(curning.calc()(10)(5)(20)(2)());
console.log(curning.closure());

console.log("Even and Odd Functions:");
console.log(evenOdd.checkEvenOdd(10));
console.log(evenOdd.printEvenOdd(10));

console.log("Factorial:");
console.log(factorial.factorial(5));
console.log(factorial.factorialRecur(5));

console.log("Count Vowels:");
console.log(countVowels('MyLoveCode'));

console.log("FizzBuzz:");
console.log(fizbuzz(15));

console.log("Max Character:");
console.log(maxChar('adasdaaa !!!1'));

console.log("Spherical Matrix:");
console.log(matrix(4));

console.log("Merge Intervals:");
const input1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(input1));
const input2 = [[1, 4], [4, 5]];
console.log(mergeIntervals(input2));
const input3 = [[1, 3], [2, 4], [6, 8], [9, 10]];
console.log(mergeIntervals(input3));

console.log("Palindrome:");
console.log(paildrome('abba'));

console.log("Is Prime Number:");
const num = 7; // Change this to the number you want to check
if (isPrime(num)) {
  console.log(num + ' is a prime number');
} else {
  console.log(num + ' is not a prime number');
}

console.log("Pyramid Pattern:");
console.log(pyramid(6));

console.log("Reverse String and Integer:");
console.log(reverse.reverseString('apple'));
console.log(reverse.reverseInteger(123456));

console.log("Rock-Paper-Scissors:");
console.log(playRPS('rock', 'scissors'));
console.log(playRPS('rock'));

console.log("Sorting of Array:");
const inputArr = [2, 4, 6, 1, 0, 3];
console.log(sort.bubbleSort(inputArr));
console.log(sort.selectionSort(inputArr));
console.log(sort.mergeSort(inputArr));

console.log("Print Steps:");
printSteps.stepsRTL(5);
printSteps.stepsLTR(5);
printSteps.downToTop(5);
