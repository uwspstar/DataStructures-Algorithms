const PowerSet = array => {
    const result = [[]] // Starting with empty set

    for (let value of array) { // For each value of the array
        const length = result.length // Can't use result.length in loop since 
        // results length is increased in loop
        for (let i = 0; i < length; i++) {
            let temp = result[i].slice(0) // Make a clone of the value at index i  
            temp.push(value) // Add current value to clone
            result.push(temp) // Add clone back to results array
        }
    }

    return result;
}

console.log('PowerSet', PowerSet([1, 2, 3]))