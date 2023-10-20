class Car {
  drive() {
    console.log("driving a car ...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo: ${amount}`);
  }
}

type Vehicle = Car | Truck;

const carInstance = new Car();
const truckInstance = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(carInstance);
useVehicle(truckInstance);

export {};
