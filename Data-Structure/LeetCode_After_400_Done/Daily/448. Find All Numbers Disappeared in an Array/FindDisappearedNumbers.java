import java.util.*;

// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// O(N) / O(1)

public class FindDisappearedNumbers {
    public static List<Integer> findDisappearedNumbers(int[] nums) {
        List<Integer> res = new LinkedList<Integer>();
        int N = nums.length;

        for (int i = 0; i < N; i++) {

            // Treat the value as the new index
            // [4,3,2,7,8,2,3,1]
            int newIndex = Math.abs(nums[i]) - 1;
            System.out.println("nums[i] = " + nums[i]);
            System.out.println("newIndex = " + newIndex);
            // Check the magnitude of value at this new index
            // If the magnitude is positive, make it negative
            // thus indicating that the number nums[i] has
            // appeared or has been visited.
            if (nums[newIndex] > 0) {
                nums[newIndex] *= -1;
            }
            System.out.println("nums[newIndex] = " + nums[newIndex]);
        }

        // Iterate over the numbers from 1 to N and add all those
        // that have positive magnitude in the array
        for (int i = 1; i <= nums.length; i++) {
            System.out.println("nums[i - 1] = " + nums[i - 1]);
            if (nums[i - 1] > 0) {
                res.add(i);
            }
        }

        return res;

    }

    public static void main(String[] args) {
        FindDisappearedNumbers.findDisappearedNumbers(new int[] {4,3,2,7,8,2,3,1});
    }
}