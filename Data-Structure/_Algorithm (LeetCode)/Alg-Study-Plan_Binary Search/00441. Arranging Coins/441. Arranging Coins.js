// 441. Arranging Coins
/*
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

Example 1:
Input: n = 5 Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.


// These completed rows contain in total  1 + 2 + 3 + 4 +...+ k
// maximum k such that k * (k+1) / 2 <= N

*/
{
    var arrangeCoins = function (n) {
        // These completed rows contain in total  1 + 2 + 3 + 4 +...+ k
        // maximum k such that k(k+1) / 2 ≤N
        let left = 1, right = n;
        while (left <= right) {
            let k = parseInt(left + (right - left) / 2);
            let curr = k * (k + 1) / 2;
            if (curr === n) return k;
            if (n < curr) {
                right = k - 1;
            } else {
                left = k + 1;
            }
        }
        return right;
    };
    // Insert Delete GetRandom O(1) (M)
    // Random Pick with Blacklist (M)
    // Implement Rand10() Using Rand7() (H)
}