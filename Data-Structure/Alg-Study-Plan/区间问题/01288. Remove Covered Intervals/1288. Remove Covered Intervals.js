// 1288. Remove Covered Intervals
/*
Given an array intervals where intervals[i] = [li, ri] represent the interval [li, ri), remove all intervals that are covered by another interval in the list.

The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <= d.

Return the number of remaining intervals.

Example 1:
Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.

Example 2:

Input: intervals = [[1,4],[2,3]]
Output: 1
*/
{
    var removeCoveredIntervals = function (arr) {
        if (arr.length === 1) return 1;
        arr.sort((a, b) => {
            if (a[0] === b[0]) {
                return b[1] - a[1]
            }
            return a[0] - b[0]
        })
        let res = [arr[0]];
        for (let i = 1; i < arr.length; i++) {
            let last = res[res.length - 1];
            let curr = arr[i];
            if (curr[0] >= last[0] && curr[1] <= last[1]) {
                continue;
            } else {
                res.push(curr);
            }
        }
        return res.length;
    };

    // Snakes and Ladders (M)
    // Describe the Painting (M)
    // Find All People With Secret (H)
}