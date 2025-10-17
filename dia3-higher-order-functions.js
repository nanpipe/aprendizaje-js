
//callback
const saludar = (nombre) => `Hola ${nombre}`

const ejecutarFunction = (callback, nombre) => {
    return callback(nombre)
}

console.log(saludar, "Pipe")

///////////////////////////


const usuarios = ["Juan", "Maria", "Carlos"]

const imprimirConNumero = (nombre, index) => {
    console.log(`${index + 1}. ${nombre}`)
};


const procesarUsuarios = (array, callback) => {
    array.forEach((usuario,index) => {
        callback(usuario,index)
    });
}

procesarUsuarios(usuarios, imprimirConNumero);


////////////////


// Higher-order function (siempre igual)
const procesarDatos = (array, callback) => {
  array.forEach((item) => {
    callback(item);
  });
};

// CASO 1: Gym - pagos mensuales
const miembrosGym = [
  { nombre: "Juan", pagó: 50000 },
  { nombre: "María", pagó: 50000 },
  { nombre: "Carlos", pagó: 0 }
];

const calcularPagosActuales = (miembro) => {
  console.log(`${miembro.nombre} pagó: ${miembro.pagó}`);
};

procesarDatos(miembrosGym, calcularPagosActuales);

// CASO 2: Mismo array, DIFERENTE callback - calcular pérdidas
const calcularPérdidas = (miembro) => {
  if (miembro.pagó === 0) {
    console.log(`Perdimos: ${50000} de ${miembro.nombre}`);
  }
};

procesarDatos(miembrosGym, calcularPérdidas);