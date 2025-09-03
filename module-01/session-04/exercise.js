//2025-09-03, Wednesday 14:14

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Exercise - Example Array Pseudocode

// const add = (a, b) =>{
//     return a + b;
// };

// console.log(add(2, 3));

// const array = [3, 5, 2, 9];

// function maxNumberFunc(arrayCheck){
//     let maxNumber = arrayCheck[0];

//     for(let i = 0; i < array.length; i++){
//         if(arrayCheck[i] < maxNumber){
//             maxNumber = arrayCheck[i];
//         }
//     }
//     return maxNumber;
// }

// let result = maxNumberFunc(array);
// console.log(result);



// Create a function that can create a triangle pattern according to the height we provided like the following :

// 01
// 02 03
// 04 05 06
// 07 08 09 10

// Parameters : Height -> Triangle height

// let input = 4;

// const triangle = (height) =>{

//     let triangleDrawing = ""; // pake ini if not, jd undefined pas ditambah
//     let count = 1;

//     for(let i = 1; i <= height; i++){
//         for(j = 1; j <= i; j++){
//             triangleDrawing +=  String(count) + " ";
//             count++;
//         }
//         triangleDrawing += "\n";
//     }

//     return triangleDrawing;
// };

// let result2 = triangle(input);
// console.log(result2);



// Create a function that can loop the number of times accroding our input.
// Replace multiple of 3 with "Fizz" andd multiple of 5 with "Buzz".
// Multiple of 3 and 5 with "FizzBuzz"


// rl.question("Input a number you want to use : ", (input2) => {

//     const fizzBuzzFunc = (input2) => {

//         let result = ""
//         // const fizz = "Fizz";
//         // const buzz = "Buzz";

//         for (let i = 1; i <= input2; i++) {
//             if (i % 3 === 0 && i % 5 === 0) {
//                 result += "FizzBuzz, ";
//             } else if (i % 3 === 0) {
//                 result += "Fizz, ";
//             } else if (i % 5 === 0) {
//                 result += "Buzz, ";
//             } else {
//                 result += `${String(i)}, `;
//             }
//         }
//         return result.slice(0, -2);

//     };

//     let result3 = fizzBuzzFunc(input2);
//     console.log(result3);

//     rl.close();
// });



// Create a function to calculate BMI
// Formula : BMI = weight(kg) / (height(meter))**
// Parameters : weight & height

// rl.question("Input your weight : ", (inputWeight)=>{
//     rl.question("Input your height in meters: ", (inputHeight)=>{
//         let bmiStatus = ["less weight", "ideal", "overweight", "very overweight", "obesity"];

//         const bmi = (weight, height)=>{
//             return Number(weight) / (Number(height)** 2); //dont forget to return the callback, kalo ga ga kebaca nanti.
//         };
//         let bmiInput = bmi(inputWeight, inputHeight);

//         if (bmiInput < 18.5) {
//             console.log(bmiStatus[0]);// mending pake array daripada awal km write one by one.
//           } else if (bmiInput > 18.5 && bmiInput < 24.9) {
//             console.log(bmiStatus[1]);
//           } else if (bmiInput > 25.0 && bmiInput < 29.9) {
//             console.log(bmiStatus[2]);
//           } else if (bmiInput > 30.0 && bmiInput < 39.9){
//             console.log(bmiStatus[3])
//           } else {
//             console.log(bmiStatus[4]);
//           }
        
//           console.log(bmiInput);

//         rl.close();
//     });
// });



// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

const removeOdds = (arr) => {
    let evenArray = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            evenArray.push(arr[i]);// jangan lupa pake push, not use unshift karna better
        }
    }

    return evenArray;
}
// ada cara better pake .filter(), nanti coba cari tau
// .filter() goes through each element of an array lalu ngasi callback function true or false based on our conditionals
// ex : let evens = numbers.filter(num => num % 2 === 0);
// dia ngasi true kalo its even lalu cuma ngesave ke num yang true, falsenya di drop
// try to make this version of removeOdds yang diatas

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result4 = removeOdds(numbers);
console.log(result4);



// Write a function to split a string and convert it into an array of words

const stringToArray = (string) => {
    return string.split(" ");
};

let text = "Hello World";
let result5 = stringToArray(text);
console.log(result5);