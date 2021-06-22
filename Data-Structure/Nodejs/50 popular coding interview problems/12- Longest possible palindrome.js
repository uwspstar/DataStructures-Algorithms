/*
Given a string str made of alphabetical letters only, create a function that returns the length of the longest palindrome string that can be made from letters of str

Example 1: Input: str = "abbaba" Output: 5
Explanation: one of the longest palindromes that can be made is "baaab", its length is 5

Example 2:
Input: str = "abbaaa" Output: 6
Explanation: one of the longest palindromes that can be made is "baaaab", its length is 6

Example 3: Input: str = "abbabab" Output: 7
Explanation: one of the longest palindromes that can be made is "bbaaabb", its length is 7

Example 4: Input: str = "abdccdceeebebc" Output: 13
Explanation: one of the longest palindromes that can be made is "eedccbabccdee", its length is 13
*/
//alphabetical letters only
//longest palindrome : can be made from letters of str
{
    // Time complexity: O(n)
    // Space complexity: O(1)

    function longestPalindrome(str) {

        let arr = [...Array(128)].map(x => 0);

        for (const s of str.split("")) {
            arr[s.charCodeAt(0)]++;
        }
        let length = 0;

        for (const chr of arr) {
            length += chr % 2 == 0 ? chr : chr - 1;
        }

        if (length < str.length) length++;
        
        return length;
    }
}