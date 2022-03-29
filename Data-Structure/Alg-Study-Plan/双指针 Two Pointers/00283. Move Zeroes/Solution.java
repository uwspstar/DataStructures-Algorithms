/*
基本思路
可以直接复用 27. 移除元素 的解法，先移除所有 0，然后把最后的元素都置为 0，就相当于移动 0 的效果。

详细题解：双指针技巧秒杀七道数组题目

标签：数组双指针，数组

解法代码
*/
class Solution {
    public void moveZeroes(int[] nums) {
        // 去除 nums 中的所有 0
        // 返回去除 0 之后的数组长度
        int p = removeElement(nums, 0);
        // 将 p 之后的所有元素赋值为 0
        for (; p < nums.length; p++) {
            nums[p] = 0;
        }
    }

    // 双指针技巧，复用 [27. 移除元素] 的解法。
    int removeElement(int[] nums, int val) {
        int fast = 0, slow = 0;
        while (fast < nums.length) {
            if (nums[fast] != val) {
                nums[slow] = nums[fast];
                slow++;
            }
            fast++;
        }
        return slow;
    }
}
/*
类似题目：

26. 删除有序数组中的重复项（简单）
83. 删除排序链表中的重复元素（简单）
27. 移除元素（简单）
*/