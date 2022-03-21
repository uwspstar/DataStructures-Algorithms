class Solution {
    public List<Integer> partitionLabels(String S) {
        int N = S.length();
        int[] last = new int[26];
        // 存放字母与它的最远位置
        for (int i = 0; i < N; ++i) {
            last[S.charAt(i) - 'a'] = i;
        }

        int j = 0, anchor = 0;
        List<Integer> ans = new ArrayList();

        for (int i = 0; i < N; ++i) {
            // 更新「已扫描的字符中最远的位置」
            j = Math.max(j, last[S.charAt(i) - 'a']);

            // 正好扫描到「已扫描的字符的最远位置」，到达切割点
            if (i == j) {
                // 切割点
                ans.add(i - anchor + 1);

                // 更新，下一个待切割的字符串的起始位置
                anchor = i + 1;
            }
        }

        return ans;
    }
}
// Time Complexity: O(N), where NN is the length of SS.
// Space Complexity: O(1) to keep data structure last of not more than 26
// characters