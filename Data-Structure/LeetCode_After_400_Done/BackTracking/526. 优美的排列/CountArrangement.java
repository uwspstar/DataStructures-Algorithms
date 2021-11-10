import java.util.ArrayList;
import java.util.HashSet;

public class CountArrangement {
    public int countArrangement(int n) {
        int[] ans = { 0 };
        HashSet<Integer> set = new HashSet<Integer>();
        ArrayList<Integer> path = new ArrayList<Integer>();
        backTracking(1, ans, set, n, path);
        return ans[0];
    }

    public void backTracking(int idx, int[] ans, HashSet<Integer> set, int n, ArrayList<Integer> path) {
        if (idx == n + 1) {
            System.out.println("path -->" + path);
            ans[0]++;
            return;
        }

        for (int i = 1; i <= n; i++) {
            if (!set.contains(i) && (i % idx == 0 || idx % i == 0)) {
                set.add(i);
                path.add(i);
                backTracking(idx + 1, ans, set, n, path);
                path.remove(path.size() - 1); // remove() method and refer to the index number
                set.remove(i);
            }
        }
    }

    public static void main(String[] args) {
        CountArrangement test = new CountArrangement();
        System.out.println(test.countArrangement(5));
    }
}