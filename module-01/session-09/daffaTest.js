class mobil {
    //simpen data mobil
    constructor(name) {
      this.name = name;
      this.speed = 100;
      this.bensin = 100;
      this.jarak = 0;
      //dari 0 default
    }
    jalan() {
      this.bensin -= 10;
      // Mengurangi bahan bakar sebanyak 10 dan menambah jarak sesuai kecepatan
      //-= 10 → mengurangi bahan bakar sebanyak 10 (kaya ini bensin = bensin - 10) atau bayar buat bisa jalan, setiap jalan kurang 10 bensin
      this.jarak += this.speed;
      // Memastikan bahan bakar tidak kurang dari 0
      if (this.bensin < 0) {
        this.bensin = 0;
      }
    }

    FungsiKecepatan(item) {
        // Menerapkan efek item pada speed mobil
        this.speed += item.speed;
        //mengubah speed sesuai item yang digunakan berdasarkan properti speed pada item
        // contoh: item = { speed: 20 } → speed mobil bertambah 20
      }
      showStatus() {
        // Menampilkan status mobil dalam format yang ditentukan
        return `${this.name} (Speed => ${this.speed}, Bensin => ${this.bensin}, Jarak => ${this.jarak})`;
        // contoh output: "Mobil A (Speed => 120, Bensin => 90, Jarak => 120)"
        //penulisan tanpa template
        // return (
        //   this.name +
        //   " (Speed => " +
        //   this.speed +
        //   ", Bensin => " +
        //   this.bensin +
        //   ", Jarak => " +
        //   this.jarak +
        //   ")"
        // );
      }
    }
    const mobilGw = new mobil("porsche");
    mobilGw.FungsiKecepatan({ speed: 80 });
    mobilGw.jalan();
    console.log(mobilGw.showStatus());


/*RacingGame class,
Constructor:
constructor(car1: Car, car2: Car)
,
Methods:
getRandomItem(): { speed: number }
Possible items:
{ speed: +20 } (boost),
{ speed: -20 } (trap),
{ speed: 0 } (nothing),
,
,
start(): void
Game flow:
Show both cars’ status.,
Give each car a random item.,
Both cars move.,
Repeat until one car’s fuel ≤ 0.,
Compare distances → show winner. */