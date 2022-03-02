---
marp: true
theme: default
size: 16:9
---

# BFS

- 遍历树结构(level order)
- 遍历图结构(BFS, Topological)
- 遍历二维数组

- https://docs.google.com/presentation/d/1R8rHF7l3C5DEOI0GTwSwSzkmyRmscu1KwjVIVpL4tgQ/edit#slide=id.g99a2da5d10_1_32

- 典型的 BFS 最短路径问题，用 DFS 也可以求解，但是容易超时。

在二维矩阵中搜索，什么时候用 BFS，什么时候用 DFS？ 1.如果只是要找到某一个结果是否存在，那么 DFS 会更高效。因为 DFS 会首先把一种可能的情况尝试到底，才会回溯去尝试下一种情况，只要找到一种情况，就可以返回了。但是 BFS 必须所有可能的情况同时尝试，在找到一种满足条件的结果的同时，也尝试了很多不必要的路径； 2.如果是要找所有可能结果中最短的，那么 BFS 回更高效。因为 DFS 是一种一种的尝试，在把所有可能情况尝试完之前，无法确定哪个是最短，所以 DFS 必须把所有情况都找一遍，才能确定最终答案（DFS 的优化就是剪枝，不剪枝很容易超时）。而 BFS 从一开始就是尝试所有情况，所以只要找到第一个达到的那个点，那就是最短的路径，可以直接返回了，其他情况都可以省略了，所以这种情况下，BFS 更高效。

BFS 解法中的 visited 为什么可以全局使用？
BFS 是在尝试所有的可能路径，哪个最快到达终点，哪个就是最短。那么每一条路径走过的路不同，visited（也就是这条路径上走过的点）也应该不同，那么为什么 visited 可以全局使用呢？
因为我们要找的是最短路径，那么如果在此之前某个点已经在 visited 中，也就是说有其他路径在小于或等于当前步数的情况下，到达过这个点，证明到达这个点的最短路径已经被找到。那么显然这个点没必要再尝试了，因为即便去尝试了，最终的结果也不会是最短路径了，所以直接放弃这个点即可。

- https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/solution/bfszui-duan-lu-jing-wen-ti-bfsdfsde-si-k-ngc5/
