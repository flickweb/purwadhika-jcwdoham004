// Write a function to get the lowest, highest and average value in the array (with and without sort function).

//normal
const highLowNormal = (inputArr) =>{
    let highest = 0;
    let lowest = 0;
    let sum = 0;
    let average;
    let result = "";

    for (let i = 0; i < inputArr.length; i++){
        // console.log(i);
        for(let j = 0; j < inputArr.length; j++){
            // console.log(j + "haha");
            if(inputArr[j] > inputArr[i]){
                highest = inputArr[j];
            }

            if(inputArr[j] < inputArr[i]){
                lowest = inputArr[j];
            }
        }
        sum += inputArr[i];
    }
    
    average = sum/inputArr.length;
    return result = `highest is ${highest}, lowest is ${lowest}, average is ${average}`;
};

console.log(highLowNormal([12, 5, 23, 18, 4, 45, 32]));


//sort function

const highLowSort = (inputArr2) =>{
    let highest2 = 0;
    let lowest2 = 0;
    let result2 = "";
    let average2 = 0;
    let sortedAsc;
    let sum2 = 0;

    sortedAsc = inputArr2.sort((a, b) => a - b)

    highest2 = sortedAsc.pop();
    lowest2 = sortedAsc.shift();

    for (let i = 0; i < inputArr2.length; i++){
        sum2 += inputArr2[i];
    }
    average2 = sum2/inputArr2.length;

    return result2 = `highest is ${highest2}, lowest is ${lowest2},  average is ${average2}`;
}; 

console.log(highLowSort([12, 5, 23, 18, 4, 45, 32]));


/* Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'. */