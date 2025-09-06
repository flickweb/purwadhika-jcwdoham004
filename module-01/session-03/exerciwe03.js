// console.log("Hello World");

// the status "U" beside the file name means its "Untracked"
// that indicates that the file is new

// there are multiple statuses, such as :

// Untracked : The file is not being tracked by Git
// Added : The file has been added to the repository
// Modified : The file has been modified
// Deleted : The file has been deleted



// Exercise - Example in Pseudocode
 const readline = require("readline");
// const limit = 10;


const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Type a number : ", (answer) =>{
    let result;

    for(let i = 1; i <= limit; i++){
        result = answer * i;
        console.log(answer + " x " + i + " = " + result);
        //console.log(`${answer} x ${i} = ${result}`);
        //above is a cleaner code, after you've learned it
    }

    rl.close();
})



// Check whether a string is a palindrome


//let palindrome;
let palindromeReversed;

rl.question("Input a word : ", (answer2) =>{
    //palindrome = answer2.split("");
    //console.log(palindrome);

    //palindromeReversed = palindrome.reverse().join("");
    //console.log(palindromeReversed);
    palindromeReversed = answer2.split("").reverse().join("");
    if(answer2 === palindromeReversed){
        console.log("Palindrome")
    }else{
        console.log("Not a palindrome")
    }
    
    rl.close();
})


//Write a code to convert centimeter to kilometer

rl.question("Input a number to convert to centimeter : ", (answer3) => {
    console.log(`${answer3/100000} KM`);
    rl.close();
})



// Write a code to format number as currency (IDR)

// You need to put a parseInt into a var/let so the value doesn't change.
// if you don't after parsing, the value returns to the original.

rl.question("Input a number to convert to Rupiah : ", (answer4) =>{
    const num = parseInt(answer4);
    console.log(`Rp. ${num.toFixed(2)}`)

    //console.log(price.toLocaleString("id-ID", { minimumFractionDigits: 2 }));
    //a better way to do it

    rl.close();
})


// Write a code to remove the first occurence of a given "search string" from a string

let string;
let stringSearch;

// rl.question("Input the name of the string : ", (answer5)=>{
//     string = answer5
//     rl.question("Input the name of your 'Search String' : ", (answer6)=>{
//         stringSearch = answer6.split(" ");

//         for(let i = 0; i <= stringSearch.join("").length - 1; i++){
//             //if statement to check if the first index alphabet of stringSearch is the same as string
//             //cari cara lebih simple dari ini, maybe pake built-in method?
//         }
//         rl.close();
//     })
// })

rl.question("Input the name of the 'String' : ", (answer5)=>{
    rl.question("Input the name of the 'Search String' :", (answer6)=>{
        string = answer5;
        //console.log(string);
        stringSearch = string.indexOf(answer6);
        //console.log(stringSearch);

        let beforeText = string.slice(0, stringSearch);
        //console.log(beforeText);
        let afterText = string.slice(stringSearch + answer6.length);
        //console.log(afterText);

        console.log(beforeText + afterText);

        rl.close();
    })
})


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

let words2;
let words2Split;
let words2New = [];

rl.question("Input your word/words here : ", (answer8)=>{
    words2 = answer8.split(" ");
    // console.log(words2);
    words2Split = answer8.split("");
    // console.log(words2Split)
    // console.log(words2Split.join(""))

    for(let i = 0; i < words2Split.length; i++){
        // console.log(i);
        if(words2Split[i] === words2Split[i].toUpperCase()){
            // console.log("uppercase!!")
            words2New.push(words2Split[i].toLowerCase());
        }else{
            // console.log("no no no!");
            words2New.push(words2Split[i].toUpperCase());
        }
    }

    console.log(words2New.join(""));

    rl.close();
})


// Write a code to find the largest of two given integers
// Example : num1 = 42, num2 = 27 → 42

let inputNumber1;
let inputNumber2;

rl.question("Input the first number : ",(answer9)=>{
    inputNumber1 = parseInt(answer9);
    // console.log("test");
    rl.question("Input the second number : ",(answer10)=>{
        inputNumber2 = parseInt(answer10);
        if(inputNumber1 > inputNumber2){
            console.log(inputNumber1);
        }else if(inputNumber2 > inputNumber1){
            console.log(inputNumber2);
        }else{
            console.log("First and second number is equal to each other.")
        }
        rl.close();
    })
    // console.log("test2");
})


// Write a conditional statement to sort three numbers
// Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

let numInput1;
let numInput2;
let numInput3;
let temp = 0; // jangan lupa kasi value dulu, kalo ga undefined like before

rl.question("Enter the first number : ", (answer11) => {
    numInput1 = Number(answer11);
    rl.question("Enter the second number : ", (answer12) => {
        numInput2 = Number(answer12);
        rl.question("Enter the third number : ", (answer13) => {
            numInput3 = Number(answer13);// use Number() karna what you type is considered a string, not a number. Jangan lupa, awalnya km lupa

            if(numInput1 > numInput2){
                temp = numInput1; // kamu masukin reversed awalnya, you have to store the old file first dumdum
                numInput1 = numInput2;
                numInput2 = temp;
            }
            if(numInput1 > numInput3){
                temp = numInput1; 
                numInput1 = numInput3;
                numInput3 = temp;
            }
            if(numInput2 > numInput3){
                temp = numInput2;
                numInput2 = numInput3;
                numInput3 = temp;
            }

            // you used else if instead of 3 ifs. with else ifs, nanti programmu runs only one branch and skips the rest.
            // kalo pake 3 ifs, dia check everything independently. that way other conditions still get compared and swapped if needed.


            console.log(`${numInput1} , ${numInput2}, ${numInput3}`);

            
            rl.close()
        })
    })
})



// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others datatype.
// Example : “hello” → 1


// try to find an answer to this.. error kalo ak taruh ! or @ (yes bukan data type but worth a shot).
// paling pake try-cactch?
rl.question("Type an input here : ",(inputDetect) => {

    let inputDetectType = JSON.parse(inputDetect); // ini tries to parse into a real type

    if (typeof inputDetectType === "number" && !isNaN(inputDetectType)/*isNaN itu buat check if its a number or not*/) {
        console.log("2");
      } else if (typeof inputDetectType === "string") {
        console.log("1");
      } else {
        console.log("3");
      }
      rl.close();
})



// easy way, cuman tinggal masukin let nya dikasih data.

let inputDetect = [];

if (typeof inputDetect === "string") {
    console.log("1");
  } else if (typeof inputDetect === "number") {
    console.log("2");
  } else {
    console.log("3");
  }
  


// Write a code to change every letter a into * from a string of input
// Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

rl.question("Type a sentence: ", (inputChangeA) => {
    let resultForA = "";
  
    for (let i = 0; i < inputChangeA.length; i++) {
      if (inputChangeA[i] === "a" || inputChangeA[i] === "A") {
        resultForA += "*";
      } else {
        resultForA += inputChangeA[i];
      }
    }
  
    console.log(resultForA);
    rl.close();
  });