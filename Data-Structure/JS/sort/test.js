// bubbleSort : out loop i--; inner loop j++; swap
// selectionSort : out loop i++; inner loop j++; smallIdx; swap
// insertingSort : left side sorted, out loop i++, i = 1;  inner loop j--, j= i-1
// mergeSort : merge(left,right), sort(arr), no swap
// quickSort : pivot, swap

const arr = [1, 2, 3, 5, 4];
const quickSort = function (arr, low = 0, high = arr.length - 1) {
    if (arr.length < 2) return arr;
    const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] };
    const getPivotIndex = (arr, low, high) => {
        let pivot = arr[high];
        let pivotIndex = low;
        for (let i = low; i < high; i++) {
            if (arr[i] < pivot) {
                swap(arr, i, pivotIndex);
                pivotIndex++;
            }
        }
        swap(arr, high, pivotIndex);
        return pivotIndex;
    }
    if (low < high) {
        let pi = getPivotIndex(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

console.log(quickSort(arr));

/*
const mergeSort = function (arr) {
    if (arr.length < 2) return arr;
    const merge = (left, right) => {
        if (left.length === 0) return right;
        if (right.length === 0) return left;
        let result = [];

        while (left.length > 0 && right.length > 0) {
            left[0] < right[0] ?
                result.push(left.shift()) :
                result.push(right.shift());
        }
        return result.concat(left, right);
    }
    let mid = arr.length >> 1;
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
const insertingSort = function (arr) {
    if (arr.length < 2) return arr;
    //const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]]};
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (arr[j] > current) {
                arr[j + 1] = arr[j];
            } else break; //left side sorted
        }
        arr[j + 1] = current;
    }

    return arr;
}
const selectionSort = function (arr) {
    //get smallest each loop
    if (arr.length < 2) return arr;
    const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] };

    for (let i = 0; i < arr.length; i++) {
        let smallIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallIdx]) {
                smallIdx = j;
            }
        }
        if (smallIdx !== i) {
            swap(arr, i, smallIdx);
        }
    }
    return arr;
}

const bubbleSort = function (arr) {
    if (arr.length < 2) return arr;
    const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] };
    for (let i = arr.length - 1; i >= 0; i--) {
        let isSwap = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                isSwap = true;
            }
        }
        if (!isSwap) break;
    }
    return arr;
}
*/