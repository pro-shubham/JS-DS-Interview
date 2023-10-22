
//Given the input string "abbbccddddaab," could you explain how you would implement a JavaScript function to transform it into "a1b3c2d4a2b1"? Please describe the steps and logic you would use to achieve this transformation.

function countCharSerlize(string) {
    let str = string;
    let count = 1;
    let result = '';
     for(let i = 0; i <  str.length ;i++) {
         if(str[i] == str[i+1]) {
             count ++
         } else {
            result += str[i] + count;
            count = 1;
         }
     }
    return result;
}

function countAllChar(string) {
   const arrString = string.replace(/[^a-z0-9]/gi,'').split('');
   return arrString.reduce((count, item) =>{
      count[item] = (count[item] || 1) + 1;
       return count;  
   } ,{}); 
}

module.exports = { countCharSerlize, countAllChar};