// 120. Triangle
/*
Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

Example 1:

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
*/
{
    var minimumTotal = function (triangle) {
        let n = triangle.length;
        // dp[i][j] 表示从点 (i, j) 到底边的最小路径和。
        let dp = [...Array(n + 1)].map(x => Array(n + 1).fill(0));

        // 从三角形的最后一行开始递推。
        for (let i = n - 1; i >= 0; i--) {
            for (let j = 0; j <= i; j++) {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
            }
        }
        return dp[0][0];
    }
}
{
    
}