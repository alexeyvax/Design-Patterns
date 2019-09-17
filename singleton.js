// Singleton - это простой пораждающий паттерн, который гарантирует, что у класса будет только один экземпляр

const Singleton = () => {

  class Counter {
    constructor() {
      if (typeof Counter.instanse === 'object') {
        return Counter.instanse;
      }

      this.count = 0;
      Counter.instanse = this;

      return this;
    }

    getCount() {
      return this.count;
    }

    increaseCount() {
      return this.count++;
    }
  }

  /* execution *************** */

  const firstCounter = new Counter();
  const secondCounter = new Counter();

  firstCounter.increaseCount();
  firstCounter.increaseCount();
  secondCounter.increaseCount();
  secondCounter.increaseCount();

  console.log(firstCounter.getCount());
  console.log(secondCounter.getCount());
};

module.exports = Singleton;
