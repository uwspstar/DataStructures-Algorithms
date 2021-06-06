//438. Find All Anagrams in a String
/*
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/
{
    //usually could be solved by sliding window approach in a linear time.
    //s and p consist of lowercase English letters.
    //Hashmap is quite complex structure, with known performance issues in Java. Let's implement approach 1 using 26-elements array instead of hashmap:
    //26 letter with [0~25]
    //首先，计算字符串p中各个元素出现的次数，由于字符串只包含小写英文字母，所以可以用数组来记录每个元素出的次数
    var findAnagrams = function (s, p) {

        const map = new Array(26).fill(0);

        for (let i = 0; i < p.length; i++) {
            map[p[i].charCodeAt() - 97]++;
        }

        let j = 0;
        const res = [];

        for (let i = 0; i < s.length; i++) {
            const c = s[i].charCodeAt() - 97;
            map[c]--;
            while (map[c] < 0) {
                const c2 = s[j++].charCodeAt() - 97;
                map[c2]++;
            }
            if (i - j + 1 === p.length) res.push(j);
        }

        return res;
    };

    //Employee Importance
    //Design HashSet
    //Find Smallest Common Element in All Rows

}