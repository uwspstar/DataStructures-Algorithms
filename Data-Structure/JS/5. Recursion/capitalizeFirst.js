/*
capitalizeFirst
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// toUpperCase() NOT toUpper()
// shift() vs unshift()
const capitalizeFirst = function (arr) {
    if (arr.length === 0) return arr;
    let result = [];
    result.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    return result.concat(capitalizeFirst(arr.slice(1)));
}

console.log('capitalizeFirst', capitalizeFirst(["abc", "xing", "hello"]));
console.log('capitalizeFirst', capitalizeFirst(['car', 'taco', 'banana']));
