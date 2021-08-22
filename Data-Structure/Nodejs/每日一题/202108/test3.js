{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    const selectionSort = arr => {
        if (arr.length < 2) return arr;
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            let smallIndex = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[smallIndex]) {
                    smallIndex = j;
                }
            }
            if (smallIndex !== i) swap(arr, smallIndex, i);
        }
        return arr;
    }
    let selectionSortArr = [5, 3, 8, 6, 1, 2,];
    console.log('selectionSort', selectionSort(selectionSortArr));

}
{

    const insertionSort = arr => {
        if (arr.length < 2) return arr;
        let len = arr.length;
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
    let arr = [5, 3, 8, 6, 1, 2,];
    console.log('insertionSort', insertionSort(arr));

}



{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    //[ 5,3,8,6,1,2,]
    const bubbleSort = arr => {
        if (arr.length === 0) return arr;
        let len = arr.length;
        for (let i = len - 1; i >= 0; i--) {
            let isSwap = false;
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, i, j);
                    isSwap = true;
                }
            }
            if (!isSwap) break;
        }
        return arr;
    }

    let arr = [5, 3, 8, 6, 1, 2,];
    console.log(bubbleSort(arr));

}
{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    //[ 5,3,8,6,1,2,]
    const bubbleSort = arr => {
        if (arr.length === 0) return arr;
        let len = arr.length;
        for (let i = len - 1; i >= 0; i--) {
            console.log('i=', i, 'arr=', arr);
            for (let j = 0; j < i && (arr[j] > arr[j + 1]); j++) {
                swap(arr, i, j);
                console.log('i=', i, 'j=', j, 'arr=', arr, arr[j], arr[j + 1]);
            }
        }
        return arr;
    }
    let arr = [5, 3, 8, 6, 1, 2,]
    console.log(bubbleSort(arr));
}
{

    const bubbleSort1 = arr => {

        const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

        if (arr.length === 0) return arr;
        let len = arr.length;
        for (let i = len - 1; i >= 0; i--) {
            let isSwap = false;
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, i, j);
                    isSwap = true;
                }
            }
            if (!isSwap) break;
        }
        return arr;
    }
    let arr1 = [5, 3, 8, 6, 1, 2,]
    console.log(bubbleSort1(arr1));
}
