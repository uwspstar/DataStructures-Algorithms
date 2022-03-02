// Recursion O(N) Space

class Solution {
    public void helper(char[] s, int left, int right) {
        if (left >= right)
            return;
        char tmp = s[left];
        s[left++] = s[right];
        s[right--] = tmp;
        helper(s, left, right);
    }

    public void reverseString(char[] s) {
        helper(s, 0, s.length - 1);
    }
}

//Time complexity : O(N) to swap N/2 element.
//Space complexity : O(1), it's a constant space solution.

class Solution2 {
    public void reverseString(char[] s) {
        int left = 0, right = s.length - 1;
        while (left < right) {
            char tmp = s[left];
            s[left++] = s[right];
            s[right--] = tmp;
        }
    }
}