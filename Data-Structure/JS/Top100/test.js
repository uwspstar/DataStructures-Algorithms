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
const findKthLargestNumWithQuickSort = function (arr, k) {
    if (arr.length < k) return undefined;
    //[1, 3, 5, 2]
    const getPivotIndex = function (arr, low, high) {
        let pivot = arr[high];
        let pivotIndex = low;

        const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] };

        for (let i = low; i < high; i++) {
            if (arr[i] < pivot) {
                swap(arr, i, pivotIndex)
                pivotIndex++;
            }
        }
        swap(arr, pivotIndex, high);

        return pivotIndex;
    }
    const quickSort = function (arr, start = 0, end = arr.length - 1) {
        if (arr.length < 2) return arr; // base case, always need

        if (start < end) {
            let pi = getPivotIndex(arr, start, end);
            quickSort(arr, start, pi - 1);
            quickSort(arr, pi + 1, end);
        }
        return arr;
    }

    return quickSort(arr).slice(-k)[0];
}
console.log(findKthLargestNumWithQuickSort([3, 2, 1, 5, 6, 4], 4)); // 3
console.log(findKthLargestNumWithQuickSort([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargestNumWithQuickSort([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4