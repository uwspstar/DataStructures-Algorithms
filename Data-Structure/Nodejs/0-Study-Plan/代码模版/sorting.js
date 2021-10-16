/*
本文作者:九章算法令狐冲
官方网站:www.jiuzhang.com/?utm_source=lhc-cheatsheet-v4.0
*/

/*
排序算法 Sorting

时间复杂度:
    - 快速排序(期望复杂度) : O(nlogn)
    - 归并排序(最坏复杂度) : O(nlogn)

空间复杂度:
    - 快速排序 : O(1)
    - 归并排序 : O(n)
*/

// 代码模板 : quick sort
{

}
// 代码模板 : quick sort
{
    process.stdout.write("\u001b[2J\u001b[0;0H");

    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    const quickSort = (arr, start = 0, end = arr.length - 1) => {
        if (start >= end) return;
        let left = start;
        let right = end;

        console.log('left=', left, 'right=', right, 'start=', start, 'end=', end, 'arr=', arr.join(','));

        // key point 1: pivot is the value, not the index
        let pi = start + parseInt((end - start) / 2);
        let pivot = arr[pi];

        // key point 2: every time you compare left & right, it should be
        // left <= right not left < right
        while (left <= right) {
            console.log('................................');
            while (left <= right && arr[left] < pivot) {
                console.log('arr=', arr.join(','), 'left=', left);
                left++;

            }
            while (left <= right && arr[right] > pivot) {
                console.log('arr=', arr.join(','), 'right=', right);
                right--;
            }

            if (left <= right) {
                console.log('I am here ... arr=', arr.join(','), 'right=', right);
                swap(arr, left, right)
                left++;
                right--;
            }
        }
        //console.log('first call start : pivot=', pivot, 'start=', start, 'right=', right, arr);
        quickSort(arr, start, right);
        //console.log('first 1 end : pivot=', pivot, 'start=', start, 'right=', right, arr);

        quickSort(arr, left, end);
        //console.log('second call end : pivot=', pivot, 'start=', start, 'right=', right, arr);

    }
    let arr = [1, 2, 8, 7, 5, 9, 6, 3, 4];
    console.log(quickSort(arr), 'arr=', arr.join(','));

}
// 代码模板 : quick sort
{

}
// 代码模板 : merge sort  : (NOT Working ???)
{
    process.stdout.write("\u001b[2J\u001b[0;0H");

    const merge = (arr, start, end, temp) => {
        let middle = start - parseInt((end - start) / 2);
        let leftIndex = start;
        let rightIndex = middle + 1;
        let index = start;
        while (leftIndex <= middle && rightIndex <= end) {
            if (arr[leftIndex] < arr[rightIndex]) {
                temp[index++] = arr[leftIndex++];
            } else {
                temp[index++] = arr[rightIndex++];
            }
        }
        while (leftIndex <= middle) {
            temp[index++] = arr[leftIndex++];
        }

        while (rightIndex <= end) {
            temp[index++] = arr[rightIndex++];
        }
        for (let i = start; i <= end; i++) {
            arr[i] = temp[i];
        }
    }

    const mergeSort = (arr, start = 0, end = arr.length - 1, temp = []) => {
        if (start >= end) return;
        // left, and right half
        //let mid = start - (start + end) / 2; ;
        // 处理左半区间
        mergeSort(arr, start, (start + end) >> 1, temp);
        // 处理右半区间
        mergeSort(arr, ((start + end) >> 1) + 1, end, temp);
        // 合并排序数组

        merge(arr, start, end, temp);
    }

    let arr = [1, 2, 8, 7, 5, 9, 6, 3, 4];
    console.log('mergeSort = ', mergeSort(arr), 'arr=', arr.join(','));
}
