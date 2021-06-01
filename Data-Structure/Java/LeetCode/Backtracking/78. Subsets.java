//78. Subsets
/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Input: nums = [1,2,3] Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Input: nums = [0] Output: [[],[0]]
*/
//如果把 子集问题、组合问题、分割问题都抽象为一棵树的话，那么组合问题和分割问题都是收集树的叶子节点，而子集问题是找树的所有节点！
//那么既然是无序，取过的元素不会重复取，写回溯算法的时候，for就要从startIndex开始，而不是从0开始！
class Solution {
    List<List<Integer>> res = new ArrayList();

    public List<List<Integer>> subsets(int[] nums) {
        for (int len = 0; len <= nums.length; len++) {
            backtracking(new ArrayList<Integer>(), len, 0, nums);
        }
        return res;
    }

    private void backtracking(ArrayList<Integer> path, int len, int startIndex, int[] nums) {
        if (path.size() == len) {
            res.add(new ArrayList(path));
            return;
        } else {
            for (int i = startIndex; i < nums.length; i++) {
                path.add(nums[i]);
                backtracking(path, len, i + 1, nums);
                path.remove(path.size() - 1);
            }
        }
    }
}
// Subsets II
// Generalized Abbreviation
// Letter Case Permutation