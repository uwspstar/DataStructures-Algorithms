// [Medium] 3. 无重复字符的最长子串
/*
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
输入: s = "abcabcbb" 输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
*/
{
    const lengthOfLongestSubstring = s => {
        let ans = 0;
        let window = [];
        for (let j = 0; j < s.length; j++) {
            while (window.indexOf(s[j]) >= 0) {
                window.shift();
            }
            window.push(s[j]);
            ans = Math.max(ans, window.length);
        }
        return ans;
    }
}