// sortBits([1, 0, 0, 1, 1, 0]) //outputs: [0, 0, 0, 1, 1, 1]
// 1 : two pointers
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
const sortBits = (arr) => {
    if (arr.length === 0) return null;
    if (arr.length === 1) return arr[1];
    //two pointers
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] === 1) {
            swap(arr, left, right);
            right--;
        } else left++;
    }
    return arr;

}

const sortBits1 = function (arr) {
    if (arr.length < 2) return arr;
    let fast = 0;
    let slow = 0;
    while (fast < arr.length) { //O(N)
        // console.log(arr, 'fast=', fast, 'slow=', slow)
        if (arr[fast] === 0) {
            [arr[fast], arr[slow]] = [1, 0];
            slow++;
        }
        fast++;
    }
    return arr
}

//brut force
const sortBitsBF = function (arr) {

    if (arr.length < 2) return arr;
    // space O(n)
    let arr1 = [];
    let arr0 = [];
    //O(n)
    for (let i = 0; i < arr.length; i++) {
        arr[i] === 1 ? arr1.push(1) : arr0.push(0);
    }
    return [].concat(arr0, arr1);
}
console.log(sortBitsTest([0, 1, 0, 0, 1, 1, 0]));
console.log(sortBitsTest([1, 0, 0, 1, 1, 0]));

/*
[ 1, 0, 0, 1, 1, 0 ] fast= 0 slow= 0
[ 1, 0, 0, 1, 1, 0 ] fast= 1 slow= 0
[ 0, 1, 0, 1, 1, 0 ] fast= 2 slow= 1
[ 0, 0, 1, 1, 1, 0 ] fast= 3 slow= 2
[ 0, 0, 1, 1, 1, 0 ] fast= 4 slow= 2
[ 0, 0, 1, 1, 1, 0 ] fast= 5 slow= 2
[ 0, 0, 0, 1, 1, 1 ]
*/

const sortBits3 = function (arr) {
    if (arr.length < 2) return arr;
    let left = 0;
    let right = arr.length - 1;
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    while (left < right) {
        if (arr[left] === 0) {
            left++;
        } else {
            if (arr[right] === 1) {
                right--;
            } else {
                swap(arr, left, right);
                left++;
                right--;
            }
        }
    }
    return arr
}

// 2 : 
const sortBits4 = function (arr) {
    if (arr.length < 2) return arr
    let start = 0
    let end = arr.length - 1

    while (start < end) {
        // console.log(arr, 'start =', start, 'end =', end)
        if (arr[start] === 0) {
            start++
        }
        else if (arr[end] === 0) { // start === 1, and end is 
            [arr[start], arr[end]] = [0, 1]
            start++
            end--
        } else {
            end--
        }
    }
    return arr
}

console.log(sortBits([1, 0, 0, 1, 1, 0])) //
