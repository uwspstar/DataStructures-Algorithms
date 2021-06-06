//252. Meeting Rooms
/*
Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

Input: intervals = [[0,30],[5,10],[15,20]] Output: false
Input: intervals = [[7,10],[2,4]] Output: true
*/
{
    var canAttendMeetings = function (intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < intervals[i - 1][1]) {
                return false;
            }
        }
        return true;
    };
    //The k Strongest Values in an Array
    //Widest Vertical Area Between Two Points Containing No Points
    //Minimize Maximum Pair Sum in Array
}