//696. Count Binary Substrings
/*
Give a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.

Example 1:

Input: s = "00110011"
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
Notice that some of these substrings repeat and are counted the number of times they occur.
Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
Example 2:

Input: s = "10101"
Output: 4
Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
*/
//我们可以将字符串 ss 按照 00 和 11 的连续段分组，
//存在 counts 数组中，例如 s = 00111011，
//可以得到这样的 counts 数组：counts={2,3,1,2}。

var countBinarySubstrings = function(s) {
    const counts = [];
    let p = 0;
    let N = s.length;
    while (p < N) {
        const c = s[p];    
        let count = 0;
        while (p < N && s[p] === c) {
            p++;
            count++;
        }
        counts.push(count);
    }
    
    let ans = 0; 
    for (let i = 1; i < counts.length; ++i) {
        ans += Math.min(counts[i], counts[i - 1]);
    }
    return ans;
};
