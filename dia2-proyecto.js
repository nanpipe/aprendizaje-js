const misTecnologias = [
  { nombre: "JavaScript", nivel: 3 },
  { nombre: "React", nivel: 2 },
  { nombre: "Node.js", nivel: 2 },
  { nombre: "WordPress", nivel: 4 },
  { nombre: "PHP", nivel: 3 }
];


const misTecnologiasConAnos = misTecnologias.map((tech,index)=>{
    const {nombre,nivel} = tech
    const nivelConAnos = `${nivel} años`
    return {nombre,nivelConAnos}
})

console.log(misTecnologiasConAnos)


const misTecnologiasConNivelMayor3 = misTecnologias.filter((tech)=>tech.nivel > 3)

console.log(misTecnologiasConNivelMayor3)

const AnosExperiencia = misTecnologias.reduce((totalExp,currentExp) =>{
    return totalExp + currentExp.nivel
},0);

console.log(AnosExperiencia)