---
marp: true
theme: default
header: ''
footer: 'Code Interview'
paginate: true
size: 16:9
---

# Topological Sorting
- https://zhuanlan.zhihu.com/p/135094687
- https://www.jianshu.com/p/b59db381561a

# 拓扑排序（Topological Sorting）

- 是一个有向无环图（DAG, Directed Acyclic Graph）的所有顶点的线性序列。
- 通常，一个有向无环图可以有一个或多个拓扑排序序列。
- 拓扑排序还可以采用 深度优先搜索（DFS）的思想来实现，详见《topological sorting via DFS》
- 因为拓扑排序`并不是`一个纯粹的排序算法，它只是针对某一类图，找到一个可以执行的线性顺序。

---

### 必须满足下面两个条件：

- 每个顶点出现且只出现一次。
- 若存在一条从顶点 A 到顶点 B 的路径，那么在序列中顶点 A 出现在顶点 B 的前面。

---

### 充分必要条件

- 如果这个图不是 DAG，那么它是没有拓扑序的；
- 如果是 DAG，那么它至少有一个拓扑序；
- 反之，如果它存在一个拓扑序，那么这个图必定是 DGA

---

### 拓扑排序的应用

- 拓扑排序通常用来“排序”具有依赖关系的任务

---

### 入度 and 出度 : 我们先执行入度为 0 的那些点

- https://zhuanlan.zhihu.com/p/135094687
- 入度：顶点的入度是指「指向该顶点的边」的数量；
- 出度：顶点的出度是指该顶点指向其他点的边的数量。
- 那也就是要记录每个顶点的入度。因为只有当它的 入度 = 0 的时候，我们才能执行它。
- 在算法中，每次都选择没有前置课的操作叫做，选取入度为 0 的结点加入拓扑队列。由于选过的课就算完成了前置，所以选择过后还要删除当前点和与之相关的所有边。

---

### vs. 树结构

- https://zhuanlan.zhihu.com/p/56024487
- 与之前的树结构对比不难发现，树结构其实可以转化为拓扑排序，而拓扑排序 不一定能够转化为树

---

### 分别表达结点和边

```js
[a, b, c, d, e][((a, b), (a, d), (b, c), (d, c), (d, e), (e, c))];
```

---

### 用一个字典表示图结构

```js
graph = {
  a: ['b', 'd'],
  b: ['c'],
  d: ['e', 'c'],
  e: ['c'],
  c: [],
};
```

### 在算法中，每次都选择没有前置课的操作叫做，选取入度为 0 的结点加入拓扑队列。由于选过的课就算完成了前置，所以选择过后还要删除当前点和与之相关的所有边。

```python
graph = {
    "a": ["b","d"],
    "b": ["c"],
    "d": ["e","c"],
    "e": ["c"],
    "c": [],
}

def TopologicalSort(graph):
  degrees = dict((u, 0) for u in graph)
  for u in graph:
      for v in graph[u]:
          degrees[v] += 1
  #入度为0的插入队列
  queue = [u for u in graph if degrees[u] == 0]
  res = []
  while queue:
      u = queue.pop()
      res.append(u)
      for v in graph[u]:
          # 移除边，即将当前元素相关元素的入度-1
          degrees[v] -= 1
          if degrees[v] == 0:
              queue.append(v)
  return res

print(TopologicalSort(graph)) # ['a', 'd', 'e', 'b', 'c']
```
---
### 实际应用 选课系统 关键路径问题
- 一个 use case，就是选课系统，这也是最常考的题目。
- 而拓扑排序最重要的应用就是关键路径问题，这个问题对应的是 AOE (Activity on Edge) 网络。
    - AOE 网络：顶点表示事件，边表示活动，边上的权重来表示活动所需要的时间。
    - AOV 网络：顶点表示活动，边表示活动之间的依赖关系。