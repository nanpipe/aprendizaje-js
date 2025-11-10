// Build employee management with inheritance

class Employee {
    constructor(id, name, baseSalary) {
        this.id = id
        this.name = name
        this.baseSalary = baseSalary
    }

    calculateSalary() {
        return this.baseSalary;
    }

    getInfo() {
        return `${this.name} (ID: ${this.id})`;
    }
}

class Manager extends Employee {
    constructor(id, name, baseSalary, teamSize) {
        super(id, name, baseSalary)
        this.teamSize = teamSize
    }

    calculateSalary() {
        // Base salary + (teamSize * 100000) bonus

        return this.baseSalary + (this.teamSize * 100000)
    }

    getInfo() {
        // Use super.getInfo() + team info

        return `${super.getInfo()} + Team Size: ${this.teamSize}`
    }
}

class Developer extends Employee {
    constructor(id, name, baseSalary, programmingLanguages) {
        // Use super, add programmingLanguages (array)
        super(id,name,baseSalary)
        this.programmingLanguages = programmingLanguages
    }

    calculateSalary() {
        // Base salary + (languages.length * 200000) bonus
        return this.baseSalary + (this.programmingLanguages.length * 200000 )
    }

    getInfo() {
         return `${super.getInfo()} + Languages: ${this.programmingLanguages}`
    }
}

// Test
const manager = new Manager(1, "Ana", 3000000, 5);
const dev = new Developer(2, "Carlos", 2500000, ["JavaScript", "Python", "Go"]);

console.log(manager.getInfo());
console.log(manager.calculateSalary());
console.log(dev.getInfo());
console.log(dev.calculateSalary());