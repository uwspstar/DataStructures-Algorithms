import java.util.*;

public class FindClosestElements {

    public static List<Integer> findClosestElements(int[] arr, int k, int x) {
        List<Integer> res = new ArrayList<Integer>();
        int N = arr.length;

        for (int i = 0; i < N; i++) {
            res.add(arr[i]);
        }

        Collections.sort(res, (a, b) -> Math.abs(a - x) - Math.abs(b - x));

        res = res.subList(0, k);

        Collections.sort(res, (a, b) -> a - b);
        System.out.println(res);

        return res;
    }

    public static void main(String[] args) {
        FindClosestElements.findClosestElements(new int[] { 1, 1, 1, 10, 10, 10 }, 1, 9);
        FindClosestElements.findClosestElements(new int[] { 1,2,3,4 , 5}, 4, 3);
    }
}