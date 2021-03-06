const findMissingNumber = (arr) => {
    if (arr.length === 0) return 1;
    let n = arr.length + 1;
    let total = (n >> 1) * (n + 1);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return total - sum;

}

//console.log('findMissingNumber = ', findMissingNumber([1, 2, 4, 6, 3, 7, 8]));

const searchMatchStr = (str, word) => {
    if (str.length === 0) return 0;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < word.length; j++) {
            if (word[j] !== str[j + i]) break;
            if (j === word.length - 1) count++;
        }
    }
    return count;
}

const binarySearch = (arr, num) => {
    if (arr.length === 0) return -1;
    if (arr.length === 1) return arr[0] === num;
    if (arr[0] > num) return -1;
    if (arr[arr.length - 1] < num) return -1;

    let start = 0;
    let end = arr.length - 1
    while (start <= end) { // need <=, not <
        let mid = (start + end) >> 1;
        if (arr[mid] === num) return 1;
        arr[mid] > num ? end = mid - 1 : start = mid + 1;
    }
    return -1;
}

// check mergeSort concept
const binarySearchRecursive = (arr, num, start = 0, end = arr.length - 1) => {
    if (arr.length === 0) return -1;
    if (arr.length === 1) return arr[0] === num ? 0 : -1;

    if (arr[start] > num) return -1;
    if (arr[end] < num) return -1;
    if (start > end) return -1;

    let mid = (start + end) >> 1;
    if (arr[mid] === num) return mid;

    return arr[mid] > num ?
        binarySearchRecursive(arr, num, start, mid - 1) :
        binarySearchRecursive(arr, num, mid + 1, end)
}


//console.log('searchMatchStr', searchMatchStr("lorie loled", "lo"));
console.log('binarySearchRecursive', binarySearchRecursive([-1, 0, 1, 3, 5, 6, 7, 10, 20, 30, 50], 5));