// Convert your Day 10 code to classes

class Vehicle {
    constructor(plate, type) {
        this.plate = plate;
        this.type = type;
    }

    getInfo() {
        return `${this.type} - ${this.plate}`;
    }

    isAuto() {
        return this.type === "auto";
    }
}

// YOUR TASK: Create ParkingSpot class
class ParkingSpot {
    constructor(plate, size) {
        this.plate = plate;
        this.size = size;
        this.occupied = false;
        this.vehicle = null;
    }

    park(vehicle) {
        if (this.occupied) {
            return `Parking spot taken`;
        }

        if (this.size === "small" && vehicle.size === "auto") {
            return `Parking spot too small`;
        }

        this.occupied = true
        this.vehicle = vehicle
        return `Parking successful`
    }

    leave() {
        if (this.occupied) {
            this.occupied = false
            let temporal = this.vehicle.plate
            this.vehicle = null
            return `The vehicle ${temporal} has left`
        }

        return `the parking spot is available`
    }

    static getStandardSizes() {
        return `["small", "large"]`
    }
    // Add constructor (number, size)
    // Add park(vehicle) method
    // Add leave() method
    // Add static method: getStandardSizes() that returns ["small", "large"]
}

// Test it
const spot = new ParkingSpot(1, "large");
const auto = new Vehicle("ABC123", "auto");
console.log(spot.park(auto));
console.log(ParkingSpot.getStandardSizes());
console.log(spot.leave(auto));