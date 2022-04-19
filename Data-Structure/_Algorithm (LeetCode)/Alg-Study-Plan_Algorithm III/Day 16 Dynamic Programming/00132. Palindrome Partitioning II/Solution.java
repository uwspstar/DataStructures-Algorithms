class Solution {

    private Integer memoCuts[];
    private Boolean memoPalindrome[][];

    public int minCut(String s) {
        memoCuts = new Integer[s.length()];
        memoPalindrome = new Boolean[s.length()][s.length()];
        return findMinimumCut(s, 0, s.length() - 1, s.length() - 1);
    }

    private int findMinimumCut(String s, int start, int end, int minimumCut) {
        // base case
        if (start == end || isPalindrome(s, start, end)) {
            return 0;
        }
        // check for results in memoCuts
        if (memoCuts[start] != null) {
            return memoCuts[start];
        }
        for (int currentEndIndex = start; currentEndIndex <= end; currentEndIndex++) {
            if (isPalindrome(s, start, currentEndIndex)) {
                minimumCut = Math
                    .min(minimumCut, 1 + findMinimumCut(s, currentEndIndex + 1, end, minimumCut));
            }
        }
        return memoCuts[start] = minimumCut;
    }

    private boolean isPalindrome(String s, int start, int end) {
        if (start >= end) {
            return true;
        }
        // check for results in memoPalindrome
        if (memoPalindrome[start][end] != null) {
            return memoPalindrome[start][end];
        }
        return memoPalindrome[start][end] = (s.charAt(start) == s.charAt(end))
            && isPalindrome(s, start + 1, end - 1);
    }
}