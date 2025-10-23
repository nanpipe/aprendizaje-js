
class InvalidPlateError extends Error {
    constructor(plate) {
        super(`Invalid Plate Format ${plate}`)
        this.name = "InvalidPlateError";
    }
}

class ParkingFullError extends Error {
    constructor(spotsAvailable) {
        super(`Parking Spot Taken ${spotsAvailable}`)
        this.name = "SpotAvailableError";
    }
}

class PaymentFailedError extends Error {
    constructor(payment) {
        super(`Payment Failed: ${payment}`);
        this.name = "PaymentFailedError";
    }
}

const processParkingEntry = (plate, spotsAvailable, payment) => {
    // Validate plate format (must be 6 characters, alphanumeric)
    const regexPlaca = /^[a-zA-Z0-9]{6}$/;
    if (!regexPlaca.test(plate)) {
        throw new InvalidPlateError(plate);
    }

    // Check if spots available
    if (spotsAvailable <= 0) {
        throw new ParkingFullError(spotsAvailable);
    }
    // Check if payment is valid (> 0)
    if (payment < 0) {
        throw new PaymentFailedError(payment)

    }
    // Throw appropriate custom error for each case

    return "Entry successful";

}


const testCases = [
    {
        plate: "XYZ987",
        spots: 10,
        payment: 15000,
        expected: "Entry successful",

    },
    {
        plate: "ABC-123",
        spots: 5,
        payment: 10000,
        expectedError: "InvalidPlateError",

    },
    {
        plate: "GYH123",
        spots: 0, // 💡 Esto lanza ParkingFullError
        payment: 10000,
        expectedError: "ParkingFullError",

    },
    {
        plate: "CAR123",
        spots: 5,
        payment: -500, // 💡 Esto lanza PaymentFailedError
        expectedError: "PaymentFailedError",

    },
    {
        plate: "A1B2C", // 5 caracteres, la regex requiere 6
        spots: 5,
        payment: 10000,
        expectedError: "InvalidPlateError",

    }
];


testCases.forEach(testCases => {
    try {
        const result = processParkingEntry(testCases.plate, testCases.spots, testCases.payment);
        console.log(`✅ ${testCases.expected}: ${result}`);
    } catch (error) {
        console.log(`❌ ${error.name}: ${error.message}`);
    }
});