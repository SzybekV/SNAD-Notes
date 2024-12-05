// Variables
// Function Scoped eg. defined through entire progrram and its legacy
// var x = 3;
// Blocked scoped i.e. the variable can be only accessed within the block its declared
// let y = 4;

// const pi = 3.142;

// Primitive Datatypes

// String

// let myArray =  ["JavaScript", "is", "Fun"];
// myArray.push("!");
// myArray.pop();
// myArray[1] = "really";
// myArray.shift();
// myArray.unshift("Coding");
// myArray.splice(2, 1, "is");
// myArray.push("awsome");
// console.log(myArray);

let myString = "  JavaScript Fundamentals  ";
myString = myString.trim();
myString = myString.toUpperCase();
myString = myString.replace("FUNDAMENTALS", "Basics");
let javaIndex = myString.indexOf("JAVASCRIPT");

console.log(myString, + `Index of JavaScript is ${javaIndex}`);