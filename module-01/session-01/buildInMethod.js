//  NUMBER

let angka = 5.152312;
console.log (angka.toFixed(2/*ini brapa angka di belakang koma. if its clear, it doesn't output any number after the decimal*/));

//built in method itu code yang udah dibuatin prelayout to do something. aslinya ada code filenya udahan di javascript.

// STRING
let text = "hello budi"
console.log(text.toUpperCase());
let textAngka ="5";
console.log(Number(textAngka));
console.log("Hello, BUDI".toLowerCase()/*we can access built in method this way, using a period */);

let num = "5.25345";
num = Number(num);
console.log(num.toFixed(1)); //hasilnya warna putih di terminal vscode, artinya bisa di "chaining."
//chaining itu artinya kita bisa kasih built in method string lagi after this. example:

let result = Number(num)      // "5.25345" → 5.25345 (Number)
    .toFixed(2)               // → "5.25" (String)
    .replace("5","9")         // → "9.25" = REPLACES 5 TO 9
    .concat(" USD");          // → "9.25 USD"

console.log(result); // "9.25 USD"
