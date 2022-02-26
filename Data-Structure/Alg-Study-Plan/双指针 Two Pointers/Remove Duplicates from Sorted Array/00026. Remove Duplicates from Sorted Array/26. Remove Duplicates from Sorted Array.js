//26. Remove Duplicates from Sorted Array
// O(N) // O(1)
/*
[0,1,2,3,4,2,3,3,4]
         p
                 i
*/
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/shua-chuan-lc-jian-ji-shuang-zhi-zhen-ji-2eg8/

var removeDuplicates = function (nums) {
    if (nums.length < 2) return nums.length;
    //Input: nums = [0,0,1,1,1,2,2,3,3,4]
    //Output: 5, nums = [0,1,2,3,4]
    // two pointers
    let p = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[p]) {
            nums[++p] = nums[i];
            /*
            ++p;
            nums[++p] = nums[i];
            */
        }
    }
    return p + 1;
};

{
    //[0,1,2,2,3,3,4]
    var removeDuplicates = function (nums) {
        let fast = 0;
        let slow = 0;
        while (fast < nums.length) {
            if (nums[fast] !== nums[slow]) {
                slow++;
                nums[slow] = nums[fast]
            }
            fast++;
        }
        return slow + 1;
    }

}