//46. Permutations
/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Input: nums = [1,2,3] Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Input: nums = [0,1] Output: [[0,1],[1,0]]
Input: nums = [1] Output: [[1]]
*/
class Solution {
    List<List<Integer>> res = new ArrayList();
    List<Integer> path = new LinkedList<>();

    public List<List<Integer>> permute(int[] nums) {
        backTracking(path, nums);
        return res;
    }

    private void backTracking(List<Integer> path, int[] nums) {

        if (path.size() == nums.length) {
            res.add(new LinkedList<Integer>(path));
            return;
        } else {
            for (int i = 0; i < nums.length; i++) {
                if (path.contains(nums[i]))
                    continue;

                path.add(nums[i]);
                backTracking(path, nums);
                path.remove(path.size() - 1);
            }
        }

    }
}
// Permutation Sequence