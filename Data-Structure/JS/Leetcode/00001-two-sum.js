/*
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

same with hashtable

- The Set object lets you store unique values of any type, whether primitive values or object references.

- NaN and undefined can also be stored in a Set. All NaN values are equated (i.e. NaN is considered the same as NaN, even though NaN !== NaN).

*/
// check averagePair
// check binary search concept if arr is sorted
const twoSum = (arr, target) => {
    if (arr.length === 0) return false;
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            return true;
        }
        set.add(target - arr[i]);
    }
    return false;
}
const twoSum1 = (arr, target) => {
    if (arr.length === 0) return false;
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (!set.has(arr[i])) {
            set.add(arr[i]);
        }
        if (set.has(target - arr[i])) return true;
    }
    return false;
}

console.log(twoSum([2, 3, 4, 5, 6], 11));
/*
// Use to remove duplicate elements from the array

const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)])

// [2, 3, 4, 5, 6, 7, 32]
*/