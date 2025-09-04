/*  TRUTHY OR FALSY */

// TRUTHY
console.log(Boolean("3"));
console.log(Boolean(50));
console.log(Boolean([]));

// FALSY
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));


/// contoh

// //1st type
// function greet(message){
//     if (message){
//         return message;
//     }
//     return "kosong"
// }

//2nd type
function greet(message){
    if (!message){
        return "INPUT TIDAK SESUAI";
    }
    return message;
}

console.log(greet(0));



// SHORT CIRCUITING && OPERATOR
// jika value /operand dikiri berupa truthy, maka ambil value dikiri
// tapi jika value / operand berupa falsy, makan ambil value di kanan.
console.log(true && "KANAN JALAN", "OPERAND KANAN JALAN");
console.log(false && "KIRI JALAN", "OPERAND KIRI JALAN");

// SHORT CIRCUITING || OPERATOR
function showName(name){
    // jika value /operand dikiri berupa truthy, maka ambil value dikiri
    // tapi jika value / operand berupa falsy, makan ambil value di kanan.
    const nama = name || "USER"; 
    return nama.toUpperCase();
}

//contoh salah, ngebuat website rusak
//yang ini gabisa karna gada truthy or falsy, jadi kalo skali false lgsg return error.
//kalo yang atas bakal return user kalo falsy
function showName(name){
    const nama = name; 
    return nama.toUpperCase();
}

console.log(showName(""));