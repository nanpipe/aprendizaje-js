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
        this.vehiclePlate = null
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
        console.log("first sport found" + firstSpotAvailable)
        if (firstSpotAvailable !== -1) {

            return firstSpotAvailable
        } else {
            return null
        }

        // I know it's not optimized for a big space to allow a small bike, yet.

    }

    parkVehicle(vehicle) {
        const parkingSpotAt = this.findAvailableSpot(vehicle.type)
        // return parkingSpotAt
        if (parkingSpotAt > -1) {
            this.spots[parkingSpotAt].vehiclePlate = vehicle.plate
            this.spots[parkingSpotAt].available = false

            this.sessions.push({ spot: parkingSpotAt, datetime: new Date(2025, 10, 7, Math.round(Math.random() * 12), 8) }) // Forcing a previous time to calculate later
            const sessionId = this.sessions.findIndex(session => session.spot === 0)
            return this.sessions[sessionId]
        }
    }

    removeVehicle(plate) {
        const indexVehicle = this.spots.findIndex(spot => spot.vehiclePlate === plate)
        const session = this.sessions.find(session => session.spot === indexVehicle)
        const hours = Math.round((new Date() - session.datetime) / 3600000)
        const priceParking = hours * this.rates.auto

        this.spots[indexVehicle].available = true
        this.spots[indexVehicle].vehiclePlate = null

        this.sessions[session[indexVehicle]] = null
        // Remove from spot
        return { vehicle: plate, cost: priceParking, hours: hours }
        // return priceParking
    }

    getOccupancyReport() {

        const occupancy = this.spots.reduce((acc, spot) => {
            return acc + (spot.available === true ? 0 : 1)
        }, 0)

        return { total: 0, occupied: occupancy, available: this.spots.length - occupancy, percentage: `${Math.round((occupancy / this.spots.length) * 100)}%` }
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
// console.log(sessionId1)
// console.log(lotCentral)
const sessionId2 = lotCentral.parkVehicle(bike);
// console.log(sessionId2)
// console.log(lotCentral)
console.log(lotCentral.getOccupancyReport());
console.log(lotCentral.spots)
console.log(lotCentral.sessions)
// // Simulate time and remove
console.log(lotCentral.removeVehicle("XYZ789"));
console.log(lotCentral.getOccupancyReport());
console.log(lotCentral.spots)
console.log(lotCentral.sessions)