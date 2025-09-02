const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,   // 👈 tell it to read from standard input (keyboard)
    output: process.stdout 
});

rl.question("What is your name? ", (answer) => {
    let message ="Welcome, " +(answer);
    console.log(message);
    rl.close();
});




// // VARIABLE
// // LET MEMPERBOLEHKAN VALUE DIDALAMNYA DIRUBAH SETELAH DIBUAT
// let message = "Welcome, Budi";
// console.log(message);
// message = "Hello, Budi";

// // CONST TIDAK MEMPERBOLEHKAN VALUE DIDALAMNYA DIRUBAH SETELAH DIBUAT
// const hello = "Welcome, Budi"
// hello = "Hello, Budi";
// console.log(hello);

// //how to get a date
// let sekarang = new Date(); //gets the "now date" if there's no input inside.
// console.log(now);
// let date = new Date("2022-01-01")
// console.log(date);


// let text = "5";
// console.log(text + 5); //this is called a concat, text yang gabung sama integer/angka.


// console.log(Number(text)/*change anything inside here Number() to be a data*/ + 5)
// //the limitations here is anything can change into a number, so a text becomes a number, which results in "NaN" (not a number)
// //the Number() conversion type is only temporary, so it doesn't change the original type outside of the line/block.



