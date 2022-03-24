// 5. Longest Palindromic Substring

// Given a string s, find the longest palindromic substring in s. You may assume
// that the maximum length of s is 1000.

// Example:
// Input: "babad"
// Output: "bab"
{
    const palindrome = (s, l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++
        }
        return s.substring(l + 1, r);
    }
    const longestPalindrome = function (s) {
        let N = s.length;
        let res = '';
        for (let i = 0; i < N; i++) {
            let s1 = palindrome(s, i, i);
            let s2 = palindrome(s, i, i + 1);
            res = res.length > s1.length ? res : s1;
            res = res.length > s2.length ? res : s2;
        }
        return res;
    }

    // Shortest Palindrome (H)
    // Palindrome Pairs (H)
    // Palindromic Substrings (M)
}