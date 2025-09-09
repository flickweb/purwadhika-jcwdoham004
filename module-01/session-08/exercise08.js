// 2025-09-09, Tuesday

// Create a program to calculate total salary based on employee type

class Employee {
    constructor(_name, _time) {
        this.name = _name;
        this.time = _time;
    }
    calculate() {

    }

    addHours(input) {
        this.time += input;
        return this.time;
    }
}

class FulltimeEmployee extends Employee {
    constructor(_name, _time) {
        super(_name, _time);
    }

    calculate() {
        let salaryFull = 0;
        let regularHours = this.time;

        if (this.time > 6) {
            salaryFull = (6 * 100000) + ((regularHours - 6) * 75000);
        } else {
            salaryFull = regularHours * 100000;
        }

        return salaryFull;
    }

}

class ParttimeEmployee extends Employee {
    constructor(_name, _time) {
        super(_name, _time);
    }

    calculate() {
        let timeOT = 0;
        let salaryFull = 0;
        let salaryOT = 0;
        let regularHours = this.time;

        if (this.time > 6) {
            salaryFull = (6 * 50000) + ((regularHours - 6) * 30000);
        } else {
            salaryFull = regularHours * 50000;
        }

        return salaryFull;
    }


}


const employeeA = new FulltimeEmployee(
    "kevin",
    6
);

const employeeB = new ParttimeEmployee(
    "william",
    10
);


console.log(employeeA.calculate());
console.log(employeeA.addHours(3));
console.log(employeeB.calculate());
console.log(employeeB.addHours(2));



// Shooting Game

class ShootingGame {
    constructor(_player1, _player2) {
        this.player1 = _player1;
        this.player2 = _player2;
    }

    getRandomItem() {
        let randomItem = [
            {
            power : 0,
            health: 10,
            string: "+10 health"
            },
            {
            power: 10,
            health: 0,
            string: "+10 power"
            }
        ]
        return randomItem[Math.floor(Math.random() * randomItem.length)];
    }

    start() {
        let winner;
        let count = 1;

        while(this.player1.health > 0 && this.player2.health > 0){
        
        console.log(`Turn ${count}`);
        count++;

        this.player1.showStatus();
        this.player2.showStatus();


        this.player1.useItem(this.getRandomItem());
        this.player2.useItem(this.getRandomItem());
        
        this.player2.damage(this.player1.power);
        if(this.player2.health <= 0){
            winner = this.player1.name;
            break;
        }


        this.player1.damage(this.player2.power);
        if(this.player1.health <= 0){
            winner = this.player2.name;
            break;
        }

        

        this.player1.showStatus();
        this.player2.showStatus();

        }

        console.log(`The winner is ${winner}`);
        
    }


}

class Player {
    constructor(_name/* for letting user set value di dalam object */) {
        this.name = _name;
        this.health = 100;
        this.power = 10;
    }

    damage(power) {
        //substract player health
        this.health -= power; //kalo kamu pake this.power kayak tadi, dia substract pake his own power, bukan musuhnya
    }

    useItem(item) {
        //apply item from getrandomitem
        // if(item.health === 10){
        //     this.health += item.health;
        //     console.log(item.string)
        // }else{
        //     this.power += item.power;
        //     console.log(item.string)
        // }

        this.power += item.power;
        this.health += item.health;
        console.log(item.string)
    }

    showStatus() {
        //show player status, ex : player a (health = 100, power =10)
        console.log(`${this.name} (health = ${this.health}, power = ${this.power})`);
    }
}

const player1 = new Player(
    "player1111"
);

const player2 = new Player(
    "player2222"
);

const game = new ShootingGame(player1, player2).start();