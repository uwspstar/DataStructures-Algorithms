const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
{
    const quickSortHelp = arr => {
        if (arr.length < 2) return arr;
        //pivot is right index inside arr;
        const getPivotIndex = (arr, low = 0, high = arr.length - 1) => {
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
            if (low >= high) return arr;
            let pi = getPivotIndex(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
            return arr;
        }

        return quickSort(arr);
    }
    console.log('5: quickSortHelp', JSON.stringify(quickSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));
}
{
    const quickSortHelp = arr => {
        if (arr.length < 2) return arr; //基线条件

        const getPivotIndex = (arr, low = 0, high = arr.length - 1) => {
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
            if (arr.length < 2) return arr; //基线条件
            if (low < high) {
                let pi = getPivotIndex(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
            return arr;
        }
        return quickSort(arr);
    }
    console.log('5: quickSortHelp', JSON.stringify(quickSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));
}
{
    const bubbleSort = arr => {
        if (arr.length < 2) return arr;
        for (let i = arr.length - 1; i >= 0; i++) {
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
    console.log(JSON.stringify(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])));//[1,2,3,4,5,6,7,8]
}

