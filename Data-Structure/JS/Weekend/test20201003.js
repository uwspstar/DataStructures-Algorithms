const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

{
    const bubbleSort = (arr) => {
        if (arr.length < 2) return arr;
        for (let i = arr.length - 1; i >= 0; i--) {
            let isSwap = false;
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                }
            }
            if (!isSwap) break;
        }
        return arr;
    }
    console.log('1: bubbleSort', JSON.stringify(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])));
}
{
    const selectionSort = (arr) => {
        if (arr.length < 2) return arr;
        for (let i = 0; i < arr.length; i++) {
            let smallIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[smallIndex]) {
                    smallIndex = j;
                }
            }
            if (smallIndex !== i) {
                swap(arr, smallIndex, i);
            }
        }
        return arr;
    }

    console.log('2: selectionSort', JSON.stringify(selectionSort([8, 1, 2, 3, 4, 5, 6, 7])));
}
{
    const insertionSort = (arr) => {
        if (arr.length < 2) return arr;
        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;
            for (; j >= 0; j--) {
                if (arr[j] > current) {
                    arr[j + 1] = arr[j];
                } else break
            }
            arr[j + 1] = current;
        }
        return arr;
    }
    console.log('3: insertionSort', JSON.stringify(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])));

}