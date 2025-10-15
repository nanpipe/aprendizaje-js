const skillsActuales = ["JavaScript", "WordPress", "Java"]
const skillsNuevas = ["React","Node.js"]


const allSkillOldWay = skillsActuales.concat(skillsNuevas)

console.log(allSkillOldWay)

const allSkillsNewWay = [...skillsActuales,...skillsNuevas]

console.log(allSkillsNewWay)

// Spread en objetos
const perfilBasico = { nombre: "Pipe", edad: 34 };
const perfilCompleto = { 
    ...perfilBasico, 
    pais: "Chile", 
    profesion: "Developer" 
};
console.log(perfilCompleto);

const oldLanguages = ["Arduino","PLC","C++","Assembler"]

const futureLanguages = ["React","Go","TypeScript"]

const allMyLanguages = [...oldLanguages,...futureLanguages]

const yo2024 = {
    currentName : "Pipe",
    currentAge : 34,
    currentSkills: [...oldLanguages]
}

const yo2025 = {
    futureName : `Dev ${yo2024.currentName}`,
    futureAge : yo2024.currentAge + 1,
    futureSkills : [...yo2024.currentSkills,...futureLanguages]

}


console.log(`I'm currently ${yo2024.currentName} and i'm ${yo2024.currentAge}... nowadays I know ${yo2024.currentSkills}, however, next year I'll be ${yo2025.futureName} at ${yo2025.futureAge} and I'll know ${yo2025.futureSkills}`)
