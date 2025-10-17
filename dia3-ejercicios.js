const numeros = [1, 2, 3, 4, 5];

const procesarNumeros = (listado, callback) => {
    callback(listado);
};


const doblarNumeros = (array) => {
    const numerosDoblados = array.map(item => {
        return item * 2
    })
    console.log(numerosDoblados)
}

const sumar10ANumeros = (array) => {
    const numerosSumados10 = array.map(item => {
        return item + 10
    })
    console.log(numerosSumados10)
}

const cuadradoNumeros = (array) => {
    const numerosCuadrados = array.map(item => {
        return item * item
    })
    console.log(numerosCuadrados)
}

procesarNumeros(numeros, doblarNumeros)
procesarNumeros(numeros, sumar10ANumeros)
procesarNumeros(numeros, cuadradoNumeros)