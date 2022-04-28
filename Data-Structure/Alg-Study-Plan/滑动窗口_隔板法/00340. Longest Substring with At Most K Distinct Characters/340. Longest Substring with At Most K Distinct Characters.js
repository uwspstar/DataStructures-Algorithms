//340. Longest Substring with At Most K Distinct Characters
/*
Input: s = "eceba", k = 2
Output: 3
Explanation: The substring is "ece" with length 3.
*/
{
    var lengthOfLongestSubstringKDistinct = function (s, k) {
        let n = s.length;
        if (n * k === 0) return 0;
        let map = new Map();
        let left = 0;
        let res = 0;

        for (let i = 0; i < n; i++) {
            map.set(s[i], i);
            //shrink window
            if (map.size === k + 1) {
                let index = Math.min(...map.values());
                let key = [...map].find(([key, value]) => value === index)[0];
                map.delete(key);
                left = index + 1;
            }
            // fresh res
            res = Math.max(res, i - left + 1);
        }
        return res;
    };
    // Longest Repeating Character Replacement (M)
    // Subarrays with K Different Integers (H)
}