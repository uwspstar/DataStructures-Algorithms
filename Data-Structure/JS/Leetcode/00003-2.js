/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/

longest Substring Without Repeating Characters
Example 1: Input: "abcabcbb" Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2: Input: "bbbbb" Output: 1 Explanation: The answer is "b", with the length of 1.

Example 3: Input: "pwwkew" Output: 3 Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// slide window problem
/*
a b c a b c b b
      i
  j
*/
//no repeat
const lengthOfLongestSubstring = function (str) {
    if (str.length < 2) return str.length;
    let mySet = new Set();
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (mySet.has(str[i])) {
            mySet.delete(str[i]); // set has order; iterate through the elements of a set in insertion order.
            mySet.add(str[i]);
        } else {
            mySet.add(str[i]);
            result = Math.max(mySet.size, result);
        }
    }
    return result;
};
console.log(lengthOfLongestSubstring("bcbdc")); //3
console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbb")); //1
console.log(lengthOfLongestSubstring("bbcd")); //2
//"abcabcbb"
//a ab abc abca

