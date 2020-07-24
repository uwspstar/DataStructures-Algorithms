/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Input: [3,2,1,5,6,4] and k = 2 Output: 5
Input: [3,2,3,1,2,4,5,5,6] and k = 4 Output: 4
*/

//slow with bubble sort concept O(N^2)
const findKthLargestNum = function (arr, k) {
    if (arr.length < k) return undefined;
    const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] };
    for (let i = arr.length - 1; i < k; i--) {
        let isSwap = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                isSwap = true;
            }
        }
        if (isSwap) break;
    }
    return arr[arr.length - k];
}