const registrosParqueadero = [
    { id: 1, placa: "ABC123", tipo: "auto", horas: 2, pagado: true },
    { id: 2, placa: "XYZ789", tipo: "moto", horas: 5, pagado: false },
    { id: 3, placa: "DEF456", tipo: "auto", horas: 8, pagado: true },
    { id: 4, placa: "GHI012", tipo: "moto", horas: 1, pagado: false },
    { id: 5, placa: "JKL345", tipo: "auto", horas: 3, pagado: true }
];


const validarRegistros = (registros, callback) => {

    if (!Array.isArray(callback))
        return callback(registros)
    else {
        let resultado = registros
        callback.forEach((callback) => {
            resultado = callback(resultado); // Encadena
        });
        return resultado
    }
}



const filtrarAuto = (registrosParqueadero) => {
    return registrosParqueadero.filter((registro) => registro.tipo.toLowerCase() === "auto")
}

const filtrarPagado = (registrosParqueadero) => {
    return registrosParqueadero.filter((registro) => registro.pagado)
}

const calcularTarifa = (registrosParqueadero) => {
    return registrosParqueadero.map((registro) => {
        const tarifasPorVehiculo = {
            id: registro.id,
            placa: registro.placa,
            tipo: registro.tipo,
            horas: registro.horas,
            pagado: registro.pagado,
            tarifa: (registro.tipo === "auto" ? 5000 : 3000) * registro.horas
        }

        return tarifasPorVehiculo;

    })

}

const reporteFinal = (registrosParqueadero) => {
    const totalPago = registrosParqueadero.reduce((accumulador, registro) => {
        return accumulador + registro.tarifa
    },0)

    return { totalAutos: registrosParqueadero.length , totalRecaudo: totalPago }
}

console.log(validarRegistros(registrosParqueadero, filtrarAuto))
console.log(validarRegistros(registrosParqueadero, filtrarPagado))
console.log(validarRegistros(registrosParqueadero, calcularTarifa))

console.log(validarRegistros(registrosParqueadero, [filtrarAuto, filtrarPagado, calcularTarifa, reporteFinal]))
console.log(validarRegistros(registrosParqueadero, [calcularTarifa,filtrarAuto, filtrarPagado, reporteFinal]))