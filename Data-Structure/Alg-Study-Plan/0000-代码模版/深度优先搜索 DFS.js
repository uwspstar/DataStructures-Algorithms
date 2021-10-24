/*
本文作者:九章算法令狐冲
官方网站:www.jiuzhang.com/?utm_source=lhc-cheatsheet-v4.0
*/

/*
深度优先搜索 DFS 使用条件

- 找满足某个条件的 [所有方案] (99%) 
- 二叉树 Binary Tree 的问题 (90%) 
- 组合问题(95%)
    - 问题模型:求出所有满足条件的“组合”
    - 判断条件:组合中的元素是顺序无关的 
- 排列问题 (95%)
    - 问题模型:求出所有满足条件的“排列”
    - 判断条件:组合中的元素是顺序“相关”的。

不要用 DFS 的场景
    - 连通块问题(一定要用 BFS，否则 StackOverflow) 
    - 拓扑排序(一定要用 BFS，否则 StackOverflow) 
    - 一切 BFS 可以解决的问题

复杂度

时间复杂度:O(方案个数 * 构造每个方案的时间) 
    - 树的遍历 : O(n)
    - 排列问题: O(n!*n)
    - 组合问题 : O(2^n * n)
*/
{
    dfs = (参数列表) => {
        if (递归出口) {
            记录答案;
            return;
        }
        for (所有的拆解any可能性; ;) {
            修改所有的参数;
            dfs(参数列表);
            还原所有被修改过的参数;
        }
        return something(如果需要的话, 很多时候不需要return值, 除了分治的写法)
    }
}
// https://github.com/azl397985856/leetcode/blob/master/thinkings/tree.md
{
    // 通用的 DFS 模板可能是这样的

    const visited = {}
    function dfs(i) {
        if (满足特定条件) {
            // 返回结果 or 退出搜索空间
        }

        visited[i] = true // 将当前状态标为已搜索
        for (根据i能到达的下个状态j; ;) {
            if (!visited[j]) { // 如果状态j没有被搜索过
                dfs(j)
            }
        }
    }

}