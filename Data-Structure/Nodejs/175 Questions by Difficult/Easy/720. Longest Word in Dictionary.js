//720. Longest Word in Dictionary
/*
Given an array of strings words representing an English Dictionary, return the longest word in words that can be built one character at a time by other words in words.

If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.

 

Example 1:

Input: words = ["w","wo","wor","worl","world"]
Output: "world"
Explanation: The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
Example 2:

Input: words = ["a","banana","app","appl","ap","apply","apple"]
Output: "apple"
Explanation: Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
*/
//brute force
{
    //word < res same length order by smallest lexicographical order
    //return the longest word
    var longestWord = function (words) {
        let res = '';
        let set = new Set(words);
        for (let word of words) {
            if (word.length > res.length ||
                word.length == res.length && word < res) {
                let flag = true;
                for (let k = 1; k < word.length; ++k) {
                    if (!set.has(word.substring(0, k))) {
                        flag = false;
                        break;
                    }
                }
                if (flag) res = word;
            }
        }
        return res;
    };
    //Longest Word in Dictionary through Deleting
    //Implement Magic Dictionary
    //Longest Word With All Prefixes
}
{
    //tire
}