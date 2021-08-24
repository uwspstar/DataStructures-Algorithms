//quickSort
//# 快速排序就是个二叉树的前序遍历，归并排序就是个二叉树的后序遍历.
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
{
    // classic quicksort 
    // T : O(NlogN)
    // S : O(1)
    const quickSortHelp = arr => {

        if (arr.length < 2) return arr; //基线条件

        const getPivotIndex = (arr, low = 0, high = arr.length - 1) => {
            let pi = low;
            let pivot = arr[high];
            for (let i = low; i <= high; i++) {
                if (arr[i] < pivot) { // put small on left
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
    // random quickSort, find a random number first between index [1, n - 2], 
    // then swap the random number with the last one, index n - 1
    // do classic quickSort

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

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
                let i = getRandomInt(low, high - 1);
                //console.log('i=', i, 'low=', low, 'high - 1 =>', high - 1);
                swap(arr, i, high);
                let pi = getPivotIndex(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
            return arr;
        }
        return quickSort(arr);
    }
    console.log('Random - quickSort', JSON.stringify(quickSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));
}