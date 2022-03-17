// 856. Score of Parentheses
/*
Given a balanced parentheses string s, return the score of the string.

The score of a balanced parentheses string is based on the following rule:

"()" has score 1.
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.
 
Example 1:
Input: s = "()"
Output: 1
*/
{
    var scoreOfParentheses = function (s) {
        let ans = 0;
        let depth = 0
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                depth++;
            } else {
                depth--;
                if (s[i - 1] === '(') {
                    // ans = ans + (1 << depth);
                    ans = ans + (1 << depth);
                    //ans++;
                    //ans = ans << depth;
                }

            }
        }
        return ans;
    };
}
{
    /*  官方思路
        只有最内层的括号对，对结果有贡献；
        遍历原字符串s：
        当遇见(：深度d增加1;
        当第一次遇见)：记录结果res += 2 ^ (d - 1)，同时深度d减去1；
        当连续多次遇见)：不记录结果，只减深度d；
    */

    var scoreOfParentheses = function (s) {
        let d = 0;
        let res = 0;
        let c = 0;
        while (c < s.length) {
            if (s[c] === '(') {
                d += 1;
                c += 1;
            } else {
                res += (1 << (d - 1));
                while (c < s.length && s[c] === ')') {
                    d -= 1;
                    c += 1;
                }
            }
        }
        return res;
    };

    // https://leetcode-cn.com/problems/score-of-parentheses/solution/js-by-marswiz-bt6o/

}
{
    /* 
    构建一个栈
    如果遇到(就往栈里面添加
    如果遇到)就去寻找最近的左括号抵消，同时计算里面的分数
    拿(()(()))示例, 栈结构变化如下
      
    [(]                # 遇到 ( 往栈添加
    [(, (]             # 继续添加
    [(, 1]             # 遇到 ） 合成一个1
    [(, 1, (]          # 遇到 ( 往栈添加
    [(, 1, (, (]       # 继续添加
    [(, 1, (, 1]       # 遇到 ） 合成一个1
    [(, 1, 2]          # 遇到 ） ，结构就是（1）， 所以计算的话是 1 * 2
    [6]                # 遇到 ） ，结构是（1，2）， 所以计算的话是 （1 + 2） * 2
    */

    var scoreOfParentheses = function (S) {
        var stack = []
        for (var i = 0; i < S.length; i++) {
            if (S[i] === '(') stack.push('(')
            if (S[i] === ')') {
                if (stack[stack.length - 1] === '(') {
                    stack.pop()
                    stack.push(1)
                } else {
                    var a = stack.pop()
                    var temp = 0
                    while (a !== '(') {
                        temp += a
                        a = stack.pop()
                    }
                    stack.push(2 * temp)
                }
            }
        }
        var sum = 0
        stack.forEach(item => sum += item)
        return sum
    }

    // https://leetcode-cn.com/problems/score-of-parentheses/solution/kan-bu-dong-bie-ren-de-ti-jie-zi-ji-you-xie-liao-y/
}