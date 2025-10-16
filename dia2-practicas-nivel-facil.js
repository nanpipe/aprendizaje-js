// EJERCICIO 1: Carrito de compras
const productos = [
  { nombre: "Laptop", precio: 1200, cantidad: 1 },
  { nombre: "Mouse", precio: 25, cantidad: 2 },
  { nombre: "Teclado", precio: 75, cantidad: 1 }
];
// Calcula el precio TOTAL del carrito
// Expected output: número (1200 + 50 + 75 = 1325)

const totalCarrito = productos.reduce((total,cantidad)=>{
    return total + cantidad.precio*cantidad.cantidad
},0);

console.log(`El total del carrito es de ${totalCarrito}`)

// EJERCICIO 2: Filtrar estudiantes
const estudiantes = [
  { nombre: "Ana", calificacion: 85 },
  { nombre: "Carlos", calificacion: 72 },
  { nombre: "Beatriz", calificacion: 92 },
  { nombre: "Diego", calificacion: 68 }
];
// Obtén solo los estudiantes con calificación >= 80
// Expected: Array con Ana y Beatriz

const estudiantesConCalMayIgual80 = estudiantes.filter((estudiante)=> estudiante.calificacion >= 80)

estudiantesConCalMayIgual80.forEach((estudiante)=>console.log(estudiante.nombre))


// EJERCICIO 3: Listar nombres de proyectos
const proyectos = [
  { id: 1, titulo: "App Parqueadero", estado: "en progreso" },
  { id: 2, titulo: "E-commerce", estado: "en progreso" },
  { id: 3, titulo: "Blog Personal", estado: "completado" }
];
// Extrae SOLO los nombres/títulos de los proyectos
// Expected: ["App Parqueadero", "E-commerce", "Blog Personal"]

const nombresProyectos = proyectos.map((proyecto,index)=>proyecto.titulo)

console.log(nombresProyectos)