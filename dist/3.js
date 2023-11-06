class Car {
    drive() {
        console.log("driving a car ...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log(`Loading cargo: ${amount}`);
    }
}
const carInstance = new Car();
const truckInstance = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(carInstance);
useVehicle(truckInstance);
export {};
//# sourceMappingURL=3.js.map