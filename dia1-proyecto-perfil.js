const developer = {
    devName: "Pipe",
    devLocation: "Miami",
    arrayFormerProjects: ["niebla.com.co", "coconuts.com", "femncafe.com"],
    arrayDevKnowledge: ["Wordpress", "mySQL", "HTML", "CSS3"],
    yearsOfExperience: 5
}


const createCV = (developer) => {
    const { devName, devLocation, arrayFormerProjects, arrayDevKnowledge, yearsOfExperience } = developer;

    return `Hi my name is ${devName}, I live in ${devLocation}. I'm currently working as a software development using technologies such as ${[...arrayDevKnowledge]}, creating projects like ${arrayFormerProjects[0]} in the last ${yearsOfExperience} years `
}


const addProject = (developer, projectName, projectTecnology) => {
    const { arrayDevKnowledge, arrayFormerProjects } = developer;
    const newArrayDevKnowledge = [...arrayDevKnowledge, projectTecnology];
    const newArrayFormerProjects = [...arrayFormerProjects, projectName];

    const newDeveloper = {
        devName: developer.devName,
        devLocation: developer.devLocation,
        arrayFormerProjects: newArrayFormerProjects,
        arrayDevKnowledge: newArrayDevKnowledge,
        yearsOfExperience: developer.yearsOfExperience
    }

    return newDeveloper
};


const addProjectOptimal = (developer, projectName, projectTecnology) => {
    return {
        ...developer,
        arrayDevKnowledge: [...developer.arrayDevKnowledge, projectTecnology],
        arrayFormerProjects: [...developer.arrayFormerProjects, projectName]
    }
}


const howSeniorAreYou = (developer) => {
    const { yearsOfExperience } = developer;

    if (yearsOfExperience < 2) {
        return "Junior"
    }
    else if (yearsOfExperience >= 2 && yearsOfExperience <= 5) {
        return "Mid-level"
    }
    else return "Senior"
}

console.log(createCV(developer))

console.log(addProject(developer, "StyleLauri", "RoR"))
console.log(addProjectOptimal(developer, "StyleLauri", "RoR"))

console.log(howSeniorAreYou(developer))