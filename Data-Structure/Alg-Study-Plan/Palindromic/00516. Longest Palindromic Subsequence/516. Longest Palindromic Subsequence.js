//516. Longest Palindromic Subsequence
var longestPalindromeSubseq = function (str) {

    let n = str.length;
    dp = [...new Array(n + 1)].map(e => new Array(n + 1).fill(-1));
    return dfs(0, n - 1);

    function dfs(s, e) {
        // console.log(s + '_' + e);
        if (s > e) return 0;
        if (s == e) return 1;
        if (dp[s][e] != -1) return dp[s][e];

        if (str.charAt(s) == str.charAt(e)) {
            return dp[s][e] = 2 + dfs(s + 1, e - 1);
        } else {
            return dp[s][e] = Math.max(dfs(s + 1, e), dfs(s, e - 1));
        }
    }
};