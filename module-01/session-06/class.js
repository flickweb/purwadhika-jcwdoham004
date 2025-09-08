class Student/*Notice student pake capital S diawal, kak bryan prefers this for classes*/{
    name;
    email;
    batch;
    gender;

    constructor(_name, _email, _batch, _gender){
        this.name = _name; //mau mengisi name, with _name
        this.email = _email; //mau mengisi email, with _email
        this.batch = _batch; //mau mengisi batch, with _batch
        this.gender = _gender; //mau mengisi gender, with _gender
    }
}

const studentBudi = new Student(
    "budi",
    "budi@gmail.com",
    "jcwodoham004",
    "male"
)

const studentSara = new Student(
    "sara",
    "sara@gmail.com",
    "jcwodoham004",
    "female"
)

console.log(studentBudi);
console.log(studentSara);


// Encapsulation

/* class Product{
    #name = "keyboard";
    #price = 25000;
}

const newProduct = new Product(); */

//newProduct. //it will not show name and price karna di tutup with pagar, or encapsulated. 
//bisanya di access di dalam key nya

/* correct way */

class Product{
    #name = "keyboard";
    #price = 25000;

    //acts as a door, bisanya cuman lewat ini ambil datanya.
    //misalnya kalo belum login ga bisa use getProduct to access etc.
    
    /*
    getProduct(){
        return this.#name;
    }
    */

    getProduct(){
        return {name: this.#name, price: this.#price};
    }

    updateName(name){
        this.#name = name;
    }
}

const newProduct = new Product();
console.log(newProduct.getProduct());
newProduct.updateName("mouse");
newProduct.price = 5000;
console.log(newProduct.getProduct());


class Animal {
    species;
    environment;
    // legs;
    // fin;

    constructor(_species, _environment, /*_legs, _fin*/){
        this.species = _species;
        this.environment = _environment;
        // this.legs = _legs;
        // this.fin = _fin;
    }
    speak(){
        console.log("mengeluarkan suara");
    }

}

class Cat extends Animal {
    constructor(_species, _environment, _name){
        super(_species, _environment, _name);
    }

    speak(){
        return "meow";
    }
}


class Dog extends Animal {
    constructor(_species, _environment, _name){
        super(_species, _environment, _name);
    }

    speak(){
        return "woof";
    }
}

class Snake extends Animal {
    constructor(_species, _environment, _name){
        super(_species, _environment, _name);
    }

}


const kucing = new Cat("feline", "earth", "cat");
console.log(kucing.speak());


const anjing = new Dog("canine", "earth", "dog");
console.log(anjing.speak());

const ular = new Snake("canine", "earth", "dog");
console.log(ular.speak());
 
// class AnimalHaveLegs extends Animal {
//     legs;

//     constructor(_species, _environment, _legs){
//         super(_species, _environment);
//         this.legs = _legs;
//     }
// }


// class AnimalHaveFin extends Animal{
//     constructor(_species, _environment, _fin){
//         super(_species, _environment);
//         this.fin = _fin;
//     }
// }

// // const macan = new Animal("tiger", "earth", true, false);
// // console.log(macan);

// // const lumbalumba = new Animal("dolphin", "water", false, true);
// // console.log(lumbaLumba)

// const macan = new AnimalHaveLegs("tiger", "earth", 4);
// console.log(macan);

// const lumbalumba = new AnimalHaveFin("dolphin", "water", 3);
// console.log(lumbalumba);



class CoffeeMachine{

    makeCoffee(){
        this.#boilWater();
        this.#brewCoffee();
        this.#pourCoffee();
        console.log("coffee is done")
    }

    boilWater(){
        console.log("Boild Water");
    }

    brewCoffee(){
        console.log("Brew Coffee");
    }

    pourCoffee(){
        console.log("Pour Coffee");
    }
}

const buatKopi = new CoffeeMachine();
buatKopi.makeCoffee();