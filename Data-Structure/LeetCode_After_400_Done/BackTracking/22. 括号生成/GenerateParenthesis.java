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

import java.util.*;

class GenerateParenthesis {

    public List<String> generateParenthesis (int n) {
            List<String> ans = new ArrayList();
            bfs(n, n, ans, "");
            return ans;
    }

    public List<String> bfs (int left, int right, List<String> ans, String curr) {
        if (left == 0 && right == 0) {
            ans.add(curr);
            return ans;
        }

        if (left > 0) {
            bfs(left - 1, right, ans, curr+"(");
        }

        if (right > left) {
            bfs(left, right - 1, ans, curr+")");
        }

        return ans;
    }

    // Output : [((())), (()()), (())(), ()(()), ()()()]
    public static void main (String[] args) {
        GenerateParenthesis test = new GenerateParenthesis();
        int n = 3;
        System.out.println(test.generateParenthesis(n));
    }
}