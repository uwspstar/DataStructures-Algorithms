//39. Combination Sum
/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Input: candidates = [2,3,6,7], target = 7 Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Input: candidates = [2,3,5], target = 8 Output: [[2,2,2,2],[2,3,3],[3,5]]
Input: candidates = [2], target = 1 Output: []
Input: candidates = [1], target = 1 Output: [[1]]
Input: candidates = [1], target = 2 Output: [[1,1]]
*/
//题目中的无限制重复被选取，吓得我赶紧想想 出现0 可咋办，然后看到下面提示：1 <= candidates[i] <= 200，我就放心了
//https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0039.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C.md
//没有组合数量要求，仅仅是总和的限制，所以递归没有层数的限制，只要选取的元素总和超过target，就返回！

class Solution {
    public List<List<Integer>> combinationSum(int[] nums, int target) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        LinkedList<Integer> path = new LinkedList<Integer>();
        this.backtrack(target, path, 0, nums, res);
        return res;
    }

    protected void backtrack(int remain, LinkedList<Integer> path, int start, int[] nums, List<List<Integer>> res) {

        if (remain == 0) {
            res.add(new ArrayList<Integer>(path));
            return;
        } else if (remain < 0) {
            return;
        } else {

            for (int i = start; i < nums.length; i++) {
                path.add(nums[i]);
                this.backtrack(remain - nums[i], path, i, nums, res);
                path.remove(path.size() - 1);
            }
        }

    }
}
// Letter Combinations of a Phone Number
// Combination Sum II
// Factor Combinations
// Combination Sum IV