/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Input: [3,2,1,5,6,4] and k = 2 Output: 5
Input: [3,2,3,1,2,4,5,5,6] and k = 4 Output: 4
*/

//slow with bubble sort concept O(N^2)
const findKthLargestNum = function (arr, k) {
    if (arr.length < k) return undefined;

    const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] };

    for (let i = arr.length - 1; i >= arr.length - k; i--) {
        let isSwap = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                isSwap = true;
            }
        }
        if (!isSwap) break; // not if (isSwap) break; 
    }

    return arr.slice(-k)[0];
}

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