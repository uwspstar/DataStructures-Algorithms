// 266. Palindrome Permutation
/*
 * Given a string s, return true if a permutation of the string could form a
 * palindrome.
 * 
 * Example 1: Input: s = "code" Output: false Example 2: Input: s = "aab"
 * Output: true Example 3: Input: s = "carerac" Output: true
 */
// s consists of only lowercase English letters.
// The given string could contain almost all the ASCII characters from 0 to 127.
// Thus, we iterate over all the characters from 0 to 127.

// traverse over the map created
// and find the number of characters with odd number of occurrences.
// If this count happens to exceed 1 at any step, // odd has to be in middle
// we conclude that a palindromic permutation isn't possible for the string ss.
// But, if we can reach the end of the string with count lesser than 2,
// we conclude that a palindromic permutation is possible for ss.
{
    var canPermutePalindrome = function (s) {
        let map = new Map();
        let count = 0;

        for (let i = 0; i < s.length; i++) {
            let key = s[i];
            map.set(key, map.has(key) ? map.get(key) + 1 : 1);
        }

        for (let key of map.keys()) {
            count += map.get(key) % 2;
        }

        return count <= 1;
    };

}
// Palindrome Permutation II
// Longest Palindrome
