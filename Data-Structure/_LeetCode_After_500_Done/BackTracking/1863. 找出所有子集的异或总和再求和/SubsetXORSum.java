public class SubsetXORSum {

    public int subsetXORSum (int[] nums) {
        int[] res = {0}; // using it as global variable
        int N = nums.length;
        if (N == 0) return 0;

        dfs(N, res, nums, 0, 0);
        return res[0];
    }

    public void dfs(int N, int[] res, int[] nums, int idx, int val) {
        if (idx == N) {
            res[0] += val;
            return;
        }
         
        // 考虑选择当前数字
        dfs(N, res, nums, idx + 1, val ^ nums[idx]);
        // 考虑不选择当前数字
        dfs(N, res, nums, idx + 1, val);

    }

    public static void main(String[] args) {
        SubsetXORSum test = new SubsetXORSum();
        int[] n1 = {5,1,6};
        int[] n2 = {3,4,5,6,7,8};
        int a = test.subsetXORSum(n1);
        int b = test.subsetXORSum(n2);
        System.out.println(a);
        System.out.println(b);
    }
}
