/* 
// Exercise 1

async function fetchUsers(url) {
    try {
        const response = await fetch(url)
        //console.log(response)
        if(!response.ok){
            throw new Error(`Error Fetching: ${response.status}`);
        }
        
        return response.json()

    } catch (error) {
        console.error(error.message)
        return error.message
    }
    
    
}

const url = `https://jsonplaceholder.typicode.com/users`
const users = await fetchUsers(url)


const usersWhoLivesInCitiesStartingWithS = (users) => {
    const usersCityStartsWithS = users.filter(user => user.address.city.charAt(0).toLowerCase() === 's')
    //console.log(usersCityStartsWithS)

    const response = usersCityStartsWithS.map((user) => {
        return { name: user.name, email: user.email, city: user.address.city }
    })
    return response
}



try {
    console.log(usersWhoLivesInCitiesStartingWithS(users))
} catch (error) {
    console.log(error.message)
} */



/* // Exercise 2  - HOF & Closures

const createRateCalculator = (rateByHour) => {

    const totalToPay = (timeByHours) => {

        let parkingPrice = timeByHours * rateByHour

        if (timeByHours > 8) {
           parkingPrice *= 1.2;
        }

        return parkingPrice - (parkingPrice % 100)
    }

    return totalToPay;
}



const calculateAuto = createRateCalculator(5000);
const calculateBike = createRateCalculator(3000);

console.log(calculateAuto(3));  // 15000
console.log(calculateAuto(1.45));  // 7200
console.log(calculateAuto(10)); // 60000 (with surcharge)

console.log(calculateBike(3));  // 9000
console.log(calculateBike(10)); // 36000 (with surcharge)
 */



// Exercise 3

class InvalidPlateVehicleError extends Error {
    constructor(plate) {
        super(`Invalid Licence Plate - ${plate}`);
        this.name = "InvalidPlateVehicleError";
    }
}

class InvalidTypeVehicleError extends Error {
    constructor(type) {
        super(`Invalid type of vehicle - ${type}`);
        this.name = "InvalidTypeVehicleError";
    }
}


class InvalidRegistrationYear extends Error {
    constructor(year) {
        super(`Vehicle out of range of registration acceptance - ${year}`);
        this.name = "InvalidRegistrationYear";
    }
}


const validateVehicle = (plate, type, year) => {
    const regexPlaca = /^[a-zA-Z0-9]{6}$/;
    if (!regexPlaca.test(plate)) {
        throw new InvalidPlateVehicleError(plate);
    }

    
    if (typeof type !== "string" || ( type !== "auto" && type !== "bike")) {
        throw new InvalidTypeVehicleError(type);
    }

    if (year > 2025 || year < 1990) {
        throw new InvalidRegistrationYear(year);
    }

    return "Entry successful";
}


const testCases = [
    { plate: "ACE123", type: "bike", year: 2010, expected: `Entry successful` },
    { plate: "ACE13", type: "bike", year: 2010, expected: `InvalidPlateVehicleError` },
    { plate: "ACE123", type: "ARTE", year: 2010, expected: `InvalidTypeVehicleError` },
    { plate: "ACE123", type: "bike", year: 1980, expected: `InvalidRegistrationYear` },
    { plate: "ACE123", type: 15, year: 2026, expected: `InvalidTypeVehicleError` },
]


testCases.forEach((test) => {
    try {
        console.log(validateVehicle(test.plate, test.type, test.year) )

    }
    catch (error) {
        console.log(error.message)
    }
})



