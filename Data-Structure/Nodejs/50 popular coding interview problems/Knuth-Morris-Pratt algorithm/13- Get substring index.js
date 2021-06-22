/*
Given two strings str1 and str2, create a function that returns the first index where we can find str2 in str1. If we cannot find str2 in str1, the function must return -1.
Try to solve the problem without using the built-in .indexOf() method.

Example 1:
Input: str1 = "inside", str2 = "side" Output: 2
Explanation: we can find "side" in "inside" by starting from the index 2

Example 2:
Input: str1 = "inside", str2 = "in" Output: 0
Explanation: we can find "in" in "inside" by starting from the index 0

Example 3: Input: str1 = "inside", str2 = "code" Output: -1
Explanation: we can't find "code" in "inside"
*/
{
    // By using the Knuth-Morris-Pratt algorithm:

    // Time complexity: O(n)
    // Space complexity: O(m)

    function getLpsArr(str) {
        let lpsArr = [...Array(str.length)].map(x => 0);
        let length = 0;
        let i = 1;
        while (i < str.length) {
            if (str[i] === str[length])
                lpsArr[i++] = ++length;
            else if (length > 0)
                length = lpsArr[length - 1];
            else
                lpsArr[i++] = 0;
        }
        return lpsArr;
    }

    function substrIndex(str1, str2) {
        let n = str1.length;
        let m = str2.length;
        if (m > n)
            return -1;
        if (m == n)
            return str2 == str1 ? 0 : -1;
        if (str2 == "")
            return 0;
        let lpsArr = getLpsArr(str2);
        let j = 0;
        let i = 0;
        while (i < n && j < m) {
            if (str1[i] == str2[j]) {
                i++;
                j++;
            } else if (j > 0) {
                j = lpsArr[j - 1];
            } else {
                i++;
            }
        }
        return j < m ? -1 : i - j;
    }
}

{
    // Brute force solution:

    // Time complexity: O(nm)
    // Space complexity: O(1)

    function substrIndex(str1, str2) {
        let n = str1.length;
        let m = str2.length;
        for (let i = 0; i <= n - m; i++) {
            let found = true;
            for (let j = 0; j < m; j++) {
                if (str1[i + j] !== str2[j]) {
                    found = false;
                    break;
                }
            }
            if (found) return i;
        }
        return -1;
    }
}