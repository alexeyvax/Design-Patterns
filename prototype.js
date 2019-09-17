// Прототип - это порождающий паттерн, с помощью которого можно создать копию объекта и в случае
//            необходимости изменить экземпляр точечно, не изменяя базовой структуры

const Prototype = () => {

  class TeslaCar {
    constructor(model, price, interior, autopilot) {
      this.model = model;
      this.price = price;
      this.interior = interior;
      this.autopilot = autopilot;
    }

    produce() {
      return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
    }
  }

  /* execution *************** */

  // Produce base auto
  const prototypeCar = new TeslaCar('S', 80000, 'black', false);

  // Cloning of bas auto
  const car1 = prototypeCar.produce();
  const car2 = prototypeCar.produce();
  const car3 = prototypeCar.produce();

  // Changes for particulat auto
  car1.interior = 'white';
  car1.autopilot = true;

  console.log(car1);
  console.log(car2);
  console.log(car3);
};

module.exports = Prototype;
