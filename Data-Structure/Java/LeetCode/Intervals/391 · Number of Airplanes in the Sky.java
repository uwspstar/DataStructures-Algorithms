/*
 * 391 · Number of Airplanes in the Sky Algorithms Medium Accepted Rate 36%
 * 
 * DescriptionSolutionNotesDiscussLeaderboard Description Given an list
 * interval, which are taking off and landing time of the flight. How many
 * airplanes are there at most at the same time in the sky?
 * 
 * If landing and taking off of different planes happen at the same time, we
 * consider landing should happen at first.
 * 
 * Example Example 1:
 * 
 * Input: [(1, 10), (2, 3), (5, 8), (4, 7)] Output: 3 Explanation: The first
 * airplane takes off at 1 and lands at 10. The second airplane takes off at 2
 * and lands at 3. The third airplane takes off at 5 and lands at 8. The forth
 * airplane takes off at 4 and lands at 7. During 5 to 6, there are three
 * airplanes in the sky. Example 2:
 * 
 * Input: [(1, 2), (2, 3), (3, 4)] Output: 1 Explanation: Landing happen before
 * taking off.
 */
public class Solution {
    /**
     * @param airplanes: An interval array
     * @return: Count of airplanes are in the sky.
     */
    public int countOfAirplanes(List<Interval> airplanes) {
        List<Point> list = new ArrayList<>(airplanes.size() * 2);

        for (Interval i : airplanes) {
            list.add(new Point(i.start, 1));
            list.add(new Point(i.end, -1));
        }

        Collections.sort(list, (Point p1, Point p2) -> {
            if (p1.T == p2.T)
                return p1.S - p2.S;
            return p1.T - p2.T;
        });

        int count = 0;
        int ans = 0;
        for (Point p : list) {
            if (p.S == 1)
                count++;
            else
                count--;
            ans = Math.max(ans, count);
        }

        return ans;
    }
}