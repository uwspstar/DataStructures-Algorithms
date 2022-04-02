//215. 数组中的第K个最大元素
//快排亲兄弟：快速选择算法详解

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

var findKthLargest = function (nums, k) {
    const N = nums.length;
    let left = 0, right = N - 1;
    while (left < right) {
        const pi = getPivotIndex(nums, left, right);
        if (pi === N - k) {
            return nums[pi];
        } else if (pi < N - k) {
            left = pi + 1;
        } else {
            right = pi - 1;
        }
    }
    return nums[left];
};

function getPivotIndex(nums, low, high) {
    const pivot = nums[high];
    let pi = low;
    for (let i = low; i <= high; i++) {
        if (nums[i] < pivot) {
            swap(nums, i, pi);
            pi++;
        }
    }
    swap(nums, pi, high);
    return pi;
}