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

// function isDivisible(num){
//     if(num % 3 == 0 | num % 4 == 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// function isDivisible(num){
//     return num % 3 == 0 || num % 4 == 0;
// }
// console.log(isDivisible(12))

// let number = 3.7;

// let roundedNumber =  Math.floor(number); // Rounds

// console.log(roundedNumber);

// function grade(mark){
//     let result = mark < 0 || mark > 100 
//     ? "Invalid"
//     : mark >= 70 
//     ? "Passed with Distinction"
//     : mark >= 40 
//     ? "Pass"
//     : "Fail";
//     return result;
// }

// console.log(grade(35));

// function difficulty(input){
//     switch(level){
//         case 1:
//             return "Easy";
//         case 2:
//             return "Medium";
//         case 3:
//             return "Hard";
//         default:
//             return "Error";
//     }
// }

//FizzBuzz Challange

// for(let i = 0; i < 101;  i++){
//     console.log(
//         i % 3 == 0 & i % 5 == 0 
//         ? "FizzBuzz"
//         : i % 3 == 0 
//         ? "Fizz" 
//         : i % 5 == 0  
//         ? "Buzz": i
//     );
// }

//Palindrome Checker

// function palidromeChecker(inputString){
//     return inputString == inputString.split("").reverse().join("");
// }

// console.log(palidromeChecker("hello"));

//Random Number game

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let random = Math.floor(Math.random() * 10) + 1;

function askQuestion(){
    rl.question("Guess number between 1 and 10: ", (input) => {
        const guess = parseInt(input);
        let outcome = input == random ? "You win!" : input > random ? "Too High":"Too Low";
        console.log(outcome);
        rl.close();
        if(outcome != "You win!"){
            askQuestion();
        } else {
        }
    })
}

askQuestion();