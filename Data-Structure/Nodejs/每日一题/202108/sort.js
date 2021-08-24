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
{
    const arr = [2, 5, 7, 1, 3];
    let len = arr.length;
    const mergeSort = arr => {
        if (arr.length < 2) return arr;
        const merge = (left, right) => {
            if (left.length === 0) return right;
            if (right.length === 0) return left;
            let res = [];
            while (left.length > 0 && right.length > 0) {
                if (left[0] < right[0]) {
                    res.push(left.shift())
                } else {
                    res.push(right.shift())
                }
            }
            return res.concat(left, right);
        }
        const mergeSort = arr => {
            if (arr.length < 2) return arr;
            let mid = arr.length >> 1;
            let left = mergeSort(arr.slice(0, mid));
            let right = mergeSort(arr.slice(mid));
            return merge(left, right);
        }

        return mergeSort(arr);
    }
    console.log('mergeSort(arr) => ', mergeSort(arr));
}
{
    const arr = [2, 5, 7, 1, 3];
    let len = arr.length;
    const quickSort = arr => {
        if (arr.length < 2) return arr;
        const getPivot = (arr, low = 0, high = arr.length - 1) => {
            let pi = low;
            let pivot = arr[high];
            for (let i = low; i <= high; i++) {
                if (arr[i] < pivot) {
                    swap(arr, i, pi);
                    pi++;
                }
            }
            swap(arr, high, pi);
            return pi;
        }
        const quickSort = (arr, low = 0, high = arr.length - 1) => {
            if (arr.length < 2) return arr;
            if (low < high) {
                let pi = getPivot(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
            return arr;
        }

        return quickSort(arr);
    }
    console.log('quickSort(arr) => ', quickSort(arr));

    let arr1 = [8, 1, 10, 500, 400, 2, 3, 4, 5, 9,-3, 5, 6, 7,8, 1, 10, 500, 400, 2, 3, 4, 5, 9,-3, 5, 6, 7,8, 1, 10, 500, 400, 2, 8, 1, 10, 500, 21, 2, 3, 4, 5, 9,-3, 5, 6, 7,3, 4, 5, 9,-3, 5, 6, 7,8, 1, 10, 8, 1, 10, 500, 400, 2, 3, 4, 5, 9,-3, 5, 6, 7, 500, 8, 1, 10, 500, 400, 2, 3, 4, 5, 9,-3, 5, 6, 7,400, 2, 3, 4, 5, 9,-3, 5, 6, 7,81,99,100,100];

   console.log('5: quickSortHelp', quickSort(arr1));
}