const createMultiplier = (multiplier) => {
    let timesUsed = 0

    return (number) => {
        timesUsed++;
        return {
            result: number * multiplier,
            timesUsed: timesUsed
        }
    }
}

const mulplyBy3 = createMultiplier(3)
const mulplyBy5 = createMultiplier(5)

 console.log(mulplyBy3(3))
console.log(mulplyBy3(4))
console.log(mulplyBy3(53))
console.log(mulplyBy3(6))
console.log(mulplyBy5(3)) 


const createDataTracker = () => {
    let data = [];
    let operations = 0

    return {
        add: (item) => {
            operations ++
            return data = data.concat(item)

        },
        remove: (index) => {
            operations ++
            return data = data.splice(index, 1)
        },
        getStats: () => {
            return { total: data.length, lastAdded: data[data.length - 1], operations: operations  }
        }
    };
};
const tracker = createDataTracker()

console.log(tracker.add("item1"));      // ["item1"]
console.log(tracker.add("item2"));
console.log(tracker.getStats());
console.log(tracker.add("item0"));
console.log(tracker.getStats());
console.log(tracker.remove(1)); 
console.log(tracker.getStats());