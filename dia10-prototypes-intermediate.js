// Prototype chain - objects inheriting from other objects

function Vehicle(number, size) {
  this.number = number;
  this.size = size;
}

function ParkingSpot(number, size) {
  this.number = number;
  this.size = size;
  this.occupied = false;
  this.vehicle = null;
}

ParkingSpot.prototype.park = function(vehicle) {
    if(this.occupied){
        return `Parking spot taken`;
    }

    if(this.size==="small" && vehicle.size==="auto"){
         return `Parking spot too small`;
    }

    this.occupied = true
    this.vehicle = vehicle
  return `Parking successful`
};

ParkingSpot.prototype.leave = function() {
  if(this.occupied){
            this.occupied = false
            let temporal = this.vehicle
            this.vehicle = null
            return `The vehicle ${temporal.number} has left`
        }

        return `the parking spot is available`
};

// Test cases
const spot1 = new ParkingSpot(1, "large");
const spot2 = new ParkingSpot(2, "small");

const auto = new Vehicle("ABC123", "auto");
const moto = new Vehicle("XYZ789", "moto");

console.log(spot1.park(auto));   // Should work
console.log(spot2.park(auto));   // Should fail (small spot)
console.log(spot2.park(moto));   // Should work
console.log(spot1.leave());      // Returns auto

