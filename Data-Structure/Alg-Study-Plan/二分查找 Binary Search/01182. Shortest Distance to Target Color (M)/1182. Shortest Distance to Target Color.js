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

这个题目问的是对于每一个 query，query[0] 代表的是要找的某个 index，query[1] 代表的是要找的 color。也就是说我们每一个 query 要找的是离某个 index 最近的 color 在哪里。注意到 input 数组是无序的，但是因为找的元素是确定的，所以我们先用一个 hashmap 把 input 数组中的不同数字在 input 数组中出现的下标记录一下。注意到对于每个元素来说，我们记录 index 的 list 最后是有序的，所以我们二分的范围也就是在这些 list 中。

所以对于一个要找的元素来说，首先我们看一下他是否存在于hashmap，如果不存在直接就返回 -1 了。如果存在，我们就在 hashmap 中找到的 list 中做二分法。注意最后二分跳出的时候需要有特判，因为要找的某个 index 很有可能在list的左边或者右边。所以最后的特判是如果左指针/右指针在合法范围内，我们再去判断哪个指针离 index 更近。

时间O(nlogn)

空间O(n)
*/

{
    // https://leetcode.com/problems/shortest-distance-to-target-color/discuss/1274735/Binary-Search-JS-Solution

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