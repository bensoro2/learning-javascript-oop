class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  displayCarInfo() {
    return `${this.displayInfo()} with ${this.doors} doors`;
  }
}

const myVehicle = new Vehicle("Toyota", "Corolla", 2020);
console.log(myVehicle.displayInfo()); // Output: 2020 Toyota Corolla

const myCar = new Car("Honda", "Civic", 2021, 4);
console.log(myCar.displayCarInfo()); // Output: 2021 Honda Civic with 4 doors
