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

// let myString = "  JavaScript Fundamentals  ";
// myString = myString.trim();
// myString = myString.toUpperCase();
// myString = myString.replace("FUNDAMENTALS", "Basics");
// let javaIndex = myString.indexOf("JAVASCRIPT");

// console.log(myString, + `${javaIndex}`);

// let arr = [1,5,2,6,3,7,4,8];
// let sum = 0;
// // add code which adds up all the even numbers in the array and store it in the variable sum
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         sum += arr[i];
//     }
// }
// console.log(sum); // Output: 20

function isDivisible(num){
    if(num % 3 == 0 | num % 4 == 0){
        return true;
    } else {
        return false;
    }
}

console.log(isDivisible(3))