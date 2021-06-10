//340. Longest Substring with At Most K Distinct Characters
/*
Given a string s and an integer k, return the length of the *** longest substring of s that contains *** at most k distinct characters.

Input: s = "eceba", k = 2 Output: 3
Explanation: The substring is "ece" with length 3.
 
Input: s = "aa", k = 1 Output: 2
Explanation: The substring is "aa" with length 2.
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
//Longest Substring with At Most Two Distinct Characters
//Longest Repeating Character Replacement
//Subarrays with K Different Integers
//Max Consecutive Ones III

{   //Status: Time Limit Exceeded :  recalculate set size slow
    
    var lengthOfLongestSubstringKDistinct = function(s, k) {
        let n = s.length;
        if (n * k === 0 ) return 0;
        let set = new Set();
        let left = 0;
        let right = 0;
        let maxLen = 0;
        
        while (right < n) {
            let c = s[right];
            set.add(c);  
            while (set.size === k + 1) { // reset window
                left = left + 1;
                let tmpStr = s.substring(left, right + 1); 
                set = new Set(tmpStr);
            }
            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        }
        return maxLen; 
    };
}