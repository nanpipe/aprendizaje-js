// Create a constructor function (old way before classes)

function Vehicle(plate, type) {
  this.plate = plate;
  this.type = type;
}

// Add method to prototype (shared by all vehicles)
Vehicle.prototype.getInfo = function() {
  return `${this.type} - ${this.plate}`;
};

// Add method to prototype (shared by all vehicles)
Vehicle.prototype.isAuto = function() {
  return this.type === "auto";
};

// Create instances
const car1 = new Vehicle("ABC123", "auto");
const car2 = new Vehicle("XYZ789", "auto");
const mot1 = new Vehicle("AFC21A", "moto");

console.log(car1.getInfo());
console.log(car2.getInfo());
console.log(mot1.getInfo());
console.log(car1.getInfo === car2.getInfo); // Should be true

console.log(car2.isAuto());
console.log(mot1.isAuto());

console.log(car1.isAuto === mot1.isAuto); // Should be true

// YOUR TASK:
// 1. Add a method to the prototype: `isAuto()` that returns true if type === "auto"
// 2. Create 2 vehicles (1 auto, 1 moto) and test both methods
// 3. Verify the methods are shared (use ===)