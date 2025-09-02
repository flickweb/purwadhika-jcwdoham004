//for loop is only for number iterations. not using string
//ex : while (i == "semangka") is possible while using a for loop only use numbers to loop


// do while
let x = 11

do{
    console.log(x, "ini do while");
    x++;
}while (x < 10);

//bedanya sama while tok itu flow nya. above example is even when x is already above 10 (in this instance 11),
//the code still runs because it runs do.

//do while = do first then check if loopable
//while = check first if loopable then execute/do

//real world scenario for do while = 
//we can ask users to "do" something multiple times if the conditions in the while is not applicable.

//using break = stopping a loop forcefullly
//using a condition to stop a loop is not a forceful stop