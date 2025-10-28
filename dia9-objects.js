// Create a parking vehicle object with methods

const vehicle = {
    plate: "ABC123",
    type: "auto",
    entryTime: null,
    exitTime: null,

    checkIn: function () {
        this.entryTime = new Date(2025,10,20,10,30,25); // I've hardcored the dates just for testing purposes.
        //this.entryTime = arrival
        return `Time of arrival: ${this.entryTime}`
    },

    checkOut: function () {
        this.exitTime = new Date(2025,10,20,11,24,25);
       // this.exitTime = departure
        return `Leaving time: ${this.exitTime}`
    },

    getParkedHours: function () {
        let hoursParked = Math.round((this.exitTime - this.entryTime)/(1000*3600))
        return `Your parking time was: ${hoursParked} ${hoursParked===1?`hour`:`hours`}`
    }
};

// Test it
vehicle.checkIn();
// Wait or manually set times for testing
vehicle.checkOut();
console.log(vehicle.getParkedHours());