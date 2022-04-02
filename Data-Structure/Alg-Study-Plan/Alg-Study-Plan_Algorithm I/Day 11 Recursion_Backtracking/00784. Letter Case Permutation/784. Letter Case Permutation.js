// 784. Letter Case Permutation
/*
Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. Return the output in any order.

Example 1:

Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]
Example 2:

Input: s = "3z4"
Output: ["3z4","3Z4"]
*/
{
    var letterCasePermutation = function (s) {
        const ans = [], n = s.length;
        function dfs(i, tmp) {
            if (i === n) return ans.push(tmp);
            if (isNaN(s[i])) { //not a number
                dfs(i + 1, tmp + s[i].toLowerCase());
                dfs(i + 1, tmp + s[i].toUpperCase());
            } else {
                dfs(i + 1, tmp + s[i]);
            }
        }
        dfs(0, '');
        return ans;
    };

    //：https://leetcode-cn.com/problems/letter-case-permutation/solution/js-jian-dan-ming-liao-de-quan-pai-lie-by-grdy/
}