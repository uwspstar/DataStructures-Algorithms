/*
基本思路
PS：这道题在《算法小抄》 的第 293 页。

有两种方法解决这道题，这里主要说回溯算法思路，因为比较通用，可以套旧文 回溯算法详解 写过回溯算法模板。

本质上子集问题就是遍历这样用一棵回溯树：




详细题解：回溯算法团灭排列/组合/子集问题

标签：回溯算法，数学

解法代码
*/
class Solution {
    public:
    vector<vector<int>> res;
    vector<vector<int>> subsets(vector<int>& nums) {
        // 记录走过的路径
        vector<int> track;
        backtrack(nums, 0, track);
        return res;
    }

    void backtrack(vector<int>& nums, int start, vector<int>& track) {
        res.push_back(track);
        for (int i = start; i < nums.size(); i++) {
            // 做选择
            track.push_back(nums[i]);
            // 回溯
            backtrack(nums, i + 1, track);
            // 撤销选择
            track.pop_back();
        }
    }
};


/*
类似题目：

46. 全排列（中等）
77. 组合（中等）
*/