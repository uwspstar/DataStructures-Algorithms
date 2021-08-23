//quickSort
//# 快速排序就是个二叉树的前序遍历，归并排序就是个二叉树的后序遍历.
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