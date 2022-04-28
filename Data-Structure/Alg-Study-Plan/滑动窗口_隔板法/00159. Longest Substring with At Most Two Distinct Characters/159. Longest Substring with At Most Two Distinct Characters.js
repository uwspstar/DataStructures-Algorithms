//159. Longest Substring with At Most Two Distinct Characters
/*
Given a string s, return the length of the longest substring that contains at most two distinct characters.

Example 1:
Input: s = "eceba"
Output: 3
Explanation: The substring is "ece" which its length is 3.

Example 2:
Input: s = "ccaabbb"
Output: 5
Explanation: The substring is "aabbb" which its length is 5.
*/
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let map = new Map();
    let left = 0;
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        map.set(curr, (map.get(curr) || 0) + 1);
        // shrink the window
        while (map.size > 2) {
            let c = s[left];
            // shrink the cnt
            map.set(c, map.get(c) - 1);
            if (map.get(c) === 0) map.delete(c);
            left++
        }
        res = Math.max(res, i - left + 1);
    }
    return res;
}