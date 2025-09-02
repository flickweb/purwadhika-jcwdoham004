let angka  = 55;

// comparison operator
// equal, apakah 1 value sama dengan value lainnya (hanya mengecek value tanpa mengevek tipe datanya)

console.log("apel" == "jeruk"); // akan mereturn false, karena apel tidak sama dengan jeruk
console.log("1" == 1); // akan mereturn true karena == tidak melakukan pengecekan tipe data

// strict equal, apakah 1 value sama dengan value lainnya (mengecek value dan tipe datanya)
console.log("1" === 1); // hasilnya akan menjadi false, karena tipe datanya berbeda.

// greater than, mengecek apakah value lebih besar dr value lainnya.
console.log (5 > 4); // hasil akan me-return true, karena angka 5 lebih besar daripada
console.log (5 > 5); // hasil akan me-return false, karena angka 5 tidak lebih besar/tidak lebih kecil dari 5. 5 = 5.

//greater than or equal
console.log (5 >= 5); // hasil akan me return true.

// and the other way around

// not equal
console.log(5 != "apel");// akan mereturn true, karena 5 enang benar tidak sama dengan apel.

// strict not equal
console.log(5 !== "5", "strict not equal");// akan meretrun true, karena angka 5 memang benar tidak sama dengan string 5

// apakah 1 sama dengan 0 => false
if (angka % 2 == 0){
    // block code if, hanya akan dijalankan jika kondisi = true
    console.log(angka + " adalah bilangan genap");
}else {
    // block of code else, hanya akan dijalankan jika kondisi if diatas = false
    console.log(angka + "adalah bilangan ganjil");
}

let nilai = "D";

if(nilai == "A"){
    console.log("Nilai kamu sangat bagus");
} else if (nilai == "B"){
    console.log("Nilai kamu bagus");
} else if (nilai == "C"){
    console.log("Nilai kamu kurang");
} else {
    console.log("Nilai kamu sangat kurang");
}

angka = 5;
if (angka == 5){
    console.log("Angka sama dengan 5");
} else if (angka >= 5){
    console.log("Angka lebih besar dari 5 atau sama dengan 5");
}


let buah = "jeruk";

switch (buah){
    case "apel":
        console.log("buah apel");
        break;
    case "mangga":
        console.log("buah mangga");
        break;
    default:
        console.log("buah tidak terdaftar");
    }

//harus dikasih break, kalo enggak dia kalo udah bener satu input, akan dilanjutin lagi baca case lain (karna no break)


// console.log(angka + " adalah bilangan genap");