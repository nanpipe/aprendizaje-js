// EJERCICIO 1: Sistema de calificaciones
const calificaciones = [
  { estudiante: "Juan", notas: [85, 90, 78] },
  { estudiante: "María", notas: [92, 88, 95] },
  { estudiante: "Carlos", notas: [70, 75, 68] }
];
// Calcula el PROMEDIO de cada estudiante
// Expected: [{ estudiante: "Juan", promedio: 84.33 }, ...]

const calificacionesPromedio = calificaciones.map((e)=>{
    const notaPromedio = e.notas.reduce((total,current)=>total+current) / e.notas.length;
    const nombre = e.estudiante;
    return {nombre,notaPromedio}
})

//calificacionesPromedio.forEach((e)=>console.log(`estudiante: ${e.nombre}, promedio:${e.notaPromedio}`))

// EJERCICIO 2: Filtrar y transformar datos
const ventas = [
  { id: 1, producto: "Laptop", monto: 1200, vendedor: "Ana" },
  { id: 2, producto: "Mouse", monto: 25, vendedor: "Carlos" },
  { id: 3, producto: "Monitor", monto: 450, vendedor: "Ana" },
  { id: 4, producto: "Teclado", monto: 120, vendedor: "Beatriz" },
  { id: 5, producto: "Otro teclado", monto: 90, vendedor: "Beatriz" }
];
// Obtén vendedores que hayan vendido MÁS de $200
// Retorna: { vendedor, totalVentas }
// Expected: Ana (1650), Beatriz (120) - solo Ana cumple

const ventasBySeller = ventas.reduce((acumulador,venta)=>{
  const {vendedor,monto} = venta

  if(acumulador[vendedor]){
    acumulador[vendedor] += monto 
  }
  else acumulador[vendedor] = monto
    
  return acumulador


},{})

const ventasBySellerMayor200 = Object.entries(ventasBySeller)
        .filter(([vendedor,total]) =>total>200)
        .map(([vendedor,total])=>({vendedor,total}))

//console.log(ventasBySellerMayor200)

// EJERCICIO 3: Datos anidados complejos
const departamentos = [
  {
    nombre: "IT",
    empleados: [
      { nombre: "Pedro", salario: 3000 },
      { nombre: "Laura", salario: 3500 }
    ]
  },
  {
    nombre: "Ventas",
    empleados: [
      { nombre: "Marco", salario: 2500 },
      { nombre: "Sofia", salario: 2800 }
    ]
  }
];

let salariosEmpleados = 0

departamentos.forEach((empleados,index)=>{
  //console.log(`${empleados.empleados[0].salario} y ${index}`)

  empleados.empleados.forEach((empleado)=>{
    salariosEmpleados += empleado.salario
  })

  /* salariosEmpleados =+ empleados.empleados.reduce((accumulador, empleado)=>{
    accumulador + empleado.salario
  }) */
})

console.log(salariosEmpleados)
// Calcula el TOTAL de salarios de la empresa
// Expected: 11800


const totalSalarios = departamentos.reduce((total, depto) => {
  const salariosDepartamento = depto.empleados.reduce((subtotal, empleado) => {
    return subtotal + empleado.salario;
  }, 0);
  
  return total + salariosDepartamento;
}, 0);

console.log(totalSalarios); // 11800