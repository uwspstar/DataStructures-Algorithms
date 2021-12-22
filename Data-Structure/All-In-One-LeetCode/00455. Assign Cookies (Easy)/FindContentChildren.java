
/*
简而言之，这里的贪心策略是，给剩余孩子里最小饥饿度的孩子分配最小的能饱腹的饼干。
至于具体实现，因为我们需要获得大小关系，一个便捷的方法就是把孩子和饼干分别排序。
*/
import java.util.*;

public class FindContentChildren {
    public int findContentChildren(int[] kids, int[] cookies) {
        if (kids.length == 0 || cookies.length == 0)
            return 0;
        int res = 0;
        Arrays.sort(kids, (a, b) -> a - b);
        Arrays.sort(cookies, (a, b) -> a - b);

        int kid = 0, cookie = 0;
        while (kid < kids.length && cookie < cookies.length) {
            if (kids[kid] <= cookies[cookie]) {
                kid++;
                res++;
            }
            cookie++;
        }
        return res;
    }
}
