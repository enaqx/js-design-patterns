/**
 * Factory Method
 */

class Factory {
  manufactureCar(code) {
    let car = null;

    switch (code) {
      case 'pcmi':
        car = new this.MiniCar();
        break;

      case 'pcl':
        car = new this.LightCar();
        break;

      case 'pcc':
        car = new this.CompactCar();
        break;

      case 'pcme':
        car = new this.MediumCar();
        break;

      case 'pch':
        car = new this.HeavyCar();
        break;
    }

    car.code = code;

    car.printInfo = function () {
      console.log(this.code + ':  ' + this.name + ' (' + this.weight + ' lb)');
    }

    return car;
  }

  MiniCar() {
    this.name = 'Mini Car';
    this.weight = 2000;
  }

  LightCar() {
    this.name = 'Light Car';
    this.weight = 2500;
  }

  CompactCar() {
    this.name = 'Compact Car';
    this.weight = 3000;
  }

  MediumCar() {
    this.name = 'Medium Car';
    this.weight = 3500;
  }

  HeavyCar() {
    this.name = 'Heavy Car';
    this.weight = 4000;
  }
}


let cars = [];
let factory = new Factory();

cars.push(factory.manufactureCar('pcmi'));
cars.push(factory.manufactureCar('pcl'));
cars.push(factory.manufactureCar('pcc'));
cars.push(factory.manufactureCar('pcme'));
cars.push(factory.manufactureCar('pch'));

for (var i = 0, len = cars.length; i < len; i++) {
  cars[i].printInfo();
}
