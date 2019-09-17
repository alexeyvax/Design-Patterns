// Фабрика - это пораждающий паттерн. который создаёт интерфейс группирующий другие фабрики, котррые логически связаны друг с другом.
//           это абстракция для фабрики и фабричного метода.

const AbstractFactory = () => {

  // Abstract factory
  function bmwProducer(kind) {
    return kind === 'sport' ? sportCarFactory : familyCarFactory;
  }

  // Factories
  function sportCarFactory() {
    return new Z4();
  }

  function familyCarFactory() {
    return new I4();
  }

  class Z4 {
    info() {
      return 'Z4 is a Sport car!';
    }
  }

  class I4 {
    info() {
      return 'I4 is a Family car!';
    }
  }

  /* execution *************** */

  const Produce = bmwProducer('sport');

  const car = new Produce();

  console.log(car.info());
};

module.exports = AbstractFactory;
