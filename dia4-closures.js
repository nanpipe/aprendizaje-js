const createCounter = () => {
    let count = 0;

    return () => {
        count++
        return count;
    }
}


const createGreeting = (language) => {
    return (personName) => {

        switch (language) {
            case 'en':
                return `Hello, ${personName}!`;
                break;
            case 'es':
                return `Hola, ${personName}!`;
                break;
            default:
                return `Hello, ${personName}!`;
        }
    }
}


const greetingES = createGreeting("es")
const greetingEN = createGreeting("en")


console.log(greetingES('Tubo'))
console.log(greetingEN('Pipe'))

