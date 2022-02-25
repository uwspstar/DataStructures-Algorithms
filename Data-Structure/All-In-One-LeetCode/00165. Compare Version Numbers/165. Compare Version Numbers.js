//165. Compare Version Numbers
/*
Example 1:

Input: version1 = "1.01", version2 = "1.001"
Output: 0
Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".
Example 2:

Input: version1 = "1.0", version2 = "1.0.0"
Output: 0
Explanation: version1 does not specify revision 2, which means it is treated as "0".
*/
{
    var compareVersion = function (v1, v2) {
        const N = v1.length, M = v2.length;
        let i = 0, j = 0;

        while (i < N || j < M) {
            let x = 0;
            for (; i < N && v1[i] !== '.'; ++i) {
                x = x * 10 + v1[i].charCodeAt() - '0'.charCodeAt();
            }
            ++i; // 跳过点号
            let y = 0;
            for (; j < M && v2.charAt(j) !== '.'; ++j) {
                y = y * 10 + v2[j].charCodeAt() - '0'.charCodeAt();
            }
            ++j; // 跳过点号
            if (x !== y) {
                return x > y ? 1 : -1;
            }
        }
        return 0;
    };
}