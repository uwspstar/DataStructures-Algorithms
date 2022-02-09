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
        let right = 0
        let maxLen = 0;
        //s = "eceba", k = 2 , out = 3 , "ece" 
        while (right < n) {
            let c = s[right];
            map.set(c, right);

            if (map.size === k + 1) { //reset window
                let index = Math.min(...map.values());
                let key = [...map].find(([key, value]) => value === index)[0];
                map.delete(key);
                left = index + 1;
            }
            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        }
        return maxLen;
    };
}
{
    var lengthOfLongestSubstringKDistinct = function (s, k) {
        let n = s.length;
        if (n * k === 0) return 0;

        let map = new Map();
        let left = 0;
        let right = 0
        let maxLen = 0;
        //s = "eceba", k = 2 , out = 3 , "ece" 
        while (right < n) {
            let c = s[right];
            map.set(c, right);

            if (map.size === k + 1) { //reset window
                let index = Math.min(...map.values());
                let key = [...map].find(([key, value]) => value === index)[0];
                map.delete(key);
                left = index + 1;
            }
            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        }
        return maxLen;
    };
}