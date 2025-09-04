// function declaration
// built in method is kinda the same like function, cuman beda tempat

// correct way to do it
// you have to call the function for it to work, like console.log(addTwo(8));
// function addTwo(num){
//     return num + 2;
// }

// console.log(addTwo(8));


// function addThree(num1){
//     console.log(num1 + 2);
// }

// addThree(3) // this is called an argument.
// without the argument, addthree's function would not work.


// function addNumber (a, b){
//     console.log(a + b);
// }

// addNumber(3, 2); //if the parameter has 2 values, the argument also need 2 values. if not, it'll not work.
//paramater values === argument values.
//no parameter values === no argument values, if not it'll not work


// function greet(){
//     return "Hello World";
// }

// const message = greet();
// console.log(message); // you can put a function inside a container too.

// function addNumber2 (d, e, f){
//     return d + e + f;
// }
//     addNumber2(2, 2, 2);
//     const num2 = addNumber2(1, 2, 3);
//     const num3 = addNumber2(5, 5, 5);
//you can do it like the above too.



// REST PARAMETER

//rest parameter accept any number of arguments and bundle them into a single array.
//only one rest parameter is allowed, and it must be the last parameter in the function.
//it gives you flexibility when you don’t know how many arguments will be passed.

//rules for rest parameters :
//ga boleh ditaruh di parameter pertama, for example  function substractNumber(a, b, ...nums).
//the rest parameter, ...nums, can only be used in the last pos.
//substractNumber(...nums, a, b) this will cause an error.


function substractNumber(...nums){
    // console.log(nums);
    let sum = nums[0]
    for(let i = 1; i < nums.length; i++){
        sum -= nums[i];
    }
    console.log(sum);
}

substractNumber(5, 3, 2, 5, 3, 5, 2, 1);



// DEFAULT VALUE
// Dipakai kalo gatau harus pake nomor brapa, nanti angka terakhirnya ngikutin what we setted, in this case b pasti jadi 1 if there's no value pas kita kasih argument.
// Deafult value cuman bisa dipake di akhir variable atau in all variables, gaisa cuman di awal.
// Ga bisa ditaruh diawal karena if we put a value in an argument, dia masukin paling kiri dulu, baru ke kanan.
// So if "function perkalian (a = 1, b)" lalu km "console.log(perkalian(5));", yang ke ganti "a" lalu "b" tetep undefined.



function perkalian (a, b = 1){
  console.log(a , b);
  return a * b;
}

console.log(perkalian(5));



// FUNCTION EXPRESSION

const multiplicationNumber = function (a, b){
    return a * b;
};

console.log(multiplicationNumber(5, 2));

//bedanya function declaration and expression :
//declaration doesnt care argumentmu diatas or dibawah function.  kalo expression cares.



const checkOddEven = (num) => {
    // let message = "";
    // if(num % 2 === 0){
    //     message = "Bilangan " + num + " adalah bilangan genap";
    // }else{
    //     message = "Bilangan " + num + " adalah bilangan ganjil";
    // }
    // return message;

    // TERNARY OPERATOR (Penyingkatan If Else)
    // daripada panjang kayak diatas, you can shorten it up like this
    return num % 2 === 0
        // ? "Bilangan " + num + " adalah bilangan genap"
        // : "Bilangan " + num + " adalah bilangan ganjil"
        ? `Bilangan ${num} adalah bilangan genap`
        : `Bilangan ${num} adalah bilangan ganjil`;

        //you can do this too, like you did last time supaya ga perlu pake + + stuffs
};

console.log(checkOddEven(10))


// NESTED FUNCTION

function greeting(name){
    function message(){
        return "Hello";
    }

    function greet(){
        return "Welcome";
    }

    let result =`${message()} ${greet()}, ${name}`;
    return result;
}

console.log(greeting("Budi"));


// CLOSURE
// closure memastikan the function inside a parent function still works.

function pertambahan(num){
    return function () {
        return num + 2;
    };
}

const tambah = pertambahan(5);
//console.log(tambah); //kalo cuman gini tok, dia return function bukan 7
console.log(tambah()) //harus gini karena its a function.

//setelah function liat return, dia lgsg stop a code and "returns a value" to the argument, regardless ada sesuatu or no dibawahnya.
//karna itu return harus slalu paling bawah.
//in this case, "tambah" (not "tambah()") returns a function karna dia return this part => "return function ()"
//with () dia nge return isi functionnya, which is "return num + 2;"



/* THINGS TO DO */


//buka leetcode, kerja 14 soal easy, 3 soal medium in problems set  leetcode.
//nanti screenshot halaman progress in leetcode kalo udah.

//deadline akhir module 1 for everything. (pdf and leetcode)
//lgsg kirim link exercisenya for the pdf github file.

//for leetcode, screenshot, masukin gdrive, lalu kirim link gdrivenya kesitu.
//how you solve the code doesnt matter.


/* END */




// CURRYING
// Currying is a technique where a function doesn’t take all its arguments at once.
// Instead takes them one at a time, returning a new function each time until all arguments are provided.
// Bisa reuse function lebih efisien, ga perlu nulis beberapa kali hal yang sama.

function multiply(a) {
    // a is locked here
    return function(b) {
      // b is flexible
      return a * b;
    };
  }
  
  const timesFive = multiply(5); // outer → a = 5 is locked
  console.log(timesFive(2)); // 10
  console.log(timesFive(3)); // 15
  console.log(timesFive(4)); // 20



  // RECURSION
  // Recursion is when a function calls itself until it reaches a condition to stop (called the base case).
  // Used for problems that can be broken into smaller versions of the same problem (factorial, Fibonacci, traversing files, etc.).




  // Example 1 (easiest)

  function countdown(n) {
    if (n <= 0) {              // 1) base case
      console.log("Done!");
      return;
    }
    console.log(n);            // do something
    countdown(n - 1);          // 2) recursive step (move toward base case)
  }
  
  countdown(3);

//countdown(3) → prints 3 → calls countdown(2)
//countdown(2) → prints 2 → calls countdown(1)
//countdown(1) → prints 1 → calls countdown(0)
//countdown(0) → base case → prints “Done!” → stops  


// Example 2 (Contoh Factorial)

function factorial(n) {
    if (n === 0) return 1;           // base case: 0! = 1
    return n * factorial(n - 1);     // recursive step
  }
  
  console.log(factorial(5)); // 120

//factorial(5) → 5 * factorial(4)
//factorial(4) → 4 * factorial(3)
//factorial(3) → 3 * factorial(2)
//factorial(2) → 2 * factorial(1)
//factorial(1) → 1 * factorial(0)
//factorial(0) → 1 (stop)
//Multiply on the way back: 1 → 1 → 2 → 6 → 24 → 120 
