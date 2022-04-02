/*
基本思路
核心思路是以左括号为基准，通过维护对右括号的需求数 need，来计算最小的插入次数。

详细题解：手把手解决三道括号相关的算法题

标签：括号问题

解法代码
*/
class Solution {
    public int minAddToMakeValid(String s) {
        // res 记录插入次数
        int res = 0;
        // need 变量记录右括号的需求量
        int need = 0;

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                // 对右括号的需求 + 1
                need++;
            }

            if (s.charAt(i) == ')') {
                // 对右括号的需求 - 1
                need--;

                if (need == -1) {
                    need = 0;
                    // 需插入一个左括号
                    res++;
                }
            }
        }

        return res + need;
    }
}
/*
类似题目：

20. 有效的括号（简单）
1541. 平衡括号串的最少插入（中等）
*/