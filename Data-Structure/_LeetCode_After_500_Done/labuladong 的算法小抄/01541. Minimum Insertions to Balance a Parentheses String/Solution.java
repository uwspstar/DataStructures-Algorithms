/*
基本思路
遍历字符串，通过一个 need 变量记录对右括号的需求数，根据 need 的变化来判断是否需要插入。

类似 921. 使括号有效的最少添加，当 need == -1 时，意味着我们遇到一个多余的右括号，显然需要插入一个左括号。

另外，当遇到左括号时，若对右括号的需求量为奇数，需要插入 1 个右括号，因为一个左括号需要两个右括号嘛，右括号的需求必须是偶数，这一点也是本题的难点。

详细题解：手把手解决三道括号相关的算法题

标签：括号问题

解法代码
*/
class Solution {
    public int minInsertions(String s) {
        int res = 0, need = 0;

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                need += 2;
                if (need % 2 == 1) {
                    res++;
                    need--;
                }
            }

            if (s.charAt(i) == ')') {
                need--;
                if (need == -1) {
                    res++; // need a (
                    need = 1;
                }
            }
        }

        return res + need;
    }
}
/*
类似题目：

20. 有效的括号（简单）
921. 使括号有效的最小添加（中等）
*/