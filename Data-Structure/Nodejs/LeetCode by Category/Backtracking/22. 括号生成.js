/*
https://leetcode-cn.com/problems/generate-parentheses/

数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

有效括号组合需满足：左括号必须以正确的顺序闭合。

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]
*/
{
    var generateParenthesis = function (n) {
        if (n === 1) return ["()"];

        let res = [];

        const dfs = (curStr, left, right) => {
            // 因为每一次尝试，都使用新的字符串变量，所以无需回溯
            // 在递归终止的时候，直接把它添加到结果集即可，注意与「力扣」第 46 题、第 39 题区分
            console.log('curStr=', curStr, 'left=', left, 'right =', right);

            if (left === 0 && right === 0) {
                console.log('<<<<>>>>');
                res.push(curStr);
                return;
            }
            // 剪枝（如图，左括号可以使用的个数严格大于右括号可以使用的个数，才剪枝，注意这个细节）
            if (left > right) return;
            
            if (left > 0) {
                console.log('----->>>>');
                dfs(curStr + "(", left - 1, right);
            }

            if (right > 0) {
                console.log('<<<<-----');
                dfs(curStr + ")", left, right - 1);
            }
        }

        dfs("", n, n);

        return res;
    };

    console.log(generateParenthesis(3));
}

/*
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

=====================================================
curStr=  left= 3 right = 3
curStr= ( left= 2 right = 3
curStr= (( left= 1 right = 3
curStr= ((( left= 0 right = 3
curStr= ((() left= 0 right = 2
curStr= ((()) left= 0 right = 1
curStr= ((())) left= 0 right = 0

curStr= (() left= 1 right = 2
curStr= (()( left= 0 right = 2
curStr= (()() left= 0 right = 1
curStr= (()()) left= 0 right = 0

curStr= (()) left= 1 right = 1
curStr= (())( left= 0 right = 1
curStr= (())() left= 0 right = 0
curStr= (())) left= 1 right = 0
curStr= () left= 2 right = 2
curStr= ()( left= 1 right = 2
curStr= ()(( left= 0 right = 2
curStr= ()(() left= 0 right = 1
curStr= ()(()) left= 0 right = 0
curStr= ()() left= 1 right = 1
curStr= ()()( left= 0 right = 1
curStr= ()()() left= 0 right = 0
curStr= ()()) left= 1 right = 0
curStr= ()) left= 2 right = 1
curStr= ) left= 3 right = 2

[ '((()))', '(()())', '(())()', '()(())', '()()()' ]

*/