// 22. Generate Parentheses
/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
*/

{
    // 1 <= n <= 8
    const dfs = (left, right, curr, res, n) => {
        // 因为每一次尝试，都使用新的字符串变量，所以无需回溯
        // 在递归终止的时候，直接把它添加到结果集即可，注意与「力扣」第 46 题、第 39 题区分  
        if (left === n && right === n) {
            res.push(curr);
            return;
        }

        if (left < n) {
            dfs(left + 1, right, curr + '(', res, n);
        }

        if (left > right && right < n) {
            dfs(left, right + 1, curr + ')', res, n);
        }
    }

    var generateParenthesis = function (n) {
        const res = [];
        dfs(0, 0, '', res, n);
        return res;
    };

    // Check if a Parentheses String Can Be Valid (M)
}