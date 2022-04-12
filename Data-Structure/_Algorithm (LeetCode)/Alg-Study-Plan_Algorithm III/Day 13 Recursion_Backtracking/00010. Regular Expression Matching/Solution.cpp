/*
基本思路 PS：这道题在《算法小抄》的第 155 页。

s 和 p 相互匹配的过程大致是，两个指针 i,j 分别在 s 和 p 上移动，如果最后两个指针都能移动到字符串的末尾，那么就匹配成功，反之则匹配失败。

正则表达算法问题只需要把住一个基本点：看 s[i]和 p[j]两个字符是否匹配，一切逻辑围绕匹配/不匹配两种情况展开即可。

动态规划算法的核心就是「状态」和「选择」，「状态」无非就是 i 和 j 两个指针的位置，「选择」就是模式串的 p[j]选择匹配几个字符。

dp 函数的定义如下：

若 dp(s,i,p,j)=true，则表示 s[i..]可以匹配 p[j..]；若 dp(s,i,p,j)=false，则表示 s[i..]无法匹配 p[j..]。

详细题解：东哥手写正则通配符算法，结构清晰，包教包会！

标签：动态规划，字符串，二维动态规划

解法代码 Copy
*/
class Solution
{
public:
    bool isMatch(string s, string p)
    {
        // 指针 i，j 从索引 0 开始移动
        return dp(s, 0, p, 0);
    }

    // 备忘录
    unordered_map<string, bool> memo;

    /* 计算 p[j..] 是否匹配 s[i..] */
    bool dp(string &s, int i, string &p, int j)
    {
        int m = s.size(), n = p.size();
        // base case
        if (j == n)
        {
            return i == m;
        }
        if (i == m)
        {
            if ((n - j) % 2 == 1)
            {
                return false;
            }
            for (; j + 1 < n; j += 2)
            {
                if (p[j + 1] != '*')
                {
                    return false;
                }
            }
            return true;
        }

        // 记录状态 (i, j)，消除重叠子问题
        string key = to_string(i) + "," + to_string(j);
        if (memo.count(key))
            return memo[key];

        bool res = false;

        if (s[i] == p[j] || p[j] == '.')
        {
            if (j < n - 1 && p[j + 1] == '*')
            {
                res = dp(s, i, p, j + 2) || dp(s, i + 1, p, j);
            }
            else
            {
                res = dp(s, i + 1, p, j + 1);
            }
        }
        else
        {
            if (j < n - 1 && p[j + 1] == '*')
            {
                res = dp(s, i, p, j + 2);
            }
            else
            {
                res = false;
            }
        }
        // 将当前结果记入备忘录
        memo[key] = res;

        return res;
    }
};