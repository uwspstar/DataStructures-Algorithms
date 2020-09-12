/*
Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;
*/

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
}

console.log('someRecursive',someRecursive([4, 6, 8], val => val > 10));
console.log('someRecursive',someRecursive([4, 6, 8], val => val % 2 !== 0)); //isOdd
console.log('someRecursive',someRecursive([4, 6, 8], val => val % 2 === 0)); //isEven[UI][]