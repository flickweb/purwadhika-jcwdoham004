// 2025-09-06, Saturday

// Create a function to calculate array of student data

/* PLEASE CARI CARA TO SIMPLIFY ALL OF IT! */

function calcData (input){
    let scoreResult = [];
    let ageResult = [];
    let totalScore = 0;

    for(let key of input){
        scoreResult.push(key.score);
        ageResult.push(key.age);
    }

    scoreResult = scoreResult.sort((a, b) => b - a);
    let highestScore = scoreResult[0];
    let lowestScore = scoreResult[scoreResult.length-1];

    for (let score of scoreResult) {
        totalScore += score;
    }
    let averageScore = totalScore / scoreResult.length;

    
    ageResult = ageResult.sort((a, b) => a - b);

    let oldest = ageResult[0];
    let youngest = ageResult[ageResult.length - 1];


    let totalAge = 0;
    for (let age of ageResult) {
        totalAge += age.getTime();
    }


    let averageAgeMilli = totalAge / ageResult.length; //jangan lupa age lengthnya in millisecond, kamu bingung pol awal-awal
    let averageAge = new Date(averageAgeMilli);

    //cara buat ganti jadi age
    let now = new Date();
    let oldestAge = now.getFullYear() - oldest.getFullYear();
    let youngestAge = now.getFullYear() - youngest.getFullYear();
    let averageAgeNum = now.getFullYear() - averageAge.getFullYear();

    return {
        score : {highest : highestScore, lowest : lowestScore, average : averageScore},
        age : {oldest : oldestAge, youngest : youngestAge, averageAge : averageAgeNum}
    }; //to return multiple stuffs, harus di wrap in array or object, this case ak pilih object because it gives keys
}


let studentsData = [
    {
    name : "Felix",
    email : "felix@gmail.com",
    age : new Date('2001-01-01'),
    score : 80
    },
    {
    name : "Mike",
    email : "Mike@gmail.com",
    age : new Date('2002-02-02'),
    score : 90
    },
    {
    name : "Sarah",
    email : "Sarah@gmail.com",
    age : new Date('2003-03-03'),
    score : 70
    }
]

console.log(calcData(studentsData));



// Create a program to create transaction
class Product {
    constructor(_name, _price){
        this.name = _name;
        this.price = _price;
    }
}

const product1= new Product(
    "Laptop A",
    10000,
)

const product2= new Product(
    "Laptop B",
    20000,
)

class Transaction {
    constructor (){
        this.total = 0;
        this.items = [];
    }
    addToCart(product, qty){
        this.items.push({product: product.name, quantity: qty});
        this.total += product.price * qty;
    }

    showTotal(){
        return this.total;
    }
    
    checkout(){
        return{
            items : this.items,
            total : this.total
        };
    }
}


const transactionFinal = new Transaction();

transactionFinal.addToCart(product1, 2);
transactionFinal.addToCart(product2, 1);

console.log(transactionFinal.showTotal());
console.log(transactionFinal.checkout());