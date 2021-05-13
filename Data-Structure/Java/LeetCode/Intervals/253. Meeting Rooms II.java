//253. Meeting Rooms II
/*
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

Example 1: Input: intervals = [[0,30],[5,10],[15,20]] Output: 2
Example 2: Input: intervals = [[7,10],[2,4]] Output: 1
*/
class Solution {
    public int minMeetingRooms(int[][] intervals) {
        int len = intervals.length;
        int[] starts = new int[len];
        int[] ends = new int[len];
        for (int i = 0; i < len; i++) {
            starts[i] = intervals[i][0];
            ends[i] = intervals[i][1];
        }

        Arrays.sort(starts);
        Arrays.sort(ends);

        int rooms = 0;
        int end = 0;

        for (int i = 0; i < starts.length; i++) {
            if (starts[i] < ends[end]) {
                rooms++;
            } else {
                end++;
            }
        }

        return rooms;
    }
}
/*
 * Minimum Number of Arrows to Burst Balloons Car Pooling
 */