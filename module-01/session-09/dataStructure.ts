export{};

const str: string = "test"

// NON PRIMITIVE DATA STRUCTURE

// STACK
// Data structure technique LIFO (Last in, First Out); push pop

interface IStack{
    push: (n: number) => void;
    pop: () => void;
    show: () => number[];
}

class Stack implements IStack{
    #container: number[] = [];

    push(n: number){
        this.#container.push(n);
    }

    pop(){
        this.#container.pop();
    }

    show(){
        return this.#container;
    }
}


const newStack = new Stack();
newStack.push(5);
newStack.push(6);
newStack.push(1);
newStack.pop()

console.log(newStack.show());


// QUEUE
// FIFO (First in First Out) push shift

interface IQueue{
    push: (n: number) => void;
    shift: () => void;
    show: () => number[];
}

class Queue implements IQueue{
    #container: number[] = [];

    push(n: number){
        this.#container.push(n);
    }

    shift(){
        this.#container.pop();
    }

    show(){
        return this.#container;
    }
}

const newQueue = new Stack();
newQueue.push(5);
newQueue.push(6);
newQueue.push(1);
newQueue.pop()

console.log(newQueue.show());


// SET
// set itu data strcutre baru yang tidak memperbolehkan any duplicates of data

//ini normal array data structure
const arr: number[] = [1, 2, 3, 1, 4, 5];
console.log(arr);

//new set stucture yang ini
const newArr = new Set(arr);
console.log(newArr);

//dia dari set diganti jadi normal array type lg, jadi no duplicates arraynya
const newArr2 = Array.from(new Set(arr));
console.log(newArr2);


// MAP
const obj = {
    name: "budi",
    2: 22,
}

console.log(obj);

// const newMap = new Map();
// newMap.set({ name : "Budi"}, {1, 2, 3, 4});
// console.log(newMap);

