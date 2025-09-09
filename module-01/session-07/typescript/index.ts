let str: string="hello";
str = "5";
console.log(str);

let num: number = 5;

let bool: boolean = true;

let arrStr: string[] = ["test", "hello"];
let arrNum: number[] = [1,2,3];

interface IObj/*kalo kak bryan naming interface pake capital I awalnya*/{
    name: string;
    age: number;
}

const obje: IObj = {
    name: "budi",
    age: 22,
};


// Contoh module 1 day 6 exercise number 2 in TypeScript model

interface IProduct {
    name : string;
    price : number;
}

interface ICart{
    products: IProduct[];
    qty: number;
}

// interface ITransaction {
//     total: number;
//     cart: ICart;
// }
// private properties tidak perlu di define.

interface ITransaction{
    addToCart: (product: IProduct, qty: number) => void;
    showTotalMethod: () => number;
    checkOutMethod: () => {
        total : number; 
        cart: ICart;
    };
}

class Products implements IProduct {
    name = "";
    price = 0;

    constructor(_name: string, _price: number){
        this.name = _name;
        this.price = _price;
    }
}

class Transactions implements ITransaction{
    #total: number = 0;
    #cart : ICart ={
        products : [],
        qty: 0
    };

    addToCart(product: IProduct, qty: number){
        this.#cart.products.push(product);
        this.#cart.qty += qty;
        this.#total += product.price * qty;
    }

    showTotalMethod(){
        return this.#total;
    }

    checkOutMethod(){
        const result = {
            total: this.#total,
            cart: this.#cart,
        };

        this.#total = 0;
        this.#cart = {
            products: [],
            qty: 0,
        };

        return result;
    }
}

// const keyboard = new Product("keyboard", 50000);
// const mouse = new Product("mouse", 10000);
