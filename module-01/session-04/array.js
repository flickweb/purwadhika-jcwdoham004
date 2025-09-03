// PRIMITIVE DATA TYPE
const string = "this is a string";
const num = 5;
const bool = true;
const undef = undefined;
const _null = null;


// NON PRIMITIVE DATA TYPE
// biasanya "NON PRIMITIVE DATA TYPE" itu a type yang nampung "PRIMITIVE DATA TYPE"
const arrOfNum = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14];
//console.log(arrOfNum);
console.log(arrOfNum[0]);

const arrOfStr = ["hello", "world"];
arrOfStr.push("message"); // insert an element into an array in the end of an array.
arrOfStr.unshift("first"); // insert an element into an array in the start of an array.
arrOfStr.pop(); // removes the last element of an array.
arrOfStr.shift(); // removes the first element of an array.
console.log(arrOfStr.length); // checks the length of an element


console.log(arrOfStr);

// for(let i = 0; i < arrOfNum.length; i++){
//     console.log(arrOfNum[i]);
// }

for(let i = 0; i < arrOfStr.length; i++){
    console.log(arrOfStr[i].toUpperCase());
}

for (const value of arrOfStr){ //why can we use const? because after every loop, its a different instance.
    console.log(value.toUpperCase());
}
// the above example will always output everything inside the array.