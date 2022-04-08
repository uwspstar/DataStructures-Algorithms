//752. Open the Lock
/*
基本思路
PS：这道题在《算法小抄》 的第 53 页。

本质上就是穷举，在避开 deadends 密码的前提下，对四位密码的每一位进行 0~9 的穷举。

根据 BFS 算法的性质，第一次拨出 target 时的旋转次数就是最少的，直接套 BFS 算法框架 即可。

另外，针对这道题的场景，还可以使用「双向 BFS」技巧进行优化，见详细题解。

详细题解：BFS 算法解题套路框架

标签：BFS 算法

解法代码
*/
class Solution {
    public int openLock(String[] deadends, String target) {
        // 记录需要跳过的死亡密码
        Set<String> deads = new HashSet<>();
        for (String s : deadends)
            deads.add(s);
        // 记录已经穷举过的密码，防止走回头路
        Set<String> visited = new HashSet<>();
        Queue<String> q = new LinkedList<>();
        // 从起点开始启动广度优先搜索
        int step = 0;
        q.offer("0000");
        visited.add("0000");

        while (!q.isEmpty()) {
            int sz = q.size();
            /* 将当前队列中的所有节点向周围扩散 */
            for (int i = 0; i < sz; i++) {
                String cur = q.poll();

                /* 判断是否到达终点 */
                if (deads.contains(cur))
                    continue;
                if (cur.equals(target))
                    return step;

                /* 将一个节点的未遍历相邻节点加入队列 */
                for (int j = 0; j < 4; j++) {
                    String up = plusOne(cur, j);
                    if (!visited.contains(up)) {
                        q.offer(up);
                        visited.add(up);
                    }
                    String down = minusOne(cur, j);
                    if (!visited.contains(down)) {
                        q.offer(down);
                        visited.add(down);
                    }
                }
            }
            /* 在这里增加步数 */
            step++;
        }
        // 如果穷举完都没找到目标密码，那就是找不到了
        return -1;
    }

    // 将 s[j] 向上拨动一次
    String plusOne(String s, int j) {
        char[] ch = s.toCharArray();
        if (ch[j] == '9')
            ch[j] = '0';
        else
            ch[j] += 1;
        return new String(ch);
    }

    // 将 s[i] 向下拨动一次
    String minusOne(String s, int j) {
        char[] ch = s.toCharArray();
        if (ch[j] == '0')
            ch[j] = '9';
        else
            ch[j] -= 1;
        return new String(ch);
    }
}
/*
 * 类似题目：
 * 
 * 111.二叉树的最小深度（简单）
 * // Find the Longest Substring Containing Vowels in Even Counts (M)
 * // Detect Pattern of Length M Repeated K or More Times (E)
 * // Maximum Earnings From Taxi (M)
 */