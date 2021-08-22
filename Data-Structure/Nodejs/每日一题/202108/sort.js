//quickSort
//mergeSort
//bubbleSort
//SelectionSort
//insertionSort


const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

{
    const arr = [2, 5, 7, 1, 3];
    let len = arr.length;

    const bubbleSort = arr => {
        console.log('arr =>', arr);

        if (arr.length < 2) return arr;

        for (let i = len - 1; i >= 0; i--) {
            let isSwap = false;
            for (let j = 1; j < len; j++) {
                if (arr[j] < arr[j - 1]) {
                    swap(arr, j, j - 1);
                    isSwap = true;
                }
            }
            if (isSwap === false) break; // not swap in this turn, which mean all numbers are sorted
        }

        return arr;
    }

    console.log('bubbleSort(arr) => ', bubbleSort(arr));
}
{
    const arr = [2, 5, 7, 1, 3];
    let len = arr.length;

    const selectionSort = arr => {
        console.log('arr =>', arr);
        if (arr.length < 2) return arr;
        for (let i = 0; i < len; i++) {
            let smallIndex = i;
            // j from next i
            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[smallIndex]) // find the current smallest
                    smallIndex = j; // update smallIndex to be current smallest index j
            }
            if (smallIndex !== i) swap(arr, smallIndex, i);
        }
        return arr;
    }
    console.log('selectionSort(arr) => ', selectionSort(arr));
}
{
    const arr = [2, 5, 7, 1, 3];
    let len = arr.length;

    const insertionSort = arr => {
        if (arr.length < 2) return arr;
        for (let i = 1; i < len; i++) {
            let curr = arr[i];
            let j = i - 1;
            for (; j >= 0; j--) {
                if (arr[j] > curr) {
                    arr[j + 1] = arr[j];
                } else break;
            }
            arr[j + 1] = curr;
        }
        return arr;
    }

    console.log('insertionSort(arr) => ', insertionSort(arr));

}