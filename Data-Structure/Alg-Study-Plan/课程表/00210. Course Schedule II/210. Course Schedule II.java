/*
基本思路
直观地说，拓扑排序就是让你把一幅无环图「拉平」，而且这个「拉平」的图里面，所有箭头方向都是一致的：

在进行拓扑排序之前，首先要确保图中无环，这就依赖 207. 课程表 中讲的环检测算法。

拓扑排序可以使用 DFS 算法，图的后序遍历结果进行反转就是拓扑排序结果。

另外，也可以用 BFS 算法借助每个节点的入度进行拓扑排序，这里就用 BFS 算法来解决。

DFS 解法和算法执行过程详解请看详细题解。

详细题解：拓扑排序详解及应用

标签：数据结构，图论算法，拓扑排序

解法代码
*/
class Solution {
    // 主函数
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        // 建图，和环检测算法相同
        List<Integer>[] graph = buildGraph(numCourses, prerequisites);
        // 计算入度，和环检测算法相同
        int[] indgree = new int[numCourses];
        for (int[] edge : prerequisites) {
            int from = edge[1], to = edge[0];
            indgree[to]++;
        }

        // 根据入度初始化队列中的节点，和环检测算法相同
        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (indgree[i] == 0) {
                q.offer(i);

            }
        }

        // 记录拓扑排序结果
        int[] res = new int[numCourses];
        // 记录遍历节点的顺序（索引）
        int count = 0;
        // 开始执行 BFS 算法
        while (!q.isEmpty()) {
            int cur = q.poll();
            // 弹出节点的顺序即为拓扑排序结果
            res[count] = cur;
            count++;
            for (int next : graph[cur]) {

                indgree[next]--;
                if (indgree[next] == 0) {
                    q.offer(next);
                }
            }
        }

        if (count != numCourses) {
            // 存在环，拓扑排序不存在
            return new int[] {};
        }

        return res;
    }

    // 建图函数
    List<Integer>[] buildGraph(int numCourses, int[][] prerequisites) {
        // 图中共有 numCourses 个节点
        List<Integer>[] graph = new LinkedList[numCourses];
        for (int i = 0; i < numCourses; i++) {
            graph[i] = new LinkedList<>();
        }
        for (int[] edge : prerequisites) {
            int from = edge[1], to = edge[0];
            // 修完课程 from 才能修课程 to
            // 在图中添加一条从 from 指向 to 的有向边
            graph[from].add(to);
        }
        return graph;
    }
}
/*
类似题目：

207. 课程表
*/