// 1894. Find the Student that Will Replace the Chalk
class Solution {
    public int chalkReplacer(int[] chalk, int k) {
        long sum = 0;
        for (int c : chalk) {
            sum += c;
        }
        k = (int) ((long) k % sum);
        int count = 0;
        while (k > 0) {
            k -= chalk[count++];
        }
        return k == 0 ? count : count - 1;
    }
}
// H-Index II (M)
// Minimum Operations to Make a Subsequence (H)
// Minimum Swaps to Group All 1's Together II (M)