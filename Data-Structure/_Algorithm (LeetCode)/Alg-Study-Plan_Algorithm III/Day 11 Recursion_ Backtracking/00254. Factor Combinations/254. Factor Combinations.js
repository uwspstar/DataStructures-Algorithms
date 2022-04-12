// 254. Factor Combinations
/*
Numbers can be regarded as the product of their factors.

For example, 8 = 2 x 2 x 2 = 2 x 4.
Given an integer n, return all possible combinations of its factors. You may return the answer in any order.

Note that the factors should be in the range [2, n - 1].

Example 1: Input: n = 1 Output: []
Example 2: Input: n = 12 Output: [[2,6],[3,4],[2,2,3]]
*/
{
    const backtrack = (n, res, temp, start) => {
        if (n === 1) {
            if (temp.length > 1) {
                res.push([...temp]);
                return;
            }
        }

        for (let i = start; i <= n; i++) {
            if (n % i === 0) {
                temp.push(i);
                backtrack(n / i, res, temp, i);
                temp.pop();
            }
        }
    }
    var getFactors = function (n) {
        const res = [];
        const temp = [];
        backtrack(n, res, temp, 2);
        return res;
    };
    // Optimal Account Balancing (H)
    // Rank Transform of a Matrix (H)
    // Maximum Product Difference Between Two Pairs (E)
}