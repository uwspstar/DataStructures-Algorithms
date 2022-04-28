// 76. Minimum Window Substring (Hard)
/*
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The test cases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
*/
var minWindow = function (s, t) {

    const map = new Map();
    // 先统计T中的字符情况
    for (const char of t) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let cnt = map.size, right = 0, left = 0;
    const res = [-1, 0];
    // 移动滑动窗口，不断更改统计数据
    while (right < s.length) {
        let rChar = s[right];
        if (map.has(rChar)) {
            map.set(rChar, (map.get(rChar) - 1));
        }
        if (map.get(rChar) === 0) cnt--;
        // 若目前滑动窗口已包含T中全部字符，
        // 则尝试将l右移，在不影响结果的情况下获得最短子字符串
        while (cnt === 0) {
            // window shrink
            if (res[0] === -1 || right - left < res[1] - res[0]) {
                res[0] = left;
                res[1] = right;
            }
            let lChar = s[left];
            if (map.has(lChar)) map.set(lChar, (map.get(lChar) + 1));
            if (map.get(lChar) > 0) cnt++;
            left++;
        }
        right++;
    }
    return res[0] === -1 ? "" : s.slice(res[0], res[1] + 1);
};