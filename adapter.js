// Adapter - это структурный паттерн, который оборачивает объект с уникальным или специфическим
//           внутренним устройством и делает его совместимым не изменяя исходный код объекта
//           Позволяет объектам с несовместимыми интерфейсами работать вместе

// Пример из жизни = это картридер

const Adapter = () => {

  class Engine2 {
    simpleInterface() {
      console.log('Engine 2.0');
    }
  }

  class EngineV8 {
    complecatedInterface() {
      console.log('Engine V8');
    }
  }

  class EngineV8Adapter {
    constructor(engine) {
      this.engine = engine;
    }

    simpleInterface() {
      this.engine.complecatedInterface();
    }
  }

  class Auto {
    startEngine(engine) {
      engine.simpleInterface()
    }
  }

  /* execution *************** */

  // Engine 2.0
  const car1 = new Auto();
  const oldEngine = new Engine2();

  car1.startEngine(oldEngine);

  // Engine V8 with adapter
  const car2 = new Auto();
  const engineAdapter = new EngineV8Adapter(new EngineV8());

  car2.startEngine(engineAdapter);

  // // Engine without adapter
  const car3 = new Auto();
  const newEngine = new EngineV8();

  car3.startEngine(newEngine); // Error

  console.log();
};

module.exports = Adapter;
