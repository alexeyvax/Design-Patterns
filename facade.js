// Фасад - этот паттерн скрывает сложную логику за простым фасадом, собрать различные сложные 
//         структуры, объеденить их и выдать простой способ манипуляции.

// Применять стоит если, есть большая и запутанная логика или функции со множеством параметром


const Facade = () => {

  class Conveyor {
    setBody() { console.log('Body is set!'); }

    getEngine() { console.log('Engine has been removed!'); }
    setEngine() { console.log('Engine is set!'); }

    setInterior() { console.log('Interior has been added!'); }
    getInterior() { console.log('Interior is added!'); }

    setExterior() { console.log('Exterior has been added!'); }
    getExterior() { console.log('Exterior is added!'); }

    setWheels() { console.log('Wheels has been added!'); }
    addElectronics() { console.log('Electronics has been added!'); }

    paint() { console.log('Car has been painted!'); }
  }

  class ConveyorFacade {
    constructor(car) {
      this.car = car;
    }

    assemblecar() {
      this.car.setBody();
      this.car.setEngine();
      this.car.setInterior();
      this.car.setExterior();
      this.car.setWheels();
      this.car.addElectronics();
      this.car.paint();
    }

    changeEngine() {
      this.car.getEngine();
      this.car.setEngine();
    }

    changeInterior() {
      this.car.getInterior();
      this.car.setInterior();
    }
  }

  /* execution *************** */

  const conveyor = new ConveyorFacade(new Conveyor());

  let car = conveyor.assemblecar();
  car = conveyor.changeEngine();
  car = conveyor.changeInterior();

  console.log();
};

module.exports = Facade;
