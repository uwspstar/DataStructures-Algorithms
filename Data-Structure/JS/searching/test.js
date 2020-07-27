
// ordered array
const binarySearch = (arr, num) => {
    if (arr.length === 0) return -1;
    if (arr.length === 1) return arr[0] === num;
    if (arr[0] > num) return -1;
    if (arr[arr.length - 1] < num) return -1;

    let start = 0;
    let end = arr.length - 1
    while (start <= end) { // need <=, not <
        let mid = (start + end) >> 1;
        console.log('arr[mid]=', arr[mid]);
        if (arr[mid] === num) return 1;
        arr[mid] > num ? end = mid - 1 : start = mid + 1;
    }
    return -1;
}
// console.log('binarySearch', binarySearch([-1, 0, 1, 3, 5, 6, 7, 10, 20, 30, 50], 5));
// console.log('binarySearch', binarySearch([1, 2, 4, 5], 2)); // 1
// console.log('binarySearch', binarySearch([1, 2, 4, 5], 0)); // -1
// console.log('binarySearch', binarySearch([1, 2, 3, 4, 5], 3)); // 1

const binarySearchRecursive = (arr, num, start = 0, end = arr.length - 1) => {
    if (arr.length === 0) return -1;
    if (arr.length === 1) return arr[0] === num;
    if (arr[start] > num) return -1;
    if (arr[end] < num) return -1;

    while (start <= end) {
        let mid = (start + end) >> 1;
        if (arr[mid] === num) return 1;
        arr[mid] > num ?
            binarySearchRecursive(arr.slice(0, mid), num, start, mid - 1) :
            binarySearchRecursive(arr.slice(mid + 1), num, mid + 1, end)

    }
    return -1;
}
console.log('binarySearchRecursive', binarySearchRecursive([-1, 0, 1, 3, 5, 6, 7, 10, 20, 30, 50], 5));
// console.log('binarySearchRecursive', binarySearchRecursive([1, 2, 4, 5], 2)); // 1
// console.log('binarySearchRecursive', binarySearchRecursive([1, 2, 4, 5], 0)); // -1
// console.log('binarySearchRecursive', binarySearchRecursive([1, 2, 3, 4, 5], 3)); // 1
