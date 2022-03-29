// 252. Meeting Rooms
/*
Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: true
*/
{
    var canAttendMeetings = function (arr) {
        if (arr.length === 1) return true;
        let N = arr.length;
        arr.sort((a, b) => a[0] - b[0]);
        for (let i = 1; i < N; i++) { // idx start 1
            if (arr[i][0] < arr[i - 1][1]) return false;
        }
        return true;
    };
    // Number of Atoms (H)
    // Minimum Deletions to Make Array Beautiful (M)
    // Reconstruct a 2-Row Binary Matrix (M)
}