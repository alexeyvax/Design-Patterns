// Строитель - это структурный паттерн, который используется для создания объектов со сложными
//             состояниями.


const Builder = () => {

  class Car {
    constructor() {
      this.autoPilot = false;
      this.parktronik = false;
      this.signaling = false;
    }
  }

  class CarBuilder {
    constructor() {
      this.car = new Car();
    }

    addAutoPilot(autoPilot) {
      this.car.autoPilot = autoPilot;

      return this;
    }

    addParktronik(parktronik) {
      this.car.parktronik = parktronik;

      return this;
    }

    addSignaling(signaling) {
      this.car.signaling = signaling;

      return this;
    }

    updateEngine(engine) {
      this.car.engine = engine;

      return this;
    }

    build() {
      return this.car;
    }
  }

  /* execution *************** */

  const car = new CarBuilder();

  car
    .addAutoPilot(true)
    .addParktronik(true)
    .updateEngine('V8')
    .build();

  console.log(car);
};

module.exports = Builder;
