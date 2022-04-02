namespace Leetcode
{
    using System.Collections.Generic;

    public class TwoSum
    {
        public int[] twoSum(int[] nums, int target)
        {
            var dic = new Dictionary<int, int>();
            var N = nums.Length;
            for (int i = 0; i < N; i++)
            {
                var key = target - nums[i];
                if (dic.ContainsKey(key))
                {
                    return new int[] { dic[key], i };
                }
                dic[nums[i]] = i;
            }
            return new int[] { };
        }
    }
}