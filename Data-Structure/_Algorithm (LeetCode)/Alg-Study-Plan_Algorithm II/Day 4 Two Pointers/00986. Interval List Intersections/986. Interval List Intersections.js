// 986. Interval List Intersections
/*
You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

Example 1:
Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
*/
// Merge Intervals : t: O(M + N) , s: O(M + N)
var intervalIntersection = function (A, B) {
    let i = 0, j = 0, ans = [];
    while (i < A.length && j < B.length) {
        let x1 = Math.max(A[i][0], B[j][0]);
        let x2 = Math.min(A[i][1], B[j][1]);

        if (x1 <= x2) {
            ans.push([x1, x2]);
        }

        // make sure the longer one still alive
        if (A[i][1] <= B[j][1]) {
            i++;
        }
        else {
            j++;
        }
    }
    return ans;
};