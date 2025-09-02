// console.log("Hello World");

// the status "U" beside the file name means its "Untracked"
// that indicates that the file is new

// there are multiple statuses, such as :

// Untracked : The file is not being tracked by Git
// Added : The file has been added to the repository
// Modified : The file has been modified
// Deleted : The file has been deleted



// // Exercise - Example in Pseudocode
 const readline = require("readline");
// const limit = 10;


const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

// rl.question("Type a number : ", (answer) =>{
//     let result;

//     for(let i = 1; i <= limit; i++){
//         result = answer * i;
//         console.log(answer + " x " + i + " = " + result);
//         //console.log(`${answer} x ${i} = ${result}`);
//         //above is a cleaner code, after you've learned it
//     }

//     rl.close();
// })



// Check whether a string is a palindrome


// //let palindrome;
// let palindromeReversed;

// rl.question("Input a word : ", (answer2) =>{
//     //palindrome = answer2.split("");
//     //console.log(palindrome);

//     //palindromeReversed = palindrome.reverse().join("");
//     //console.log(palindromeReversed);
//     palindromeReversed = answer2.split("").reverse().join("");
//     if(answer2 === palindromeReversed){
//         console.log("Palindrome")
//     }else{
//         console.log("Not a palindrome")
//     }
    
//     rl.close();
// })


// Write a code to convert centimeter to kilometer

// rl.question("Input a number to convert to centimeter : ", (answer3) => {
//     console.log(`${answer3/100000} KM`);
//     rl.close();
// })



// Write a code to format number as currency (IDR)

// You need to put a parseInt into a var/let so the value doesn't change.
// if you don't after parsing, the value returns to the original.

// rl.question("Input a number to convert to Rupiah : ", (answer4) =>{
//     const num = parseInt(answer4);
//     console.log(`Rp. ${num.toFixed(2)}`)

//     //console.log(price.toLocaleString("id-ID", { minimumFractionDigits: 2 }));
//     //a better way to do it

//     rl.close();
// })


// Write a code to remove the first occurence of a given "search string" from a string

// let string;
// let stringSearch;

// // rl.question("Input the name of the string : ", (answer5)=>{
// //     string = answer5
// //     rl.question("Input the name of your 'Search String' : ", (answer6)=>{
// //         stringSearch = answer6.split(" ");

// //         for(let i = 0; i <= stringSearch.join("").length - 1; i++){
// //             //if statement to check if the first index alphabet of stringSearch is the same as string
// //             //cari cara lebih simple dari ini, maybe pake built-in method?
// //         }
// //         rl.close();
// //     })
// // })

// rl.question("Input the name of the 'String' : ", (answer5)=>{
//     rl.question("Input the name of the 'Search String' :", (answer6)=>{
//         string = answer5;
//         //console.log(string);
//         stringSearch = string.indexOf(answer6);
//         //console.log(stringSearch);

//         let beforeText = string.slice(0, stringSearch);
//         //console.log(beforeText);
//         let afterText = string.slice(stringSearch + answer6.length);
//         //console.log(afterText);

//         console.log(beforeText + afterText);

//         rl.close();
//     })
// })


// Write a code to capitalize the first letter of each word in a string
let words;

rl.question("Input your word/words here : ", (answer7)=>{
    words = answer7.split(" ");
    for(let i = 0; i < words.length; i++){
        let wordsCaps = words[i].charAt(0).toUpperCase();
        let wordsRest = words[i].slice(1);
        
        //ini array
        words[i] = wordsCaps + wordsRest;
    }
    console.log(words.join(" "));
    rl.close();
})


// Write a code to swap the case of each character from string
// Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

//test