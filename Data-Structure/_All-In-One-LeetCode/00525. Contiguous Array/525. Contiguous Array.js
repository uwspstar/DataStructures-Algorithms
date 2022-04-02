//525. Contiguous Array
/*
Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

Example 1:
Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

Example 2:
Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.


https://leetcode-cn.com/problems/contiguous-array/solution/dong-tu-yan-shi-qian-zhui-he-si-xiang-by-z2no/
算法步骤：

创建一个哈希表，用 key 来储存 cur 值, value 来储存当前 index。
假设我们碰到0就将 cur decrement (减一), 碰到1则i increment (加一)。
如果我们能在哈希表中找到当前的  cur 值, 则取出对应的  pos, 在看当前的 index - pos 是否比 ans 大, 取其中的最优解。
核心：由于以上碰1加一，碰0减一的操作，当0与1数量一致时(连续数组), 其连续数组的和为零。因此我们知道数组前面的 cur 值是什么，在到达该连续数组尾部时就不会变。因此我们只需要检查哈希表中是否存在其相同的 cur 值即可！(多读几遍)
*/
//解题思路
//https://leetcode-cn.com/problems/contiguous-array/solution/ba-shu-zu-zhong-suo-you-de-0du-ti-huan-c-8hg0/
//把输入数组中所有的0都替换成-1，那么题目就变成了求包含相同数目的-1和1的最长子数组的长度
//在一个只包含数字1和-1的数组中，如果子数组-1和1的数目相同的话，那么子数组的所有数字之和就是0
//所以这个题目就变成了求数字之和为0的最长子数组的长度

var findMaxLength = function (nums) {
    const N = nums.length;
    const map = new Map();
    map.set(0, -1);
    // 前缀和
    let pre = 0;
    let res = 0;
    for (let i = 0; i < N; i++) {
        pre += nums[i] == 0 ? -1 : 1;
        console.log('pre =', pre);
        // 如果存在的话，则将当前索引和之前存入的索引值相减  取题目要求的最大值
        if (map.has(pre)) {
            res = Math.max(res, i - map.get(pre));
        } else {
            // 记录前缀和索引
            map.set(pre, i);
        }
    }
    console.log('map=', map);
    return res;
};


