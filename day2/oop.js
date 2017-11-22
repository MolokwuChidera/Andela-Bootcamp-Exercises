class Vehicle {// Creation of class
  constructor(vehicleBrand, vehiclename) {
    this._vehicleBrand = vehicleBrand;//use of private variables
    this._vehicleName = vehicleName;
  }

  getFullName(vehicleBrand, vehiclename) {
    return `${this._vehicleBrand} ${this._vehicleName}`;
  }
  
}

class Car extends Vehicle { //Example of inheritance
  constructor(vehicleBrand, vehicleName) {
    super(vehicleBrand, vehicleName);
    this._namesVehicles = [];
  }

  addcar(vehicle) {
    this._namesVehicles.push(vehicle);
    
  }
}
