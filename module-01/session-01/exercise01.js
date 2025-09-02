let panjang1;
let lebar1;
let radius1;

let result1;

//area of rectangle
panjang1 = 5;
lebar1 = 3;

result1 = panjang1 * lebar1;
console.log(result1);

//perimeter of rectangle
let panjang2 = 5;
let lebar2 = 3;
result2 = (2 * (panjang2 + lebar2))

console.log (result2);

//diameter, circumference, area of circle
radius3 = 5

let diameter3 = 2 * radius3;
let circumference3 = 2 * 3.14 * radius3;
let area3 = 3.14 * (radius3 * radius3);

console.log(diameter3 + ", "+ circumference3 + ", " + area3)

//angles of triangle if two angles are given
let firstAngle = 80
let secondAngle = 65

result4 = (180 - firstAngle - secondAngle);
console.log(result4)

// days to years, months, days
let year = 0;
let month = 0;
let days = 400;

while (days >= 365) {
    year += 1;
    days -= 365;
}

while (days >= 30) {
    month += 1;
    days -= 30;
}

console.log(year + " year," + month + " month," + days + "days");

//pake while karna for my use case better than for. 
//for itu buat kita udah tau hitung sampe brapa. karna we don't know hwo many days pastie, we use while.

// //my "unclean" answer

// // while (days >= 365){
// //     year += 1;
// //     days -= 365;
// //     if (days - 365 <= 0){
// //         while (days >= 30){
// //             month += 1;
// //             days -= 30;
// //         }
// //     }
// // }
// console.log(year + " year," + month + " month," + days + "days");


//get difference between dates in days.
const date1 = new Date("2022-01-20"); //date needs to be in double quotes/single, kalo ga nanti jadi e 2022 dikurangin 02 dikurangin 20
const date2 = new Date("2022-01-12");

let result5 = Math.abs((date1 - date2) / (1000 * 60 * 60 * 24));
//dibagi 1000*60*60*24 karna hasilnya date1-date 2 itu jadi milisecond
//1000 ms = 1 second, 60 seconds = 1 minute, 60 minutes = 1 hour, 24 hours = 1 day.


console.log(result5);



