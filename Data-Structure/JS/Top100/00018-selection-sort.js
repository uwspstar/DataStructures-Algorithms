const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
const selectionSort = (arr) => {
    if (arr.length < 2) return arr;
    for (let i = 0; i < arr.length; i++) {
        let smallIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallIdx]) {
                smallIdx = j;
            }
        }
        if (smallIdx !== i) swap(arr, i, smallIdx)
    }
    return arr;
};
console.log(selectionSort([5, 3, 2, 6, 9, 1, 0]))