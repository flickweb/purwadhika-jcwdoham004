//Wednesday, Aug 27 2025

//code to check odd or even
let input1 = 11;

if (input1 % 2 == 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

//code to check whether the number is a prime number or not
let input2 = 11;
let isPrime = true;

if (input2 < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < input2; i++) {
        if (input2 % i === 0) {
            isPrime = false;
            break;
        }
        // else{
        //     isPrime = true;
        //
        //ga perlu yg diatas itu karna redundant
    }
}

if (isPrime === true) {// = itu assign, === itu for checking
    console.log("prime number");
} else {
    console.log("not a prime number");
}

//find the sum of the numbers 1 to n
let input3 = 5;
let result3 = 0;

for(let i = 1; i <= input3; i++){
    result3 += i;
}

console.log(result3);

// math shortest formula || the theoretical formula for this is {{n(n+1)/2}}

let n = 5;
let result = n * (n + 1) / 2;
console.log(result); // 15


// find a factorial of a number

let i = 4;
let result4 = 1;

 for(i; i >= 2; i--){
    result4 = result4 * i;
    
}
console.log(result4);


//fibonacci numbers
let m = 15;
let num1 = 0;
let num2 =1;
let next = 0;

for(let l = 0; l < m - 1; l++){
    // console.log(l);
   next = num1 + num2;
   num1 = num2;
   num2 = next;
  
}

console.log(num2);