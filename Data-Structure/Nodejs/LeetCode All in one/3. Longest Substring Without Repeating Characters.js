//3. Longest Substring Without Repeating Characters
/*Given a string s, find the length of the longest substring without repeating characters.

 

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
Example 4:

Input: s = ""
Output: 0
*/
{
    // two pointers
    // sliding windows
    // hash map
    var lengthOfLongestSubstring = function (s) {
        if (s.length < 2) return s.length;
        let maxLen = 0;
        let map = new Map();
        let fast = 0;
        let slow = 0;
        //"a b c a b c b b"
        //   s->
        //   v     f
        while (fast < s.length) {
            let key = s[fast];
            let val = map.get(key);
            if (val >= slow) {
                slow = val + 1;
            }
            maxLen = Math.max(maxLen, fast - slow + 1);
            map.set(key, fast)
            fast++;
        }

        return maxLen;
    };
    //Longest Substring with At Most Two Distinct Characters
    //Subarrays with K Different Integers
    //Maximum Erasure Value
}