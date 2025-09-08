// 2025-09-08, Monday

/* Create a function to merge two array of student data and remove duplicate data
● Student data : name & email */



class Student {
    constructor (_name, _email){
        this.name = _name;
        this.email = _email;
    }
}

function merge(input1, input2){

    let result = [];
    for(let student1 of input1){
        result.push(student1);
    }

    for(let student2 of input2){
        let exist = false;
        
        for(let tempStudent of result){
            if(tempStudent.name === student2.name && tempStudent.email === student2.email){
                exist = true;
                break;
            }
        }
        if(exist === false){
            result.push(student2);
        }
    }

    return result;
}


let array1 = [
    new Student("Student 1", "student1@gmail.com"),
    new Student("Student 2", "student2@gmail.com"),
    new Student("Student 4", "student4@gmail.com")
  ];
  
  let array2 = [
    new Student("Student 1", "student1@gmail.com"),
    new Student("Student 3", "student3@gmail.com")
  ];
  

let merged = merge(array1, array2);
console.log(merged);

// console.log(array1[merge()]);



/* Create a function that can accept input as an array of objects and switch all values into property and
property into value */

//maybe use JSON?

let arrayToSwitch = [{ name: "David", age: 20 },
/*{name : "felix", age :30}*/];

function switchValue (input){
    let resultValue = [];

    for(let array of input){ // isinya arraymu
        //resultKey.push(key);
        for(let key in array){ // loops through key
            let swapped = {} // buat object baru
            let newKey = array[key] // buat value nya jadi new key
            let newValue = key; // buat key nya jadi new value
            swapped[newKey] = newValue; // INI CARA ISI OBJECT WITH NEW KEY AND VALUE, JANGAN LUPA THIS KATACHI
            resultValue.push(swapped);
        }
    }
    return resultValue;
}


console.log(switchValue(arrayToSwitch));


/* Create a function to find a factorial number using recursion */

function factorial(n) {
    if (n === 0) return 1;           // base case: 0! = 1
    return n * factorial(n - 1);     // recursive step, ini jangan lupa!
  }
  
  console.log(factorial(5));
  //ini ada di session-04 function.js, coba if u are bugged out, check lagi file itu. ada step by step resultnya.