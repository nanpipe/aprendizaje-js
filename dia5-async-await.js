/* // Create a function that simulates API call (delayed response)

const fetchUserData = async (userId) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
        id: userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`
    };
};

// Usage:
const getData = async () => {
    try {
        const user = await fetchUserData(1);
        console.log(user);
    } catch (error) {
        console.error(error);
    }
};

getData();
 */


const simulateWeather = new Promise((resolve, reject) => {
    const exito = Math.random() > 0.2;
    let min = 10;
    let max = 35;
    let fakeClimate =  Math.random().toFixed(1) * (max - min) + min;
    setTimeout(() => {
        if (exito) {
            resolve(`Datos del clima obtenidos: ${fakeClimate}, Nublado`);
        } else {
            reject(`Error: Fallo de red al obtener el clima`);
        }
    }, 2000);
});


 async function getWeather () {

    try {
        const message = await simulateWeather;
        console.log("Reporte del clima: ",message)
    } catch (error) {
        console.error("Error de reporte: ",error)
    }
 }

 getWeather()