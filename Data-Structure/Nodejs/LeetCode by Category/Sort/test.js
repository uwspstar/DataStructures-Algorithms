const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

const quickSort = arr => {
    if (arr.length < 2) return arr;

    const getPivotIndex = (arr, low = 0, high = arr.length - 1) => {
        let pi = low;
        let pivot = arr[high];
        for (let i = low; i <= high; i++) {
            if (arr[i] < pivot) {
                swap(arr, i, pi);
                pi++;
            }
        }
        swap(arr, pi, high);
        return pi;
    }

    const qSort = (arr, low = 0, high = arr.length - 1) => {
        if (low < high) {
            let pi = getPivotIndex(arr, low, high);
            qSort(arr, low, pi - 1);
            qSort(arr, pi + 1, high);
        }
        return arr;
    }

    return qSort(arr);
}



console.log('quickSort', JSON.stringify(quickSort([8, 1, 2, 4, 3, 5, 2, 7])));