const processUserAge = (age) => {


    if (!age) {
        throw new Error("age does not exist");
    }
    else if (!(typeof age === 'number' && !isNaN(age))) {
        throw new Error("Variable is not a number");
    }
    else if (!(age > 0 && age < 120)) {
        throw new Error("Age is out of range");
    }

    return age

}


/* try {
    console.log(processUserAge(25));    // Should work
    console.log(processUserAge(-5));    // Should throw error
    console.log(processUserAge("abc")); // Should throw error
    console.log(processUserAge());      // Should throw error
} catch (error) {
    console.error(error.message);
} */

try {
    console.log(processUserAge(25));
} catch (error) {
    console.error("Test 1:", error.message);
}

try {
    console.log(processUserAge(-5));
} catch (error) {
    console.error("Test 2:", error.message);
}

try {
    console.log(processUserAge("abc"));
} catch (error) {
    console.error("Test 3:", error.message);
}

try {
    console.log(processUserAge());
} catch (error) {
    console.error("Test 4:", error.message);
}