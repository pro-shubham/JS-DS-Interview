// for biegner
// function capitialize(input) {
//    if(input === '') return input;
//    let string = input.split(' ');
//    for(let i = 0; i < string.length; i++) {
//      let word = string[i][0].toUpperCase() + string[i].substring(1); 
//      string[i] = word;
//    }
//     return string.join(' '); 
// }

function capitalize(input) {
    return input
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
 }

 module.exports = capitalize;