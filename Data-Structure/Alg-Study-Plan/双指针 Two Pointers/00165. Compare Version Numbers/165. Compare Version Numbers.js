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
        let arr1 = v1.split('.');
        let arr2 = v2.split('.');
        let M = arr1.length;
        let N = arr2.length;
        let i = 0;
        while (i < M || i < N) {
            let x = arr1[i] ? parseInt(arr1[i]) : 0;
            let y = arr2[i] ? parseInt(arr2[i]) : 0;
            if (x > y) return 1;
            if (x < y) return -1
            i++;
        }
        return 0
    };

    // Hexspeak (E)
    // Rearrange Spaces Between Words (E)
    // Delete the Middle Node of a Linked List (M)
}
{
    var compareVersion = function (version1, version2) {
        const arr1 = version1.split('.'), arr2 = version2.split('.');
        const len1 = arr1.length, len2 = arr2.length;
        let i = 0;
        while (i < len1 || i < len2) {
            let num1 = arr1[i] ? parseInt(arr1[i]) : 0; // parseInt
            let num2 = arr2[i] ? parseInt(arr2[i]) : 0;
            console.log('num1=', num1, 'num2', num2, 'i=', i, 'arr1[i] =', arr1[i], 'parseInt(arr1[i])=', parseInt(arr1[i]), 'arr2[i] =', arr2[i], 'parseInt(arr1[i])=', parseInt(arr2[i]));
            if (num1 > num2) return 1;
            else if (num1 < num2) return -1;
            i++;
        }
        return 0;
    };

    //https://leetcode-cn.com/problems/compare-version-numbers/solution/jsshua-suan-fa-165bi-jiao-ban-ben-hao-by-hxhn/

    console.log(compareVersion('1.01', '1.001'))

}
{
    var compareVersion = function (version1, version2) {
        const v1 = version1.split('.');
        const v2 = version2.split('.');

        for (let i = 0; i < v1.length || i < v2.length; i++) {

            let x = 0, y = 0;
            if (i < v1.length) {
                x = parseInt(v1[i]);
            }

            if (i < v2.length) {
                y = parseInt(v2[i]);
            }

            if (x > y) {
                return 1;
            }

            if (x < y) {
                return -1;
            }
        }
        return 0;
    };

    // https://leetcode-cn.com/problems/compare-version-numbers/solution/bi-jiao-ban-ben-hao-by-leetcode-solution-k6wi/

    console.log(compareVersion('1.01', '1.001'))
}
{
    var compareVersion = function (v1, v2) {
        const N = v1.length, M = v2.length;
        let i = 0, j = 0;

        while (i < N || j < M) {
            let x = 0;
            for (; i < N && v1[i] !== '.'; i++) {
                x = x * 10 + v1[i].charCodeAt() - '0'.charCodeAt();
            }
            ++i; // 跳过点号
            let y = 0;
            for (; j < M && v2.charAt(j) !== '.'; j++) {
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