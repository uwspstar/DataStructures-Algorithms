/*
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

function flatten(arr) {
    let result = [];
    const help = function (myArr) {
        for (let i = 0; i < myArr.length; i++) {
            Array.isArray(myArr[i]) ? help(myArr[i]) : result.push(myArr[i]);
        }
    }
    help(arr);
    return result;
}

console.log('flatten', flatten([1, 2, 3, [4, 5]]));
console.log('flatten', flatten([1, [2, [3, 4], [[5]]]]));
console.log('flatten', flatten([[1], [2], [3]]));
console.log('flatten', flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));