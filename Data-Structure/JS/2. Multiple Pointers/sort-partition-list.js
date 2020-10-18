/*
Given a list of numbers and an integer k, partition/sort the list such that the all numbers less than k occur before k, and all numbers greater than k occur after the number k.

A good way to solve this problem is to keep track of 2 indexes, where to insert smaller, and where to insert larger numbers than k. Go through all elements in the list. If the element is less than k, then swap to the current small index and increment the index by one. Otherwise if the element is greater than k, then swap to the back of the list and decrement the index by one. If the element is the same as k, then simply go to the next number as that will be swapped to a later position later if there are numbers smaller than k after.

console.log(partitionList([2, 2, 2, 5, 2, 2, 2, 2, 5], 3))
// [2, 2, 2, 2, 2, 2, 2, 5, 5]

The time complexity is O(n) for processing the whole list, and the space complexity is O(1).
*/

// same as Top 100, sort 3 colors 

const partitionList = (arr, k) => {
    if (arr.length === 1) return arr;
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    let p0 = 0;
    let p2 = arr.length - 1;
    let current = 0;
    while (current <= p2) {
        let num = arr[current];
        if (num > k) {
            swap(arr, current, p2);
            p2--;
        } else if (num < k) {
            swap(arr, current, p0);
            p0++;
            current++
        } else current++;
    }
    return arr;
}
console.log('partitionList : ', JSON.stringify(partitionList([2, 2, 2, 5, 2, 2, 2, 2, 5], 3)));