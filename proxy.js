// Proxy (заместитель) - это структурный паттерн, который вместо реальных объектов предоставляет
//                       специальные объекты заменители, эти объекты перехватывают вызов оригинала
//                       и позволяют сделать что-то до или после обращения к оригинальному объекту.
//                       (Прослойка, которая помогает произвести какие-то дополнительные
//                       манипуляции до того как отдать дальнейший контроль)

// Примеры использования - авторизация
// Бывают виртуальный(загрузка тяжёлого объекта, когда он действительно нужен), логирующий, защищающий и кеширующий прокси

const Proxy = () => {

  class CarAccess {
    open() {
      console.log('Opening car door');
    }

    close() {
      console.log('Closing car door');
    }
  }

  class SecuritySystem {
    constructor(door) {
      this.door = door;
    }

    open(password) {
      if (this.authenticate(password)) {
        this.door.open();
      } else {
        console.log('Access denied!')
      }
    }

    authenticate(password) {
      return password === 'Ilon';
    }

    close() {
      this.door.close();
    }
  }

  /* execution *************** */

  const door = new SecuritySystem(new CarAccess());

  door.open('Jack');
  door.open('Ilon');
  door.close();

  console.log();
};

module.exports = Proxy;
