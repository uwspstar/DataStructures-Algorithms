/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library’s sort function for this problem.

Example: Input: [2,0,2,1,1,0] Output: [0,0,1,1,2,2]
Example: Input: [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1] 
Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2] 
*/

// solution 1 loop all put 3 different arr and concat at the end
// solution 2 use map to save count of 0, 1 and , loop 3 times add to result arr
// solution 3 use two pointers, one is for arr[i] = 0 (start++), one for arr[i] = 2 (end --); for arr[i] = 1, not changes
// solution 4 tow pointers, sort 0 first (save last 0 position) and sort 1, O(2N) = O(N)
// solution 5 tow pointers, similar as sln 4, use sub function to return last item index

// input : [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]
// output : [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2]

const sortColor = function (arr) {
    if (arr.length < 2) return arr;
    let p0 = 0;
    let current = 0;
    let p2 = arr.length - 1;
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    while (current <= p2) {
        if (arr[current] === 0) {
            swap(arr, p0, current);
            p0++;
            current++;
        } else if (arr[current] === 2) {
            swap(arr, p2, current);
            p2--; // NO current++;
        } else current++;

    }
    return arr;
}

//O(4N) =  O(N)
const sortColor2 = function (arr) {
    if (arr.length < 2) return arr;
    let map = new Map();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        map.has(arr[i]) ? map.set(arr[i], map.get(arr[i]) + 1) : map.set(arr[i], 0);
    }
    let n0 = map.get(0);
    while (n0 > 0) {
        result.push(0);
        n0--;
    }
    let n1 = map.get(1);
    while (n1 > 0) {
        result.push(1);
        n1--;
    }
    let n2 = map.get(2);
    while (n2 > 0) {
        result.push(2);
        n2--;
    }
    return result;

}

// O(N), SPACE 
// brute force
const sortColor1 = function (arr) {
    if (arr.length < 2) return arr;
    let arr0 = [];
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] === 0 ? arr0.push(arr[i])
            : arr[i] === 1 ? arr1.push(arr[i])
                : arr2.push(arr[i]);
    }
    return [].concat(arr0, arr1, arr2);
}

//sort 0 first, sort 1
const sortColor = function (arr) {
    if (arr.length < 2) return arr;

    const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] };

    // Sort 0
    let index0 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            swap(arr, i, index0);
            index0++;
        }
    }

    // Sort 1
    let index1 = index0 + 1;
    for (let i = index1; i < arr.length; i++) {
        if (arr[i] === 1) {
            swap(arr, i, index1);
            index1++;
        }
    }

    return arr;

}

const sortColorCountTotal = function (arr) {
    if (arr.length < 2) return arr;

    const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] };

    const getTotalNum = (arr, num) => {
        let totalNum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) totalNum++;
        }
        return totalNum;
    }

    let totalNum0 = getTotalNum(arr, 0);
    let totalNum1 = getTotalNum(arr, 1);

    for (let i = 0; i < arr.length; i++) {
        i <= totalNum0 ?
            arr[i] = 0 : i <= totalNum0 + totalNum1 ?
                arr[i] = 1 : arr[i] = 2;
    }

    return arr;

}

console.log('sortColor', sortColor([0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]));
