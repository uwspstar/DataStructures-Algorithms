//
const arr = [5, 4, 3, 2, 1];

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

console.log(selectionSort(arr));

/*
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