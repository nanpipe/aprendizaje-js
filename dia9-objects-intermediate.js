// Create a parking lot object that manages multiple vehicles

const parkingLot = {
    name: "Central Parking",
    capacity: 50,
    vehicles: [],

    addVehicle: function (plate, type) {

        if (this.capacity <= 0) { // Check if lot is full
            return []
        }

        if (this.vehicles.some((vehicle) => vehicle.plate === plate)) {  // Check if vehicle already exists (by plate)
            return []
        }

        this.occupied++
        let last = { plate, type }
        this.vehicles.push(last)

        return `the ${last.type} with license plate ${last.plate} has been added`
    },

    removeVehicle: function (plate) {

        if (this.vehicles.some((vehicle) => vehicle.plate === plate)) {  // Check if vehicle already exists (by plate)

            this.vehicles.splice(this.vehicles.findIndex((vehicle) => vehicle.plate === plate), 1)
            this.occupied--
            return null
        }

        return `License plate is not parked`
    },

    getCurrentOccupancy: function () {
        const occupied = this.vehicles.length;
        return {
            occupied: occupied,
            available: this.capacity - occupied,
            percentage: ((occupied / this.capacity) * 100).toFixed(1) + "%"
        };
    },

    getVehiclesByType: function (type) {
        return this.vehicles.filter((vehicle) => vehicle.type === type)
    }
};

// Test cases
console.log(parkingLot.addVehicle("MFC123", "auto"));
console.log(parkingLot.addVehicle("HXC193", "auto"));
console.log(parkingLot.addVehicle("XYZ589", "moto"));
console.log(parkingLot.addVehicle("ABC123", "auto"));
console.log(parkingLot.addVehicle("XYZ789", "moto"));
console.log(parkingLot.addVehicle("ABC123", "auto")); // Duplicate
console.log(parkingLot.getCurrentOccupancy());
console.log(parkingLot.getVehiclesByType("auto"));
console.log(parkingLot.removeVehicle("ABC123"));
console.log(parkingLot.getVehiclesByType("auto"));
console.log(parkingLot.removeVehicle("ABC123"));
console.log(parkingLot.getVehiclesByType("auto"));
console.log(parkingLot.getCurrentOccupancy());