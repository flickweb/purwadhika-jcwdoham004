// SYNCHRONOUS
console.log(1);
console.log(2);
console.log(3);


// ASYNCHRONOUS

console.log(1);
setTimeout(() => console.log(2) /* ini callbackm, 1st argument */, 2000 /* second argument */);
console.log(3);


// PROMISE

const makeIceCream = new Promise ((resolve, reject) =>{
    let isReady = false;

    setTimeout(() =>{
        if(isReady){
            resolve("Es krim sudah bisa diambil");
        } else {
            reject("Es krimnya jatoh");
        }
    }, 2000);
});

makeIceCream
.then((str)=> console.log(str, "ini then jalan"))
.catch((err) => console.log(err, "ini catch jalan"))
.finally(() => console.log("it is done"));


// ASYNC AWAIT


async function networkCall(){
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await data.json();

    //await cuman dipakai untuk function yang async

    console.log(res);
}

networkCall();

// kak mau nanya, ada use case khusus ga kak untuk pakai new Promise daripada pakai async function?


const obj = {
    name: "budi",
    age: 22,
};

const json = JSON.stringify(obj);
console.log(json)

const newJson = JSON.parse(json);
console.log(newJson);