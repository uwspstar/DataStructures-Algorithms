//3. Longest Substring Without Repeating Characters
/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
// sliding window
{
    var lengthOfLongestSubstring = function (s) {
        let ans = 0;
        let window = [];

        for (let i = 0; i < s.length; i++) {
            let curr = s[i];
            while (window.indexOf(curr) >= 0) {
                window.shift(); // loop remove the current found
            }
            window.push(curr);
            ans = Math.max(ans, window.length);
        }
        return ans;
    }
}
{
    var lengthOfLongestSubstringKDistinct = function (s, k) {
        let map = new Map();
        let left = 0;
        let res = 0;
        //for (let right = 0; right < s.length; right++)
        for (let i = 0; i < s.length; i++) {
            let curr = s[i];
            map.set(curr, (map.get(curr) || 0) + 1);

            while (map.size > k) {
                let c = s[left];
                map.set(c, map.get(c) - 1);
                if (map.get(c) === 0) {
                    map.delete(c);
                }
                left++;
            }
            res = Math.max(res, i - left + 1)
        }
    }
}