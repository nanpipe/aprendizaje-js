// Build a complete parking system using everything you've learned

class Vehicle {
    constructor(plate, type, brand) {
        this.plate = plate;
        this.type = type;
        this.brand = brand;
    }
}

class ParkingSpot {
    constructor(number, size) {
        this.number = number;
        this.size = size;
        this.vehicle = null;
    }

    isOccupied() {
        return this.vehicle !== null;
    }

    park(vehicle) {
        if (this.isOccupied()) {
            return `parking spot is occupied`
        }

        this.vehicle = vehicle
        return `Vehicle ${vehicle.plate} has parked successfully`
    }

    leave() {

        if (this.isOccupied()) {
            let temporal = `Car ${this.vehicle.plate} has left`
            this.vehicle = null;
            return temporal
        }
        return `parking spot is not taken`
    }
}

class Spot {
    constructor(size) {
        this.size = size
        this.available = true
    }
}

class ParkingLot {
    constructor(name, autoRate = 5000, motoRate = 3000) {
        this.name = name;
        this.rates = { auto: autoRate, moto: motoRate };
        this.spots = [];
        this.sessions = [];
    }

    addSpot(spot) {
        this.spots.push(spot)
    }

    findAvailableSpot(vehicleType) {
        let spaceNeed = "small"
        if (vehicleType === "auto") {
            spaceNeed = "large"
        }


        const firstSpotAvailable = this.spots.findIndex(spot => (spot.size === spaceNeed && spot.available === true))
        if (firstSpotAvailable !== -1) {

            return firstSpotAvailable
        } else {
            return null
        }



    }

    parkVehicle(vehicle) {
        const parkingSpotAt = this.findAvailableSpot(vehicle.type)
        return parkingSpotAt
        // Park vehicle
        // Create session with entry time
        // Return session id
    }

    removeVehicle(plate) {
        // Find vehicle by plate
        // Calculate cost based on time and rates
        // Remove from spot
        // Return { vehicle, cost, hours }
    }

    getOccupancyReport() {
        // Return { total, occupied, available, percentage }
    }

    static createStandardLot(name) {


        const newParkingLot = new ParkingLot(name, 5000, 3000)

        // Create large spots
        for (let index = 0; index < 10; index++) {
            newParkingLot.addSpot(new Spot("large"))
        }

        // create small spots
        for (let index = 0; index < 20; index++) {
            newParkingLot.addSpot(new Spot("small"))

        }

        return newParkingLot
        // Factory method: creates lot with 10 large spots, 20 small spots
        // Standard rates: auto 5000, moto 3000
    }
}

// Test the complete system
const lotCentral = ParkingLot.createStandardLot("Central Parking");
//console.log(lotCentral)
const car = new Vehicle("ABC123", "auto", "Toyota");
const bike = new Vehicle("XYZ789", "moto", "Yamaha");


const sessionId1 = lotCentral.parkVehicle(car);
console.log(sessionId1)
// const sessionId2 = lotCentral.parkVehicle(bike);
// lotCentral
// console.log(lotCentral.getOccupancyReport());

// // Simulate time and remove
// console.log(lotCentral.removeVehicle("ABC123"));
// console.log(lotCentral.getOccupancyReport());