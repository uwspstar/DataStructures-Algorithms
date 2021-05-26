//739. Daily Temperatures
/*
Given a list of daily temperatures temperatures, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures temperatures = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/
class Solution {
    public int[] dailyTemperatures(int[] t) {
        int len = t.length;
        int[] res = new int[len];
        Deque<Integer> stack = new LinkedList<Integer>();
        for (int i = 0; i < len; i++) {
            int tp = t[i];
            while (!stack.isEmpty() && tp > t[stack.peek()]) {
                int last  = stack.pop();
                res[last] = i - last;
            }
            stack.push(i);
        }
        return res;
    }
}
//Flatten Nested List Iterator
//Basic Calculator IV
//Design File System