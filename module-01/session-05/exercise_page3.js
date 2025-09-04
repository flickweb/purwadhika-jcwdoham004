// Based on the array below write a function that will return primitive data types only.
//let arr = [1, [], undefined, {}, "string", {}, []];

console.log(typeof 1);
console.log(typeof "");
console.log(typeof null); //ini jd object but primitive
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof []); //non primitive krna object
console.log(typeof {}); //non primitive krna object

function primitiveOnly(arr) {
    const result = [];
    for (const value of arr) {
        if (typeof value !== "object" || value === null) {
            result.push(value)
        }
    }

    return result;
}


console.log(
    primitiveOnly([1, {}, [], true, "Halo", "message", 5, false, undefined, null])
);



// Write a function from the below array of number that will return sum of duplicate values.
//let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];

function sumDuplicate(arr) {
    let sum = 0; //total sum of summed duplicates
    const dup = []; // to save if there's any duplicates

    for (let i = 0; i < arr.length; i++) {
        if (dup.includes(arr[i])) continue; // if the "dup" array includes the number of the current value of the current index, skip this loop's index.

        let count = 0; // to "count" how many times a current value is duplicated
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) { //check if there's duplicates
                count++; // adds the duplicate counter
            }
        }

        if (count > 1) { // after the inner loop/nested loop is finished, sum the multiplied duplicated number by how many duplicates it "counted"
            sum += arr[i] * count;
            dup.push(arr[i]); // push the value to the dup array, to check next if the duplicated value is already summed.
        }

    }

    return sum;
}

console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]));



/* Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
between rock, paper, or scissor. */

function rockPaperScissor(input) {

    input = input.toUpperCase();
    let option = ["ROCK", "PAPER", "SCISSOR"];
    const comp = option[Math.floor(Math.random() * 3)];

    if (!option.includes(input)) return "INVALID INPUT";



    let message = `You throw ${input}, Computer throws ${comp}, You `;

    if (input === comp) {
        message += "DRAW";
    } else if (
        (input === option[0] && comp === option[2]) ||
        (input === option[1] && comp === option[0]) ||
        (input === option[2] && comp === option[1])
    ) {
        message += "WIN";
    } else {
        message += "LOSE";
    }

    return message;
}

console.log(rockPaperScissor("rock"));