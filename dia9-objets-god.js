// Create a parking session tracker with nested objects

const parkingSystem = {
    name: "Smart Parking",
    rates: {
        auto: { hourly: 5000, daily: 40000 },
        moto: { hourly: 3000, daily: 20000 }
    },
    nextSessionId: 1,
    sessions: [],

    startSession: function (plate, type) {

        const session = { id: this.nextSessionId, plate, type, entry: new Date(2025, 9, 28, 10, 30, 25), exit: null, cost: null }
        this.nextSessionId++
        this.sessions.push(session)
        return session.id
    },

    endSession: function (sessionId) {
        let index = -1;
        if (this.sessions.some((session) => session.id === sessionId)) {

            index = this.sessions.findIndex((session) => session.id === sessionId)
            {
                this.sessions[index].exit = new Date()
            }

        }

        // Set exit time
        let hoursParked = Math.round((this.sessions[index].exit - this.sessions[index].entry) / (1000 * 3600))
        // return this.sessions[index]

        const parkingCostByHour = hoursParked * this.rates[this.sessions[index].type].hourly
        const parkingCostByDay = this.rates[this.sessions[index].type].daily

        if (parkingCostByHour < parkingCostByDay) {
            this.sessions[index].cost = parkingCostByHour

        }
        else {
            this.sessions[index].cost = parkingCostByDay
        }

        return this.sessions[index]
        // return `Your parking time was: ${hoursParked} ${hoursParked === 1 ? `hour` : `hours`}`

        // Calculate cost (use rates, pick cheaper: hourly vs daily)
        // Return session object with cost
    },

    getActiveSessionCount: function () {
        const activeSessions = this.sessions.reduce((total, current) => {
            if (current.exit === null) {
                return total = total + 1
            }
            return total
        }, 0)
        return activeSessions
    },


    getTotalRevenue: function () {
        const completedSessionsRevenue = this.sessions.reduce((total, current) => {
            if (current.cost > 0) {
                return total = total + current.cost
            }
            return total
        }, 0)
        return completedSessionsRevenue
    }
};

// Test it
const id1 = parkingSystem.startSession("ABC123", "auto");
const id3 = parkingSystem.startSession("ANC113", "auto");
const id2 = parkingSystem.startSession("XYZ789", "moto");
const id5 = parkingSystem.startSession("XYZ789", "moto");
console.log(id1)
console.log(id2)
// Simulate time passing or set manually
console.log(parkingSystem.endSession(id2));
console.log(parkingSystem.endSession(id1));
console.log(parkingSystem.endSession(id3));
console.log(parkingSystem.getActiveSessionCount());
console.log(parkingSystem.getTotalRevenue());