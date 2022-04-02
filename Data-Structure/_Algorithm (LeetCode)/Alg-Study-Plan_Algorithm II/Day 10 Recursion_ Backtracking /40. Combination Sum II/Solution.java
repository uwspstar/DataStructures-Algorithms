class Solution {
    public List<List<Integer>> combinationSum2(int[] nums, int target) {
        List<List<Integer>> res = new ArrayList<>();
        LinkedList<Integer> path = new LinkedList<>();
        Arrays.sort(nums);
        this.backtrack(nums, path, target, 0, res);
        return res;
    }

    private void backtrack(int[] nums,
            LinkedList<Integer> path,
            Integer remain,
            Integer curr,
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