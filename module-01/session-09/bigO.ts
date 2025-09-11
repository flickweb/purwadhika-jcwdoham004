function o1(n: number[]){
    return n[0];
}

console.log(o1([5, 6, 7, 8, 9, 10])); // 5


//n bertambah, waktu bertambah)
function on(n: number[]){
    for(const num of n) {
        console.log(num);
    }
}

on([5, 6, 7, 8, 9, 10 ,11, 12, 13, 14]); 5


//n pangkat 2

function on2(n: number[]){
    for(const num of n) {
        for(const num2 of n){
            console.log(num === num2)
        }
    }
}

on2([5, 6, 7, 8, 9, 10, 42, 69, 12, 100, 10000]);


function on3(n:number[]){
    for(const num of n){
        for(const num2 of n){
            for(const num3 of n){
                console.log(num === num2);
            }
        }
    }
}

on3([5, 6, 7, 8, 9, 10, 42, 69, 12, 100, 10000]);

//kalo di dalem method (find out why sort itu jadi "o(n log n)"" )
function oNLogN(n: number[]){
    return n.sort();
}