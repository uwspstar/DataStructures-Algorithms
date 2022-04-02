// 1182. Shortest Distance to Target Color
/*
You are given an array colors, in which there are three colors: 1, 2 and 3.

You are also given some queries. Each query consists of two integers i and c, return the shortest distance between the given index i and the target color c. If there is no solution return -1.

Example 1:

Input: colors = [1,1,2,1,3,2,2,3,3], queries = [[1,3],[2,2],[6,1]]
Output: [3,0,3]
Explanation: 
The nearest 3 from index 1 is at index 4 (3 steps away).
The nearest 2 from index 2 is at index 2 itself (0 steps away).
The nearest 1 from index 6 is at index 3 (3 steps away).
Example 2:

Input: colors = [1,2], queries = [[0,3]]
Output: [-1]
Explanation: There is no 3 in the array.
*/
{
    // Map(3) { 1 => [ 0, 1, 3 ], 2 => [ 2, 5, 6 ], 3 => [ 4, 7, 8 ] }
    // dis from 1 to [ 4, 7, 8 ] -> [3, 6, 7]
    // dis from 2 to [2, 5, 6] -> [0, 3, 4]
    // dis from 6 to [0, 1, 3] -> [6, 5, 3]
    var shortestDistanceColor = function (colors, queries) {
        const res = [];
        let n = colors.length;
        const hashMap = new Map();
        for (let i = 0; i < n; i++) {
            if (!hashMap.has(colors[i]))
                hashMap.set(colors[i], []);
            hashMap.get(colors[i]).push(i);

        }
        //console.log(hashMap);

        for (let [indexCheck, currentColor] of queries) {
            let indexOfColor = hashMap.get(currentColor);
            let min = Number.MAX_VALUE;
            if (indexOfColor && indexCheck < n) {
                for (let x of indexOfColor) {
                    let debug = Math.abs(indexCheck - x);
                    min = Math.min(min, debug);
                    // console.log(indexCheck, '-', x, ' debug=', debug, 'min=',min,'x=',x, 'currentColor=', currentColor, 'indexOfColor=', indexOfColor);

                }
                res.push(min);
            } else {
                res.push(-1);
            }
        }
        return res;
    };
    // Maximum Width Ramp (M)
    // Find the Kth Smallest Sum of a Matrix With Sorted Rows (H)
    // Minimum Speed to Arrive on Time (M)
}