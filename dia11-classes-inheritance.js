// Create a parent class and child classes that inherit from it

class Vehicle {
    constructor(plate, brand) {
        this.plate = plate;
        this.brand = brand;
    }

    getInfo() {
        return `${this.brand} - ${this.plate}`;
    }
}

// YOUR TASK: Create two child classes that extend Vehicle

class Auto extends Vehicle {
    constructor(plate, brand, doors) {
        super(plate, brand); // Call parent constructor
        this.doors = doors;
    }

    // Override getInfo to include doors
    getInfo() {
        return `${super.getInfo()} - ${this.doors} doors`
    }

    hasTrunk() {
        return true
    }
}

class Moto extends Vehicle {
    constructor(plate, brand, engine) {
        super(plate, brand)
        this.engine = engine
    }

    getInfo() {
        return `${super.getInfo()} - ${this.engine} engine`
    }

    hasTrunk() {
        return false
    }
}

// Test
const car = new Auto("ABC123", "Toyota", 4);
const bike = new Moto("XYZ789", "Yamaha", "250cc");

console.log(car.getInfo());      // "Toyota - ABC123 (4 doors)"
console.log(bike.getInfo());     // "Yamaha - XYZ789 (250cc engine)"
console.log(car.hasTrunk());     // true
console.log(bike.hasTrunk());    // false