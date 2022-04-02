// 滑动窗口

// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb" Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb" Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew" Output: 3
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
    // 76.最小覆盖子串（困难）
    // 567.字符串的排列（中等）
    // 438.找到字符串中所有字母异位词（中等）
}
{
    var lengthOfLongestSubstringKDistinct = function (s, k) {
        let N = s.length;
        let fast = 0, slow = 0, ans = 0;
        let map = new Map();
        while (fast < N) {
            let val = map.get(s[fast]);
            if (val >= slow) {
                slow = val + 1;
            }
            ans = Math.max(ans, fast - slow + 1);
            map.set(s[fast], fast);
            fast++;
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
            map.set(curr, (map.get(curr) || 0) + 1); // keep add window size

            while (map.size > k) { // shrink window when map size = k 
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
{
    // https://leetcode.com/problems/longest-substring-without-repeating-characters/
    // Array.prototype.slice()
    // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

    var lengthOfLongestSubstring = function (s) {
        if (s.length < 2) return s.length;
        let arr = Array(128);
        let ans = 0, fast = 0, slow = 0;
        while (fast < s.length) {
            let ch = s[fast];
            let idx = arr[ch.charCodeAt(0)];
            if (idx >= slow) {
                // console.log('arr=', arr)
                slow = idx + 1;
            }
            ans = Math.max(ans, fast - slow + 1);
            arr[ch.charCodeAt(0)] = fast;
            fast++;
        }
        return ans;
    };

    // Subarrays with K Different Integers (H)
    // Maximum Erasure Value (M)
    // Number of Equal Count Substrings (M)
}
