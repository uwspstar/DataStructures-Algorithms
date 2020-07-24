var findKthLargest = function (arr, k) {
    if (arr.length < k) return undefined;

    for (let i = arr.length - 1; i >= arr.length - 1 - k; i--) {
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr.slice(-k)[0]
};
//console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
//console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))


const findKthLargestNum = function (arr, k) {
    if (arr.length < k) return undefined;

    const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] };

    for (let i = arr.length - 1; i >= arr.length - k - 1; i--) {
        let isSwap = false;
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                //isSwap = true;
            }
        }
        if (isSwap) break;
    }
    console.log('arr=', arr);
    return arr.slice(-k)[0];
}
console.log(findKthLargestNum([3, 2, 1, 5, 6, 4], 2)); // 6
console.log(findKthLargestNum([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4