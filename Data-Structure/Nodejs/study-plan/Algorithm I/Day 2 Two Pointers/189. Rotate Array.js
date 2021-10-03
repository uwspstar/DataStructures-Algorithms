//189. Rotate Array
// 数组翻转
{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    const reverse = (arr, left, right) => {
        while (left < right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }

    var rotate = function (nums, k) {
        let len = nums.length;
        k = k % len;
        reverse(nums, 0, len - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, len - 1);
    }
}