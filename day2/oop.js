class VehicleDealership {// Creation of class
  constructor(vehicleBrand, vehicleName,vehiclePrice) {
    this._vehicleBrand = vehicleBrand;//use of private variables
    this._vehicleName = vehicleName;
    this._vehicleAvailable=[1,0,1,1,0,1,1];
    
  }

  getvehiclesName() {
    return `${this._vehicleBrand} ${this._vehicleName}`;
  }
  
  checkavailableVehicle(){
    let number = [];
    this.vehicleAvailable.forEach((x) => {
      if(x === 1){
        number.push(x);
      }
    });
    return number.length;
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
