/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length < 2) return s.length;
    let maxLen = 0;
    let map = new Map();
    let fast = 0;
    let slow = 0;
    while (fast < s.length) {
        let key = s[fast];
        let value = map.get(key);
        if (value >= 0) {
            slow = value + 1;
            maxLen = Math.max(maxLen, fast - slow + 1)
        }
        map.set(key, fast);
        fast++;
    }
    return maxLen;
};

console.log(lengthOfLongestSubstring('au'));
console.log(lengthOfLongestSubstring('abcabc'));