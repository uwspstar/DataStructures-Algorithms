import java.util.*;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>(); // we need to use this Map<Integer,Integer>
        for (int i = 0; i < nums.length; i++) {
            int key = target - nums[i];
            if (map.containsKey(key)) {
                return new int[] { map.get(key), i };
            } else {
                map.put(nums[i], i);
            }
        }
        return new int[] {};

    }
}