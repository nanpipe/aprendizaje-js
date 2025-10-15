function saludar(nombre) {
    return `Hola ${nombre}`
}


const saludarModerno = (nombre) => {
    return `Hola ${nombre}`
};
    

const saludarCorto = (nombre) => `Hola ${nombre}`

// Prueba las 3
console.log(saludar("Pipe"));
console.log(saludarModerno("Pipe"));
console.log(saludarCorto("Pipe"));




const calcularEdadFutura = (edadActual, anos) =>{
    return edadActual + anos
};

/*const esMayorDeEdad = (edad) => {
    return edad>18? true: false;
};*/

const esMayorDeEdad = (edad) => edad>18;

const presentation = (name, age, country)=> {
    return `Hi my name is ${name}, i'm ${age} years old and i'm currently living in ${country}`
};

console.log(calcularEdadFutura(34,0))
console.log(esMayorDeEdad(34))
console.log(presentation("Pipe",34,"Colombia"))