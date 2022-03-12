/*
基本思路
PS：这道题在《算法小抄》 的第 319 页。

nSum 系列问题的核心思路就是排序 + 双指针。

先给数组从小到大排序，然后双指针 lo 和 hi 分别在数组开头和结尾，这样就可以控制 nums[lo] 和 nums[hi] 这两数之和的大小：

如果你想让它俩的和大一些，就让 lo++，如果你想让它俩的和小一些，就让 hi--。




基于两数之和可以得到一个万能函数 nSumTarget，扩展出 n 数之和的解法，具体分析见详细题解。

详细题解：一个函数秒杀 2Sum 3Sum 4Sum 问题

标签：数组双指针，递归

解法代码
*/
class Solution {
    public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        // n 为 3，从 nums[0] 开始计算和为 0 的三元组
        return nSumTarget(nums, 3, 0, 0);
    }

    /* 注意：调用这个函数之前一定要先给 nums 排序 */
    // n 填写想求的是几数之和，start 从哪个索引开始计算（一般填 0），target 填想凑出的目标和
    vector<vector<int>> nSumTarget(
            vector<int>& nums, int n, int start, int target) {

        int sz = nums.size();
        vector<vector<int>> res;
        // 至少是 2Sum，且数组大小不应该小于 n
        if (n < 2 || sz < n) return res;
        // 2Sum 是 base case
        if (n == 2) {
            // 双指针那一套操作
            int lo = start, hi = sz - 1;
            while (lo < hi) {
                int sum = nums[lo] + nums[hi];
                int left = nums[lo], right = nums[hi];
                if (sum < target) {
                    while (lo < hi && nums[lo] == left) lo++;
                } else if (sum > target) {
                    while (lo < hi && nums[hi] == right) hi--;
                } else {
                    res.push_back({left, right});
                    while (lo < hi && nums[lo] == left) lo++;
                    while (lo < hi && nums[hi] == right) hi--;
                }
            }
        } else {
            // n > 2 时，递归计算 (n-1)Sum 的结果
            for (int i = start; i < sz; i++) {
                vector<vector<int>>
                        sub = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
                for (vector<int>& arr : sub) {
                    // (n-1)Sum 加上 nums[i] 就是 nSum
                    arr.push_back(nums[i]);
                    res.push_back(arr);
                }
                while (i < sz - 1 && nums[i] == nums[i + 1]) i++;
            }
        }
        return res;
    }
};
/*
 * 类似题目：
 * 
 * 18. 四数之和（中等）
 */
