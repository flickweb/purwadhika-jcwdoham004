// Write a function from a given array of mixed data types and return the sum of all the number

let mixedArray = ["3", 1, "string", null, false, undefined, 2];

const mixedArraySum = (input) => {
    let result = 0;
    for(let i = 0; i < input.length; i++){
        if(typeof input[i] === "number"){
            result += input[i];
        }
        //console.log(input[i]);
    }
    return result;
};

console.log(mixedArraySum(mixedArray));


/* Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements). */

const maxSize = 5;

const arrayIntMax = (input2, ...input3) =>{ //rest itu buat nge "sweep" the remaining things and puts in into an array
    const result = [];

    for(let i = 0; i < input3.length && result.length < input2 ; i++){
        result.push(input3[i]);
        //console.log(i);
    }

    return result;
}

console.log(arrayIntMax(maxSize, 5, 10, 24, 3, 6, 7, 8)); 
//looks weird at first, tp ini possible using rest.
console.log(arrayIntMax(maxSize, (5, 10, 24, 3, 6, 7, 8))); //ini cuman ngambil the last value of the thing after comma inside parantheses.




// Write a function that will combine 2 given array into one array

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arrayComb = (input4, input25) => {
//     let combined = input4.concat(input5);
//     return combined;
// }

// console.log(arrayComb(arr1, arr2));



// Write a function to find duplicate values in an array

constArrEx = [1, 2, 2, 2, 3, 3, 4, 5, 5];

const findDuplicate = (input) =>{
    const dup = [];
    let count = 0;

    for(let i = 0; i < input.length; i++){
        if (dup.includes(input[i])) continue;
        for(let j = 0; j < input.length; j++){
            if(input[i] === input[j]){
                count++;
            }
        }
        if (count > 1){
            dup.push(input[i]);
        }
        count = 0;
    }
    return dup;
}

console.log(findDuplicate(constArrEx));


/* Write a function to find duplicate values in an array */

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const findDiff = (arrayOne, arrayTwo) =>{
    const onlyInOne = arrayOne.filter(val => !arrayTwo.includes(val));//remember to use filter more.
    const onlyInTwo = arrayTwo.filter(val => !arrayOne.includes(val));

    return onlyInOne.concat(onlyInTwo);//remember kalo pake concat bisa gabungin like what you did above
}

console.log(findDiff(array1, array2))