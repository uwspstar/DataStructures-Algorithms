// bubbleSort : out loop i--; inner loop j++; swap
// selectionSort : out loop i++; inner loop j++; smallIdx; swap
// insertingSort : left side sorted, out loop i++, i = 1;  inner loop j--, j= i-1
// mergeSort : merge(left,right), sort(arr), no swap
// quickSort : pivot, swap

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

const quickSortHelp = (arr) => {
    if (arr.length < 2) return arr;

    const getPivotIndex = (arr, low, high) => {
        let pi = low;
        let pivot = arr[high];
        for (let i = low; i <= high; i++) {
            if (arr[i] < pivot) {
                swap(arr, i, pi)
                pi++;
            }
        }
        swap(arr, high, pi)
        return pi;
    }

    const quickSort = (arr, low = 0, high = arr.length - 1) => {
        if (arr.length < 2) return arr;
        if (low < high) {
            let pi = getPivotIndex(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
        return arr;
    }
    return quickSort(arr);
}
const mergeSortHelp = (arr) => {
    if (arr.length < 2) return arr;

    const merge = (left, right) => {
        if (left.length === 0) return right;
        if (left.right === 0) return left;
        let result = [];
        while (left.length > 0 && right.length > 0) {
            left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift());
        }
        return result.concat(left, right);
    }
    const mergeSort = (arr) => {
        if (arr.length < 2) return arr; //base class
        let mid = arr.length >> 1;
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }

    return mergeSort(arr);
}
const insertionSort = (arr) => {
    if (arr.length < 2) return arr;
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let current = arr[i];
        for (; j >= 0; j--) {
            if (arr[j] > current) {
                arr[j + 1] = arr[j];
            } else break;
        }
        arr[j + 1] = current;
    }
    return arr;
}
const selectionSort = (arr) => {
    if (arr.length < 2) return arr;
    for (let i = 0; i < arr.length; i++) {
        let smallIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j;
            }
        }
        if (smallIndex !== i) swap(arr, i, smallIndex);
    }
    return arr;
}
const bubbleSort = (arr) => {
    if (arr.length < 2) return arr;
    for (let i = arr.length - 1; i >= 0; i--) {
        let isSwap = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, i, j);
            isSwap = true;
        }
        if (!isSwap) break;
    }
    return arr;
}

console.log(quickSortHelp([8, 1, 2, 3, 4, 5, 6, 7]));