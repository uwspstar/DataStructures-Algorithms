var findKthLargest = function (arr, k) {
    if (arr.length < k) return undefined;

    for (let i = arr.length - 1; i >= arr.length - 1 - k; i--) {
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr.slice(-k)[0]
};
//console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
//console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))

// O (NlogN)
const findKthLargestNum = function (arr, k) {
    if (arr.length < k) return undefined;

    const merge = function (left, right) {
        if (left.length === 0) return right;
        if (right.length === 0) return left;
        let result = [];
        while (left.length > 0 && right.length > 0) {
            left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift())
        }
        return result.concat(left, right);
    }
    const mergeSort = function (arr) {
        if (arr.length < 2) return arr; // base case, always need
        let mid = (arr.length) >> 1;
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }

    return mergeSort(arr).slice(-k)[0];
}
console.log(findKthLargestNum([3, 2, 1, 5, 6, 4], 4)); // 3
console.log(findKthLargestNum([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargestNum([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4