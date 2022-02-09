//253. Meeting Rooms II
/*
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2

Example 2:
Input: intervals = [[7,10],[2,4]]
Output: 1
*/

const minMeetingRooms = arr => {
    if (arr === null) return arr;
    if (arr.length < 2) return 1;

    let list = [];

    for (let item of arr) {
        list.push([item[0], 1]);
        list.push([item[1], -1]);
    }

    list.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    })

    let count = 0;
    let res = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i][1] === 1) count++;
        else count--;
        res = Math.max(res, count);
    }
    return res;
}