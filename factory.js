// Фабрика - это пораждающий паттерн, использующийся для создания одинаковых по структуре объектов

const Factory = () => {

  class Bmw {
    constructor(model, price, maxSpeed) {
      this.model = model;
      this.price = price;
      this.maxSpeed = maxSpeed;
    }
  }

  class BmwFactory {
    create(type) {
      if (type === 'x5') {
        return new Bmw(type, 108000, 300);
      } else if (type === 'x6') {
        return new Bmw(type, 111000, 320);
      }
    }
  }

  const factory = new BmwFactory();

  /* execution *************** */

  const x5 = factory.create('x5');
  const x6 = factory.create('x6');

  console.log(x5);
  console.log(x6);
};

module.exports = Factory;
