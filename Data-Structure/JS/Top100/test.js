const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
const sortBitsTest = (arr) => {
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
console.log(sortBitsTest([0, 1, 0, 0, 1, 1, 0]));
console.log(sortBitsTest([1, 0, 0, 1, 1, 0]));
/*
let arr = [];
const test = (arr) => {

    arr.length !== 0 && console.log(arr);
}

arr.length !== 0 && test(arr);
*/