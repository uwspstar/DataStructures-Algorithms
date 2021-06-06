//216. Combination Sum III
/*
Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

Input: k = 3, n = 7 Output: [[1,2,4]]
Explanation:
1 + 2 + 4 = 7
There are no other valid combinations.
Example 2:

Input: k = 3, n = 9 Output: [[1,2,6],[1,3,5],[2,3,4]]
Explanation:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.

Input: k = 4, n = 1 Output: []
Explanation: There are no valid combinations. [1,2,1] is not valid because 1 is used twice.

Input: k = 3, n = 2 Output: []
Explanation: There are no valid combinations.

Input: k = 9, n = 45 Output: [[1,2,3,4,5,6,7,8,9]]
Explanation:
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45
       There are no other valid combinations.
*/


{
    var combinationSum3 = function (k, n) {
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let res = [];
        let path = [];
        let sum = 0;
        const backTracking = (k, n, idx, sum) => {
            if (path.length === k && sum === n) {
                res.push([...path]);
            } else {
                for (let i = idx; i <= nums.length; i++) {
                    path.push(i);
                    backTracking(k, n, i + 1, sum + i);
                    path.pop();
                }
            }
        }
        backTracking(k, n, 1, 0);
        return res;
    };
    //Combination Sum
}
//slow because of getSum
{
    /**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
    //本题就是在[1,2,3,4,5,6,7,8,9]这个集合中找到和为n的k个数的组合
    var combinationSum3 = function (k, n) {
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let res = [];
        let path = [];
        const getSum = arr => {
            return arr.reduce((a, b) => a + b, 0);
        }
        const backTracking = (k, n, idx) => {
            if (path.length === k && getSum(path) === n) {
                res.push([...path]);
            } else {
                for (let i = idx; i <= nums.length; i++) {
                    path.push(i);
                    backTracking(k, n, i + 1);
                    path.pop(i);
                }
            }
        }
        backTracking(k, n, 1);
        return res;
    };
    //Combination Sum
}