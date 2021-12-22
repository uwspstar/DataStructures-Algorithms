import java.util.*;

public class MergeIntervals {
    public int[][] merge(int[][] arr) {
        LinkedList<int[]> res = new LinkedList<>();
        Arrays.sort(arr, (a, b) -> {
            return a[0] - b[0];
        });
        int N = arr.length;
        res.add(arr[0]);

        for (int i = 1; i < N; i++) {
            int[] last = res.getLast();
            int[] curr = arr[i];

            if (last[1] >= curr[0]) {
                last[1] = Math.max(last[1], curr[1]);
            } else {
                res.add(curr);
            }
        }

        return res.toArray(new int[0][0]);
    }
}
