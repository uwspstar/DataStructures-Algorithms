//https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/solution/gong-shui-san-xie-guan-yu-shan-chu-you-x-glnq/

const process = (nums, k) => {
    let p = 0;
    for (let x of nums) {
        if (p < k || nums[p - k] !== x) {
            nums[p] = x;
            p++;
        }
    }
    return p;
};

var removeDuplicates = function (nums) {
    return process(nums, 2);
}