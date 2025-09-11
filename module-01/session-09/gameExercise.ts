export{};


class Game{

  car1: Car;
  car2: Car;

  constructor(_car1, _car2){
    this.car1 = _car1;
    this.car2 = _car2;
}

  getRandomItem() {
    const randomItems = [
        { speed: 20, string: "boost +20 speed" },
        { speed: -20, string: "trap -20 speed" },
    ];
    return randomItems[Math.floor(Math.random() * randomItems.length)];
}

start(){


  let winner
  let count : number = 1;
  let distanceWinner : number;


  while(this.car1.fuel > 0 && this.car2.fuel > 0){
      console.log(`turn ${count}`);
      count++;

      const item1 = this.getRandomItem();
      this.car1.useItem(item1);
      this.car1.move();

      const item2 = this.getRandomItem();
      this.car2.useItem(item2);
      this.car2.move();

      if(this.car1.fuel <= 0){
          break;
      }

      if(this.car2.fuel <= 0){
          break;
      }
  }

  if(this.car1.distance >= this.car2.distance){
      winner = this.car1.name
      distanceWinner = this.car1.distance;
  }else{
      winner = this.car2.name;
      distanceWinner = this.car2.distance;
  }

  console.log(`winner is ${winner}. distance = ${distanceWinner}`);
  
}

}



class Car{

  name: string;
  speed: number;
  fuel: number;
  distance : number;

  constructor(_name : string, ){
    this.name = _name;
    this.speed = 100;
    this.fuel = 100;
    this.distance = 0;
    }

    move(){
      if (this.fuel <= 0) return;

        //makan bahan bakar
        this.fuel -= 10
        this.distance += this.speed;
        console.log(`mobil ini jalan until ${this.distance}`);
    }

    useItem(item){
      this.speed = Math.max(0, this.speed + item.speed);
      console.log(`${this.name} dapet item: ${item.string}, speed baru: ${this.speed}`);
   }
  }


  const car1 = new Car(
    "car111"
);

const car2 = new Car(
    "car22"
);

const game = new Game(car1, car2).start();