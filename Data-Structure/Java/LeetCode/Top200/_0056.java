public class _0056 {// 56. Merge Intervals
    public static int[][] merge(int[][] intervals) {
        LinkedList<int[]> res = new LinkedList<>();
        Arrays.sort(intervals, (a, b) -> {
            return a[0] - b[0];
        });

        res.add(intervals[0]);
        int N = intervals.length;
        for (int i = 1; i < N; i++) {
            int[] curr = intervals[i];
            int[] last = res.getLast();
            if (last[1] >= curr[0]) {
                last[1] = Math.max(last[1], curr[1]);
            } else {
                res.add(curr);
            }
        }
        return res.toArray(new int[0][0]);
    }

    public static void main(String[] args) {

    }
}
