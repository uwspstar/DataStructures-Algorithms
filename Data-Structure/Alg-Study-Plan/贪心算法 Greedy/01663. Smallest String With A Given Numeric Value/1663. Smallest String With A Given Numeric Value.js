// 1663. Smallest String With A Given Numeric Value
/*
The numeric value of a lowercase character is defined as its position (1-indexed) in the alphabet, so the numeric value of a is 1, the numeric value of b is 2, the numeric value of c is 3, and so on.

The numeric value of a string consisting of lowercase characters is defined as the sum of its characters' numeric values. For example, the numeric value of the string "abe" is equal to 1 + 2 + 5 = 8.

You are given two integers n and k. Return the lexicographically smallest string with length equal to n and numeric value equal to k.

Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order, that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.

Example 1:

Input: n = 3, k = 27
Output: "aay"
Explanation: The numeric value of the string is 1 + 1 + 25 = 27, and it is the smallest string with such a value and length equal to 3.
*/

//Greedy
{
    var getSmallestString = function (n, k) {
        k = k - n; // all n position is 'a'
        let res = Array(n).fill('a')
        // 贪心地从后replace
        for (let i = n - 1; i >= 0; i--) {
            let cur = Math.min(25, k); // if k > 25
            k = k - cur;
            res[i] = String.fromCharCode(97 + cur);
        }
        return res.join('');
    }
    // Shortest Palindrome (H)
    // Largest Perimeter Triangle (E)
    // Longest Palindrome by Concatenating Two Letter Words (M)
}
{
    //You are given two integers n and k. 
    //Return the lexicographically smallest string 
    //with length equal to n and numeric value equal to k. 

    var getSmallestString = function (n, k) {
        // let from all n position is 'a' important !!!
        k = k - n;
        let res = '';
        let cur = 0;
        // 贪心地从后拼接字符
        for (let i = n - 1; i >= 0; i--) {
            cur = Math.min(25, k); // if k > 25
            k = k - cur;
            res = String.fromCharCode(97 + cur) + res;

        }
        return res;
    }


    // https://leetcode-cn.com/problems/smallest-string-with-a-given-numeric-value/solution/js-xian-she-zhi-nge-azai-cong-hou-gou-za-glii/
}