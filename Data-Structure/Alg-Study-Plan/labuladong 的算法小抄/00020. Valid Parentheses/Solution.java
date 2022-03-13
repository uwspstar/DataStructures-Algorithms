/*
基本思路
栈是一种先进后出的数据结构，处理括号问题的时候尤其有用。

遇到左括号就入栈，遇到右括号就去栈中寻找最近的左括号，看是否匹配。

详细题解：手把手解决三道括号相关的算法题

标签：栈，括号问题

解法代码
*/
class Solution {
    public boolean isValid(String str) {
        Stack<Character> left = new Stack<>();
        for (char c : str.toCharArray()) {
            if (c == '(' || c == '{' || c == '[')
                left.push(c);
            else // 字符 c 是右括号
                if (!left.isEmpty() && leftOf(c) == left.peek())
                    left.pop();
                else
                    // 和最近的左括号不匹配
                    return false;
        }
        // 是否所有的左括号都被匹配了
        return left.isEmpty();
    }

    char leftOf(char c) {
        if (c == '}') return '{';
        if (c == ')') return '(';
        return '[';
    }
}
/*
类似题目：

921. 使括号有效的最小添加（中等）
1541. 平衡括号串的最少插入（中等）
*/