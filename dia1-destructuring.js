const persona = {
    nombre: "Pipe",
    edad: 34,
    pais: "Colombia",
    profesion: "Developer"
} 


// Forma antigua
const nombreAntiguo = persona.nombre;
const edadAntigua = persona.edad;

const {nombre,edad, pais} = persona;
console.log(nombre, edad,pais)

const tecnologias = ["JavaScript","React","NodeJs","WordPress"]
const [primera, segunda, tercera] = tecnologias

console.log(`aprenderé ${primera},${segunda}, y ${tercera}`)


// Mi perfil

const miPerfil = {
    myName: "Pipe", 
    myAge: 34,
    countryOfOrigin: "CO", 
    countryOfResidency: "USA",
    yearsOfExperience: 5
}

const {myAge, countryOfOrigin,yearsOfExperience,myName,countryOfResidency} = miPerfil 

const mySkills = ["Javascript", "FastLearning","Troubleshooter","Lazy","Wordpress Dev"]

const [first, second, third] = mySkills

console.log(`My name is ${myName} I'm ${myAge} I got ${yearsOfExperience} years of experience and my skills are ${first},${second} and ${third}`)