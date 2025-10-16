const languages = ["JS", "React", "Node.JS"];

languages.forEach((language, index) => {
    console.log(`${index}: ${language}`)
})

/*
const lenguajes = ["JavaScript", "React", "Node.js"];

 lenguajes.forEach((lenguaje, index, array) => {
  console.log(`Elemento: ${lenguaje}`);
  console.log(`Posición: ${index}`);
  console.log(`Array completo:`, array);
  console.log("---");
}); */


const tecnologias = ["WordPress","PHP","JS","Node","React"]

tecnologias.forEach((tech,index)=>{
    console.log(`${index}. ${tech} (Nivel: Intermedio)`)
})



const tecnologiasConUrl =tecnologias.map((tech,index)=>{
    return{
        id: index+1,
        nombre: tech,
        nivel: "Intermedio",
        url: `https://ejemplo.com/${tech.toLowerCase()}`
    }
})

console.log(tecnologiasConUrl);


const tecnologiasAvanzadas = tecnologias.filter((tech)=>{
    return tech.length > 2
})

console.log("Tecnologías con más de 2 caracteres:", tecnologiasAvanzadas);


const tecnologiasConE = tecnologias.filter((tech) => tech.toLocaleLowerCase().includes("e"))

const tecnologiasEmpiecenJ = tecnologias.filter((tech) => tech.toLocaleLowerCase().charAt(0)==='j')

console.log(tecnologiasConE)
console.log(tecnologiasEmpiecenJ)




/* Little explanation

const tecnologias = ["WordPress", "PHP", "JS", "Node", "React"];

// Simple (una línea)
const conE = tecnologias.filter((tech) => tech.includes("e"));

// Complejo (múltiples líneas)
const filtrado = tecnologias.filter((tech) => {
  const tieneE = tech.includes("e");
  const tieneMasDeUnCaracter = tech.length > 1;
  const noEsWordPress = tech !== "WordPress";
  
  // Tu lógica aquí
  return tieneE && tieneMasDeUnCaracter && !noEsWordPress;
});

// Con variables externas
const minimo = 3;
const resultado = tecnologias.filter((tech) => {
  return tech.length >= minimo; // Usa variable externa
}); */


const sumaNumeros = [1,2,3,4,5].reduce((suma,num) =>{
    return suma + num
},0);

console.log("Suma:", sumaNumeros);

// Contar cuántas tecnologías hay
const totalTecnologias = tecnologias.reduce((contador) => {
  return contador + 1;
}, 0);

console.log("Total de tecnologías:", totalTecnologias);