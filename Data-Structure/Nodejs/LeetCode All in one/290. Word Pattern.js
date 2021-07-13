//290. Word Pattern
/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.



Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", s = "dog dog dog dog"
Output: false

*/
{
    var wordPattern = function (p, s) {
        let arr = s.split(' ');
        let p2s = {};
        let s2p = {};
        console.log(arr.length, p.length)

        if (p.length !== arr.length) return false;

        for (let i = 0; i < p.length; i++) {
            let x = p[i];
            let y = arr[i];
            console.log(x, y, p2s)
            if (p2s[x] && p2s[x] !== y) return false;
            if (s2p[y] && s2p[y] !== x) return false;
            p2s[x] = y;
            s2p[y] = x;
        }
        return true;
    };
}