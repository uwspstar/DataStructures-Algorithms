// 90. Subsets II
/*
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
 * 
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * 
 * Input: nums = [1,2,2] Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 * Input: nums = [0] Output: [[],[0]]
 */
class Solution {
    List<List<Integer>> res = new ArrayList<>();

    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);
        for (int len = 0; len <= nums.length; len++) {
            backTracking(new ArrayList<Integer>(), len, 0, nums);
        }
        return res;
    }

    private void backTracking(ArrayList<Integer> path, int len, int startIndex, int[] nums) {
        if (path.size() == len) {
            res.add(new ArrayList(path));
            return;
        } else {
            for (int i = startIndex; i < nums.length; i++) {
                // i > startIndex means moved next level BFS
                if (i > startIndex && nums[i - 1] == nums[i])
                    continue; // DFS remove duplicate
                path.add(nums[i]);
                backTracking(path, len, i + 1, nums);
                path.remove(path.size() - 1);
            }
        }
    }
}
// Wiggle Sort
// Sort Array by Increasing Frequency
// Count Sorted Vowel Strings