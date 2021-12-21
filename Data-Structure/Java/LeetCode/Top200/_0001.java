import java.util.*;

public class _0001 {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap();
        for (int i = 0; i < nums.length; i++) {
            int key = target - nums[i];
            if (map.contansKey(key)) {
                return new int[] {map.get(key), i};
            }
            map.put(nums[i], i);
        }
        return new int[] {-1, -1};
    }

    public static void main (String[] args) {
        twoSum(new int[] {1, 3, 2, 4, 6, 8}, 6);
    }
}