const mouse ={
    // properties object
    // brand adalah sebuah keu
    // "logitech" adalah sebuah value
    brand : "logitech",

    //type adalah sebuah key
    //"gx500" adalah sebuah value
    type : "gx500",

    price : 2500,
};

console.log(mouse); //calls the full objectt
console.log(mouse.price); //calls the key's value inside the object
console.log(mouse["type"]); //same as the above

mouse.price = 250000;
mouse.color = "red";

//properties itu ga boleh sama value/key nya in general. 
//jadi kalo awalnya ada the same value/key, bakal di tiban like price above
//kalo gaada, it will make a new one kayak color.

//acessing something yang gaada nanti leads to undefined kalo objectnya no properties, and error kalo gaada objectnya as a whole

console.log(mouse);
delete mouse.color; //deletes the key color
console.log(mouse);

const person ={
    name : "Budi Doremi",
    // firstName : "Budi",
    // lastName : "Doremi",
    //ga perlu di jadiin object if not needed, mending dipisah like above if u want to
    email : "budi@gmail.com",
    phoneNumber : "08123123123",
    address:{
        address : "jln jalanan no 52",
        // postal: {
        //     code: "112345",
        //     provinsi : "lalaland",
        //     kecamatan : "lala out",
        // },
    },
};

//console.log(person.address.postal.kecamatan); //chaining to get a value inside an object of an object etc.
console.log(person.address.postal?.kecamatan); // this is called optional
//dikasi gini to filter if kecamatan is there or not. kalo gaada skip and display/access the rest 
//if ada display/access everything sesuai what you wrote


// person.address.postal.city = "Bandung"; //adding key and value with chaining
// console.log(person.address.postal);

const test ={
    a: "ini string",
    b: "ini number",
    c: [
        {
            d : true,
            e : [1, 5, 6, 7]
        }
    ]
}
console.log(test.c[0].e[3]); //ada di exam ini


// MUTABLE & IMMUTABLE
let string = "hello";
let newString = string;
newString = "welcome";
console.log(string);

const arr = [1, 2, 3, 4, 5];
const newArr = arr;
arr.push(10);
newArr.push(50);
console.log(newArr, arr);

/* 
Immutable (cannot be changed) :
- Once created, the value can't be changed
- If you change it, nanti javascript creates a new copy in the memory
examples :  string, number, boolean, null, undefined, symbol, bigint.

*/

/*
Mutable (can be changed)
- Value can be updated in place, without creating a new one
examples : objects -> {} , arrays -> {}, functions
 */

// (...) spread operator helps with making multiple mutable types

//the problem
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr2.push(4);

// console.log(arr1); // [1, 2, 3, 4] ❌ changed too

//the fix
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // new array, not reference

arr2.push(4);

console.log(arr1); // [1, 2, 3] ✅ untouched
console.log(arr2); // [1, 2, 3, 4]

/* spread operator creates a shallow copy, 
artinya dia buat new object/array in the heap and copies over values 

sekarang the two variables point to different heap objects.

Without ... -> both variables share the same reference in the heap -> changing one affects the other.

With ... -> you make a new copy -> changes are isolated.
*/


// Destructuting

// Original object
const laptopExtremeGaming = {
    brand: "hp",
    type: "xtreme",
    cpu: "intel i7",
    ram: "32gb",
    gpu: "nvidia gtx 9999",
    color: "platinum",
    display: "ultra hd",
    resolution: "2k"
  };
  
  // Example: normal access (ga pake destructuring)
  console.log(laptopExtremeGaming.brand); // hp
  console.log(laptopExtremeGaming.cpu);   // intel i7
  

  // Pake Destructuring
 
  const {
    brand: brands, // rename "brand" into "brands"
    type,
    cpu,
    ram,
    gpu,
    color,
    display,
    resolution
  } = laptopExtremeGaming;
  
  // Now you can access directly without writing "laptopExtremeGaming."
  console.log(brands);      // hp
  console.log(type);        // xtreme
  console.log(cpu);         // intel i7
  console.log(ram);         // 32gb
  console.log(gpu);         // nvidia gtx 9999
  console.log(color);       // platinum
  console.log(display);     // ultra hd
  console.log(resolution);  // 2k

