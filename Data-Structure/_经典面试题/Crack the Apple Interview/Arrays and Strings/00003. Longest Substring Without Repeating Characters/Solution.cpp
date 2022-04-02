/*
基本思路
PS：这道题在《算法小抄》 的第 85 页。

这题比其他滑动窗口的题目简单，连 need 和 valid 都不需要，而且更新窗口内数据也只需要简单的更新计数器 window 即可。

当 window[c] 值大于 1 时，说明窗口中存在重复字符，不符合条件，就该移动 left 缩小窗口了。

另外，要在收缩窗口完成后更新 res，因为窗口收缩的 while 条件是存在重复元素，换句话说收缩完成后一定保证窗口中没有重复。

详细题解：我写了首诗，把滑动窗口算法算法变成了默写题

标签：滑动窗口

解法代码
*/
class Solution {
    public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> window;

        int left = 0, right = 0;
        int res = 0; // 记录结果
        while (right < s.size()) {
            char c = s[right];
            right++;
            // 进行窗口内数据的一系列更新
            window[c]++;
            // 判断左侧窗口是否要收缩
            while (window[c] > 1) {
                char d = s[left];
                left++;
                // 进行窗口内数据的一系列更新
                window[d]--;
            }
            // 在这里更新答案
            res = max(res, right - left);
        }
        return res;
    }
};
/*
 * 类似题目：
 * 
 * 76.最小覆盖子串（困难）
 * 567.字符串的排列（中等）
 * 438.找到字符串中所有字母异位词（中等）
 */