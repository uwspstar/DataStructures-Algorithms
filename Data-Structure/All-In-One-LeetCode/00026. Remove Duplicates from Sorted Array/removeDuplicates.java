class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        int slow = 0, fast = 0;
        while (fast < nums.length) {
            if (nums[fast] != nums[slow]) {
                slow++;
                nums[slow] = nums[fast];// 维护 nums[0..slow] 无重复
            }
            fast++;
        }
        // 数组长度为索引 + 1
        return slow + 1;
    }
}

