import java.util.*;
import java.lang.*;

public class Merge {
    private List<int[]> res = new ArrayList<int[]>();

    public int[][] merge(int[][] arr) {
        int N = arr.length;
        if (N < 2)
            return arr;
        Arrays.sort(arr, (a, b) -> a[0] - b[0]);
        res.add(arr[0]);
        for (int i = 1; i < N; i++) {
            if (res.get(res.size() - 1)[1] >= arr[i][0]) {
                res.get(res.size() - 1)[1] = Math.max(res.get(res.size() - 1)[1], arr[i][1]);
            } else {
                res.add(arr[i]);
            }
        }
        return res.toArray(new int[res.size()][]);
    }

    public static void main(String[] args) {
        int[][] intervals = new int[][] { { 1, 3 }, { 2, 6 }, { 8, 10 }, { 15, 18 } };
        Merge test = new Merge();
        int[][] res = test.merge(intervals);

        for (int i = 0; i < res.length; i++) {
            System.out.println(res[i][0] + "," + res[i][1]);
        }

    }
}
