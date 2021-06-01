//40. Combination Sum II
/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.
 
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: [ [1,1,6], [1,2,5], [1,7], [2,6] ]
 
Input: candidates = [2,5,2,1,2], target = 5
Output: [ [1,2,2], [5] ]
*/
//元素是有重复的: 难点在于：集合（数组candidates）有重复元素，但还不能有重复的组合。
class Solution {
    public List<List<Integer>> combinationSum2(int[] nums, int target) {
        List<List<Integer>> res = new ArrayList<>();
        LinkedList<Integer> path = new LinkedList<>();
        Arrays.sort(nums);// 首先把给candidates排序，让其相同的元素都挨在一起。
        this.backtrack(nums, path, target, 0, res);
        return res;
    }

    private void backtrack(int[] nums, LinkedList<Integer> path, Integer remain, Integer curr,
            List<List<Integer>> res) {

        if (remain == 0) {
            res.add(new ArrayList<Integer>(path));
            return;
        } else if (remain < 0) {
            return;
        } else {
            for (int i = curr; i < nums.length; ++i) {
                if (i > curr && nums[i - 1] == nums[i])
                    continue;
                path.addLast(nums[i]);
                backtrack(nums, path, remain - nums[i], i + 1, res);
                path.remove(path.size() - 1);
            }
        }
    }
}
// Confusing Number II
// How Many Numbers Are Smaller Than the Current Number
// Minimum Changes To Make Alternating Binary String