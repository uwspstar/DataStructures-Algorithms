public class SubarraySum {

    public int subarraySum(int[] nums, int k) {
        int N = nums.length;
        int res = 0;
        int sum = 0;
        // map：前缀和 -> 该前缀和出现的次数
        HashMap<Integer, Integer> map = new HashMap<>();

        map.put(0, 1);// base case

        for (int i = 0; i < N; i++) {
            sum += nums[i];// 这是我们想找的前缀和 nums[0..i-1]
            int sum_k = sum - k; // 想找的前缀和 = k
            if (map.containsKey(sum_k))// 如果前面有这个前缀和
            {
                res += map.get(sum_k);// 则直接更新答案
            }

            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        return res;
    }
}