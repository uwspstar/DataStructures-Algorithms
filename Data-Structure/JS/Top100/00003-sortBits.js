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
const sortBits1 = function (arr) {
    if (arr.length < 2) return arr;
    let fast = 0;
    let slow = 0;
    while (fast < arr.length) { //O(N)
        // console.log(arr, 'fast=', fast, 'slow=', slow)
        // [0, 1, 0, 0, 1, 1, 0]
        if (arr[fast] === 0) {
            [arr[fast], arr[slow]] = [1, 0];
            slow++;
        }
        fast++;
    }
    return arr
}

console.log('sortBits = ',sortBits([0, 1, 0, 0, 1, 1, 0]));
console.log('sortBits = ',sortBits([1, 0, 0, 1, 1, 0]));
console.log('sortBitsBF = ',sortBitsBF([1, 0, 0, 1, 1, 0])) 
console.log('sortBits1 = ',sortBits1([1, 0, 0, 1, 1, 0])) 
/*
[ 1, 0, 0, 1, 1, 0 ] fast= 0 slow= 0
[ 1, 0, 0, 1, 1, 0 ] fast= 1 slow= 0
[ 0, 1, 0, 1, 1, 0 ] fast= 2 slow= 1
[ 0, 0, 1, 1, 1, 0 ] fast= 3 slow= 2
[ 0, 0, 1, 1, 1, 0 ] fast= 4 slow= 2
[ 0, 0, 1, 1, 1, 0 ] fast= 5 slow= 2
[ 0, 0, 0, 1, 1, 1 ]
*/
