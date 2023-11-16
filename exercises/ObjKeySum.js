let arr = [
    {a: 2},
    {a: 2},
    {b: 1},
    {b: 9},
  ];
  
let output = {};
  
arr.forEach(obj => {
let key = Object.keys(obj)[0]; // Assuming each object has only one key
let value = obj[key];

if (output[key] === undefined) {
    output[key] = value;
} else {
    output[key] += value;
}
});

console.log(output);
  

//   class Singleton {
//     constructor() {
//       if (!Singleton.instance) {
//         // If no instance exists, create one
//         Singleton.instance = this;
//       }
  
//       // Return the instance
//       return Singleton.instance;
//     }
  
//     // Add your class methods and properties here
//   }
  
//   // Usage
//   const obj1 = new Singleton();
//   const obj2 = new Singleton();
  
//   console.log(obj1 === obj2); // true, because both variables reference the same instance

//Another way of create instance
// var Singleton = {
//     instance: null,
//     getInstance: function () {
//       if (this.instance === null) {
//         this.instance = {
//           // your singleton instance properties and methods go here
//         };
//       }
//       return this.instance;
//     }
//   };
  
//   // Usage
//   var instance1 = Singleton.getInstance();
//   var instance2 = Singleton.getInstance();
  
//   console.log(instance1 === instance2); // true
  
