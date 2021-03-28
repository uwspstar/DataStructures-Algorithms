const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
//bubbleSort
{
    const bubbleSort = arr => {
        if (arr.length < 2) return arr;
        for (let i = arr.length - 1; i >= 0; i--) {
            let isSwap = false;
            for (let j = 0; j <= i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    isSwap = true;
                }
            }
            if (!isSwap) break;
        }
        return arr;
    }
    console.log('1 - 1: bubbleSort   ', JSON.stringify(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])));//[1,2,3,4,5,6,7,8]
    console.log('1 - 2: bubbleSort   ', JSON.stringify(bubbleSort([8, 2, 1, 3, 5])));//[1,2,3,5,8]
    console.log('1 - 3: bubbleSort   ', JSON.stringify(bubbleSort([0])));//[0]
    console.log('1 - 4: bubbleSort   ', JSON.stringify(bubbleSort([8, 1])));//[1,8]
}
//selectionSort
{
    const selectionSort = arr => {
        if (arr.length < 2) return arr;
        for (let i = 0; i < arr.length; i++) {
            let smallIndx = i;
            for (let j = smallIndx; j < arr.length; j++) {
                if (arr[j] < arr[smallIndx]) {
                    smallIndx = j;
                }
            }
            if (smallIndx !== i) swap(arr, smallIndx, i);
        }
        return arr;
    }
    console.log('2: selectionSort', JSON.stringify(selectionSort([8, 1, 2, 3, 4, 5, 6, 7])));
}
//insertionSort
{
    const insertionSort = arr => {
        if (arr.length < 2) return arr;
        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;
            for (; j >= 0; j--) {
                if (arr[j] > current) {
                    arr[j + 1] = arr[j]
                } else break;
            }
            arr[j + 1] = current;
        }
        return arr;
    }
    console.log('3: insertionSort', JSON.stringify(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])));

}
//mergeSort
{
    const mergeSortHelp = arr => {
        if (arr.length < 2) return arr;
        const merge = (left, right) => {
            if (left.length === 0) return right;
            if (right.length === 0) return left;
            let result = [];
            while (left.length && right.length) {
                left[0] < right[0]
                    ? result.push(left.shift())
                    : result.push(right.shift());
            }
            return result.concat(left, right);
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
    console.log('4: mergeSortHelp', JSON.stringify(mergeSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));

}
//quickSort
{
    const quickSortHelp = arr => {
        if (arr.length < 2) return arr;
        const getPivotIndex = (arr, low = 0, high = arr.length - 1) => {
            let pi = low;
            let pivot = arr[high];
            for (let i = low; i <= high; i++) {
                if (arr[i] < pivot) {
                    swap(arr, i, pi);
                    pi++;
                    console.log('****',JSON.stringify(arr), 'i=', i, 'pi=', pi, 'pivot=', pivot, 'low=', low, 'high=', high);
                }
                console.log(JSON.stringify(arr), 'i=', i, 'pi=', pi, 'pivot=', pivot, 'low=', low, 'high=', high);
            }
            swap(arr, pi, high);
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
    console.log('5: quickSortHelp', JSON.stringify(quickSortHelp([5, 8, 3, 6, 1, 4, 7, 2])));
}