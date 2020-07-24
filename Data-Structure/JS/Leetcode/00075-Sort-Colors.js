/*
75. Sort Colors : Medium
 
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example: Input: [2,0,2,1,1,0] Output: [0,0,1,1,2,2]
 

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with a "one-pass algorithm" using only constant space?
*/

//brute force
var sortColors = function (arr) {
    if (arr.length < 2) return arr;
    let arr0 = [];
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] === 0 ? arr0.push(0)
            : arr[i] === 1 ? arr1.push(1)
                : arr2.push(2);
    }
    return [].concat(arr0, arr1, arr2);
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));

//accept solution : two pointers, p0, p2, and current
var sortColors = function (arr) {
    if (arr.length < 2) return arr;
    let p0 = 0;
    let current = 0;
    let p2 = arr.length - 1;
    const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] };
    while (current <= p2) {
        if (arr[current] === 0) {
            swap(arr, p0, current);
            current++;
            p0++;
        } else if (arr[current] === 2) {
            swap(arr, p2, current);
            p2--;
        } else {
            current++;
        }
    }
    return arr;
};

// the fast one
var sortColors = function (nums) {

    const hm = {};
    let i = 0;

    nums.forEach((num) => (hm[num] = hm[num] + 1 || 1));

    [0, 1, 2].forEach((num) => {
        let count = hm[num];

        while (count) {
            nums[i++] = num;
            count--;
        }
    });
};

var sortColors = function (arr) {
    if (arr.length < 2) return arr;

    const map = new Map();
    let i = 0;

    arr.forEach((num) => (map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1)));

    [0, 1, 2].forEach((num) => {
        let count = map.get(num);

        console.log('count=', count, 'i=', i);

        while (count) {
            arr[i++] = num;
            count--;
        }
    });

    return arr;
};