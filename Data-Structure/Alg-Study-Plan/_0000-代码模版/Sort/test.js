// bubbleSort :backward loop; out loop i--; inner loop j++; swap; check isSwap;
// selectionSort : smallIdx; out loop i++; inner loop j++; swap; each loop find smallest one, and put on left; check is index change;
// insertingSort : left side sorted, out loop i++, start first item, i = 1;  inner loop j--, start j = i-1; current= arr[i]; arr[j+1] = current; NO swap;
// mergeSort : merge(left,right), sort(arr), NO swap;
// quickSort : pivot, swap, each step swap current index and pi, sort : low < hight

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

const quickSortHelp = (arr) => {

    if (arr.length < 2) return arr;
    // getPivotIndex with Swap
    const getPivotIndex = (arr, low, high) => {
        let pivot = arr[high];
        let pi = low;
        for (let i = low; i <= high; i++) {
            if (arr[i] < pivot) {
                swap(arr, i, pi);
                pi++;
            }
        }
        swap(arr, pi, high);// move pivot to a right position

        return pi;

    }
    const quickSort = (arr, low = 0, high = arr.length - 1) => {
        if (arr.length < 2) return arr; //base case
        if (low < high) { // base case
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
        if (right.length === 0) return left;
        let result = [];
        while (left.length && right.length) {
            //NOT  while (left && right) //[] is not false, 0 is false
            left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift());
        }
        return result.concat(left, right);
    }

    const mergeSort = (arr) => {
        if (arr.length < 2) return arr; // base case;
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
        let current = arr[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (arr[j] > current) {
                arr[j + 1] = arr[j];
            }
            else break;
        }
        arr[j + 1] = current;
    }
    return arr;
}
const selectionSort = (arr) => {
    if (arr.length < 2) return arr;
    for (let i = 0; i < arr.length; i++) {
        let smallIndex = i;
        for (let j = i + 1; j < arr.length; j++) { // j = i + 1 is better than j = i
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
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                isSwap = true;
            }
        }
        if (!isSwap) break; // since we start from j = 0, so every time, the biggest one has been put right
    }
    return arr;
}

console.log('================ start sort ================');
console.log('5: quickSortHelp', JSON.stringify(quickSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));
console.log('4: mergeSortHelp', JSON.stringify(mergeSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));
console.log('3: insertionSort', JSON.stringify(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])));
console.log('2: selectionSort', JSON.stringify(selectionSort([8, 1, 2, 3, 4, 5, 6, 7])));
console.log('1: bubbleSort   ', JSON.stringify(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])));
console.log('================ end sort ================');