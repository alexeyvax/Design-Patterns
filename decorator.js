// Декоратор - это структурный паттерн, который позволяет добавлять объектам новые свойства и 
//             методы, т.е. обернуть существующий класс в декоратор и расширить его функциональность.


const Decorator = () => {

  class Car {
    constructor() {
      this.price = 10000;
      this.model = 'Car';
    }

    getPrice() {
      return this.price;
    }

    getDescription() {
      return this.model;
    }
  }

  class Tesla extends Car {
    constructor() {
      super();

      this.price = 25000;
      this.model = 'Tesla';
    }
  }

  class Autopilot {
    constructor(car) {
      this.car = car;
    }

    getPrice() {
      return this.car.getPrice() + 5000;
    }

    getDescription() {
      return `${this.car.getDescription()} with autopilot`;
    }
  }

  class Parctronik {
    constructor(car) {
      this.car = car;
    }

    getPrice() {
      return this.car.getPrice() + 3000;
    }

    getDescription() {
      return `${this.car.getDescription()} with parktronik`;
    }
  }

  class Audi extends Car {
    constructor() {
      super();

      this.price = 20000;
      this.model = 'Audi';
    }
  }

  /* execution *************** */

  // Version with autopilot and parktronic
  let tesla = new Tesla();
  tesla = new Autopilot(tesla);
  tesla = new Parctronik(tesla);

  console.log(tesla.getPrice(), tesla.getDescription());

  // Tesla with autopilot only
  let tesla2 = new Tesla();
  tesla2 = new Autopilot(tesla2);

  console.log(tesla2.getPrice(), tesla2.getDescription());

  // Audi with autopilot only
  let audi = new Audi();
  audi = new Autopilot(audi);

  console.log(audi.getPrice(), audi.getDescription());
};

module.exports = Decorator;
