//5809. Unique Length-3 Palindromic Subsequences
/*
Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

A palindrome is a string that reads the same forwards and backwards.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
 

Example 1:

Input: s = "aabca"
Output: 3
Explanation: The 3 palindromic subsequences of length 3 are:
- "aba" (subsequence of "aabca")
- "aaa" (subsequence of "aabca")
- "aca" (subsequence of "aabca")
Example 2:

Input: s = "adc"
Output: 0
Explanation: There are no palindromic subsequences of length 3 in "adc".
Example 3:

Input: s = "bbcbaba"
Output: 4
Explanation: The 4 palindromic subsequences of length 3 are:
- "bbb" (subsequence of "bbcbaba")
- "bcb" (subsequence of "bbcbaba")
- "bab" (subsequence of "bbcbaba")
- "aba" (subsequence of "bbcbaba")
*/
{
    //wrong
    var countPalindromicSubsequence = function (s) {
        let set = new Set();
        let arr = s.split('');
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                for (let x = j + 1; x < arr.length; x++) {
                    if (arr[i] === arr[x] || (arr[i] === arr[j] && arr[i] === arr[x])) {
                        let tmp = []
                        tmp.push(arr[i], arr[j], arr[x]);
                        tmp.sort();
                        tmp.join('');

                        set.add(tmp.join(''));
                        console.log(set)
                    }
                }
            }
        }
        return set.size;
    };
}
{
    //wrong
    var countPalindromicSubsequence = function (s) {
        let map = new Map();
        for (let c of s) {
            if (map.has(c)) {
                map.set(c, map.get(c) + 1)
            } else {
                map.set(c, 1)
            }
        }
        let res = 0;
        //aabca
        //{ a : 3, b: 1, c: 1}
        //bbcbaba
        //{b: 4 , a:2, c: 1}
        let arr = map.keys();

        for (let k of map.keys()) {
            if (map.get(k) >= 2) {
                if (arr.length === 1) return 1;
                res = Math.max(res, map.get(k));
            }
        }
        return res;

    };
}
{
    //wrong
    var countPalindromicSubsequence = function (s) {
        let set = new Set();
        let arr = s.split('');
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                for (let x = j + 1; x < arr.length; x++) {
                    if (arr[i] === arr[j] || arr[x] === arr[j] || arr[i] === arr[x]) {
                        let tmp = [];
                        tmp.push(arr[i], arr[j], arr[x]);
                        tmp.sort();
                        set.add([...tmp])
                    }
                }
            }
        }
        return set.size;
    };
}