//253. Meeting Rooms II
/*
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

Example 1: Input: intervals = [[0,30],[5,10],[15,20]] Output: 2
Example 2: Input: intervals = [[7,10],[2,4]] Output: 1
*/

{
    var minMeetingRooms = function (intervals) {
        //[0,30],[5,10],[15,20]]
        //0 ---------------------------30
        //    5----10
        //              15-----20
        let arr = [];
        let overlap = 0;
        let currNeed = 0

        for (let i = 0; i < intervals.length; i++) {
            arr.push([intervals[i][0], 1]);
            arr.push([intervals[i][1], -1]);
        }
        // end first, then start
        const sorted = (a, b) => {
            if (a[0] === b[0]) return a[1] - b[1];
            else return a[0] - b[0];
        }

        arr.sort(sorted);

        for (let i = 0; i < arr.length; i++) {
            currNeed = currNeed + arr[i][1];
            overlap = Math.max(overlap, currNeed);
        }
        return overlap;
    };
}
/*
Minimum Number of Arrows to Burst Balloons
Car Pooling
*/