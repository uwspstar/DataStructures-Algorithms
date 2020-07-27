
// ordered array
const binarySearchRecursive = function (arr, num, start = 0, end = arr.length - 1) {
    if (arr.length === 0) return -1;
    if (start <= end) {
        let mid = (start + end) >> 1;
        if (arr[mid] === num) return 1;
        arr[mid] < num ? binarySearchRecursive(arr, num, mid + 1, end)
            : binarySearchRecursive(arr, num, start, mid - 1);
    }
    return -1;
}
console.log(binarySearchRecursive([1, 2, 4, 5], 2)); // 1
console.log(binarySearchRecursive([1, 2, 4, 5], 0)); // -1
console.log(binarySearchRecursive([1, 2, 3, 4, 5], 3)); // 1
