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
                // backtrack, remove the number from the combination
                path.remove(path.size() - 1);
            }
        }

    }
}
// Letter Combinations of a Phone Number
// Combination Sum II
// Factor Combinations
// Combination Sum IV