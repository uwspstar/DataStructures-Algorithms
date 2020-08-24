// sortBits([1, 0, 0, 1, 1, 0]) //outputs: [0, 0, 0, 1, 1, 1]

//0: brut force
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
// 1 : two pointers
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
const sortBits1 = (arr) => {
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
const sortBits = function (arr) {
    if (arr.length === 0) return null;
    if (arr.length === 1) return arr[0];
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] === 1) {
            swap(arr, left, right);
            right--;
        } else left++;
    }

    return arr
}
console.log('sortBits = ', sortBits([0, 1, 0, 0, 1, 1, 0]));
console.log('sortBits = ', sortBits([1, 0, 0, 1, 1, 0]));
console.log('sortBitsBF = ', sortBitsBF([1, 0, 0, 1, 1, 0]))

