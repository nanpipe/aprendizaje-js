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

            const session = { id: this.nextSessionId, plate, type, entry: Date.now(), exit: null, cost: null }
            this.nextSessionId++
            this.sessions.push(session)
            return session.id
        },

        endSession: function (sessionId) {

            if (this.sessions.some((session) => session.id === sessionId)) {

                const index = this.sessions.findIndex((session) => session.id === sessionId)
                {
                    this.sessions[index] = { exit: Date.now() }
                }
                return `session ${sessionId} encontrada at ${index}`

            }

            // Set exit time
            // Calculate cost (use rates, pick cheaper: hourly vs daily)
            // Return session object with cost
        },

        getActiveSessionCount: function () {
            // Return count of sessions where exit is null
        },

        getTotalRevenue: function () {
            // Sum all completed session costs
        }
    };

    // Test it
    const id1 = parkingSystem.startSession("ABC123", "auto");
    const id2 = parkingSystem.startSession("XYZ789", "moto");
    console.log(id1)
    console.log(id2)
    // Simulate time passing or set manually
    console.log(parkingSystem.endSession(id2));
    console.log(parkingSystem.getActiveSessionCount());
    console.log(parkingSystem.getTotalRevenue());