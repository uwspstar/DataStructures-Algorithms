// Given a string, find the length of the longest substring without repeating characters.
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

let s = "abcabcbb";
var lengthOfLongestSubstring = function(s) {
    
    if (s.length < 2) return s.length;

    let map = {};
    let start = 0; // index
    let maxLen = 0;
    let arr = s.split('');
    
    for (i = 0; i < arr.length; i++) {

        let current = map[arr[i]]; //value is index

        if (current != null && start <= current) {
            start = current + 1;
        } else {
          //i - start + 1 : the lenth of current substring
            maxLen = Math.max(maxLen, i - start + 1);
        }
        
        map[arr[i]] = i
    }
    
    return maxLen 
};

console.log(lengthOfLongestSubstring(s));
