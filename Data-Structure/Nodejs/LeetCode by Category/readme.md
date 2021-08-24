---
marp: true
theme: default
header: 'Grokking Algorithms (https://amzn.to/29rVyHf)'
footer: 'Grokking Algorithms (https://amzn.to/29rVyHf)'
paginate: true
size: 16:9
---

# 数据结构

- 基本存储方式就是: `链式`和`顺序`两种

- 基本操作就是 : `增 删 改 查`，不同于插入，删除元素总能成功。如果内存中没有足够的空间，插入操作可能失败，但在任何情况下都能够将元素删除。

- 遍历方式: `迭代`和`递归`

---

# 算法的速度指的并非时间，而是操作数的增速.

- 算法运行时间并不以秒为单位

---

# Reference

- https://www.interviewbit.com/courses/programming/
- https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed
- https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings
- https://baozoulin.gitbook.io/-data-structure/
- Grokking Algorithms (https://amzn.to/29rVyHf)

---

### 常见的关键字以及对应的可能解法

- 如果题目是求`极值`，`计数`，很有可能是`动态规划`，`堆`等。
- 如果题目是`有序`的，则可能是`双指针`。比如`二分法`。
- 如果题目要求`连续`，则可能是`滑动窗口`。
- 如果题目要求`所有可能`，需要路径信息，则可能是`回溯`。

---

- https://lucifer.ren/blog/2020/12/21/shuati-silu3/
- 如果 n 是 10 左右，那么算法通常是 n! 的时间复杂度。
- 如果 n 是 20 左右，那么算法通常是 2^n 的时间复杂度
- 比如一道题是 n 是 10^7，那很可能是 O(N) 复杂度

---

### 算法`运行时间`是从其`增速的角度度量的`, 算法的`速度`指的`并非时间`，而是`操作数`的`增速`.

---

### BigO 大 O 表示法 : 表示法计算的是`操作数`。

- 仅知道算法需 要多长时间才能运行完毕还不够，还需知道运行时间如何随列表增长而增加。这正是大 O 表示法的用武之地.
- 画一个格子是一次操作，画 16 个格子,需要 16 步. O (n )
- 将纸对折一次就是一次操作。第一次对折相当于画了两个格子! O (log n )
- 大 O 表示法指出了`最糟情况下的运行时间`
- 除最糟情况下的运行时间外，还应考虑`平均情况`的运行时间，这很重要。

---

### 5 种大 O 运行时间

- O (log n )，也叫对数时间 ，这样的算法包括`二分查找`。
- O (n )，也叫`线性`时间 ，这样的算法包括`简单查找`。
- O (n log n )，这样的算法包括`快速排序`, quick sort, merge sort。
- O (n^2 )，这样的算法包括`选择排序`。 2 nest for loop
- O (n !)，这样的算法包括旅行商问题。`n * (n-1) * (n-2)*...* 2 * 1`

---

### T(N) = aT(N/b) + O(N^d)

---

### binary search 二分查找 有序的元素列表

- 仅当列表是`有序的时候`，二分查找才管用
- 二分查找是一种算法，其输入是一个有序的元素列表(必须有序的)。如果要查找的元素包含在列表中，二分查找返回其位置; 否则返回 null 。
- 用二分查找最多需要 log2 n 步，而简单查找最多需要 n 步

---

```js
const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};
```

---

### 数组和链表的优缺点

- 计算机内存的工作原理。计算机就 像是很多抽屉的集合体，每个抽屉都有地址. such as, ae0ff00b 是一个内存单元的地址
- 使用数组意味着所有待办事项在内存中都是相连的(紧靠在一起的), 在数组中添加新元素也可能很麻烦。如果没 有了空间，就得移到内存的其他地方，因此添加新元素的速度会很慢. 额外请求的位置可能根本用不上，这将浪费内存.
- 链表中的元素可存储在内存的任何地方。链表的每个元素都存储了下一个元素的地址，从而使一系列随机的内存地址串在一起.在链表中添加元素很容易:只需将 其放入内存，并将其地址存储到前一个元素中

---

# 插入操作很多，但读取操作很少。该使用数组还是链表呢?

- 需要随机地读取元素时，数组的 效率很高，因为可迅速找到数组的任何元素
- 链表的优势在插入元素方面. 需要同时读取所有元素时，链表的效率很高:你读取 第一个元素，根据其中的地址再读取第二个元素，以此类推。但如果你 需要跳跃，链表的效率真的很低. 当需要在中间插入元素时，链表是更好的选择。

---

# Recursive 递归

- 重要概念:调用另一个函数时，当前函数暂停并处于未完成状态 。该函数的所有变量的值都还在内存中。执行完函数后，回到函数并从离开的地方开始接着往下执行.
- 递归只是让 解决方案更清晰，并没有性能上的优势。实际上，在有些情况下，使用 循环的性能更好。
- 每个递归 函数都有两部分:基线条件 (base case)和递归条件 (recursive case)。
- 递归条件指的是函数调用自己，而基线条件则指的是函数不再 调用自己，从而避免形成无限循环。
- 所有函数调用都进入调用栈

---

### 基线条件 (base case)

- `编写涉及数组的递归函数时，基线条件通常是数组为空或只包含一个元素`
- dfs
- 调用栈 (call stack)

---

### 重要概念: 调用另一个函数时，当前函数暂停并处于未完成状态 。该函数的所有变量的值都还在内存中.

- 存储详尽的信息可能占用大量的内存。每个函数调用都要占用一定的内存，如果栈很高，就意味着计 算机存储了大量函数调用的信息
- 重新编写代码，转而使用循环。
- 使用尾递归 。这是一个高级递归主题，并非所有的语言都支持尾递归

---

```js
function countdown(i) {
  console.log(i);
  // base case
  if (i <= 0) return;
  countdown(i - 1);
}
```

---

### call stack 调用栈

- 使用递归时必须理解这个概念
- 每当你调用函数时，计算机都像这样将函数调用涉及的所有变量的值存储到内存中。同样，计算机也为这个函数调用分配一块内存。
- 计算机使用一个栈来表示这些内存块，其中第二个内存块位于第一个内存块上面。
- 函数调用返回。此时，栈顶的内存块被弹出.

---

### 栈 stack (Last In First Out，LIFO)

---

### divide and conquer 分而治之

- 一种著名的递归 式问题解决方法
- 快速排序
- 工作原理:
  - (1) 找出简单的基线条件;
  - (2) 确定如何缩小问题的规模，使其符合基线条件。
- D&C 并非可用于解决问题的算法，而是一种解决问题的思路.

---

### quick sort vs merge sort

- 二分查找的速度还是快得多，常量根本没有什么影响。
- 但有时候，常量的影响可能很大，对快速查找和合并查找来说就是如此。
- 快速查找的常量比合并查找小，因此如果它们的运行时间都为 O (n log n )，快速查找的速度将更快。实际上，快速查找的速度确实更快， 因为相对于遇上最糟情况，它遇上平均情况的可能性要大得多。

---

### quick sort 快速排序

- (1) 选择基准值。
- (2) 将数组分成两个子数组:小于基准值的元素和大于基准值的元素。
- (3) 对这两个子数组进行快速排序。
- 只要你每次都随 机地选择一个数组元素作为基准值，快速排序的平均运行时间就将为 O (n log n )。快速排序是最快的排序算法之一，也是 D&C 典范
- 实现快速排序时，请随机地选择用作基准值的元素。快速排序的平均运行时间为 O (n log n )。

---

### 图算法

- 知道的算法中，图算法应该是最有用的
- 创建网络模型
- 到 X 的最短路径 shortest-path problem
- 有向图和无向图 : 无向图意味着两个节点彼此指向对方，其实就是环
- 拓扑排序，这种排序算法指出了节点之间的依赖关系

---

### 图算法 广度优先 狄克斯特拉 贝尔曼-福德

- 广度优先搜索用于在非加权图中查找最短路径。
- 狄克斯特拉算法用于在加权图中查找最短路径。
- 仅当权重为正时狄克斯特拉算法才管用。
- 如果图中包含负权边，请使用贝尔曼-福德算法。

---

### 广度优先搜索 breadth-first search，BFS

- 广度优先搜索是一种用于图的查找算法，可帮助回答两类问题。
  - 第一类问题:从节点 A 出发，有前往节点 B 的路径吗?
  - 第二类问题:从节点 A 出发，前往节点 B 的哪条路径最短?

---

### 图由节点 (node)和边 (edge) 组成。

- (1) 使用图来创建问题模型。
- (2) 使用广度优先搜索解决问题。

---

### 队列 queue : First In First Out，FIFO

- 需要按添加顺序进行检查
- 队列只支持两种操作:入队和出队 。

---

- 散列表是无序的，因此添加键—值对的顺序无关紧要。

```python
graph = {}
graph["you"] = ["alice", "bob", "claire"]
```

---

### 拓扑排序

- 如果任务 A 依赖于任务 B，在列 表中任务 A 就必须在任务 B 后面。这被称为拓扑排序 ，使用它可根据图创建一个有序列表

---

### 狄克斯特拉算法 Dijkstra's algorithm

- 如果有负权边，就不能使用狄克斯特拉算法
- 狄克斯特拉算法背后的关键理念:找出图中最便宜的节点，并确保没有到该节点的更便宜的路径
- 起点到终点耗时最短的路径，你将使用狄克斯特拉算法
- 加权图 : 提高或降低某些边的权重
- 最短路径，因为段数最少，但不一定是最快路径

---

### 最短路径 : 指的并不一定是物理距离，也可能是让某种度量指标最小

- 节点一旦被处理，就意味着没有前往该节点的更便宜途径
- 在包含负权边的图中，要找出最短路径，可使用另一种算法——贝尔曼-福 德算法 (Bellman-Ford algorithm)

---

### 狄克斯特拉算法包含 4 个步骤。

- (1) 找出“最便宜”的节点，即可在最短时间内到达的节点。
- (2) 更新该节点的邻居的开销，其含义将稍后介绍。
- (3) 重复这个过程，直到对图中的每个节点都这样做了。
- (4) 计算最终路径。

---

```python
node = find_lowest_cost_node(costs) #←------在未处理的节点中找出开销最小的节点
while node is not None: #←------这个while循环在所有节点都被处理过后结束
  cost = costs[node]
  neighbors = graph[node]
  for n in neighbors.keys(): #←------遍历当前节点的所有邻居
    new_cost = cost + neighbors[n]
    if costs[n] > new_cost: #←------如果经当前节点前往该邻居更近，
      costs[n] = new_cost #←------就更新该邻居的开销
      parents[n] = node #←------同时将该邻居的父节点设置为当前节点
  processed.append(node) #←------将当前节点标记为处理过
  node = find_lowest_cost_node(costs) #←------找出接下来要处理的节点，并循环
```

---

```python
def find_lowest_cost_node(costs):
  lowest_cost = float("inf")
  lowest_cost_node = None
  for node in costs: #←------遍历所有的节点
    cost = costs[node]
  if cost < lowest_cost and node not in processed: #←------如果当前节点的开销更低且未处理过，
    lowest_cost = cost #←------就将其视为开销最低的节点
    lowest_cost_node = node
  return lowest_cost_node
```

---

### 贪婪算法 : 每步都采取最优的做法。

- 教室调度问题
- 背包问题 : 贪婪策略显然不能获得最优解，但非常接近
- 集合覆盖问题

---

### NP 完全问题 Non-deterministic Polynomial

- NP 就是 Non-deterministic Polynomial 的问题，也即是多项式复杂程度的非确定性问题。
- 而如果任何一个 NP 问题都能通过一个多项式时间算法转换为某个 NP 问题，那么这个 NP 问题就称为 NP 完全问题（Non-deterministic Polynomial complete problem）
- NP 完全问题 : 要判断问题是不是 NP 完全问题很难，易于解决的问题和 NP 完全问题 的差别通常很小
- 旅行商问题 : 阶乘函数 (factorial function)

---

### 集合

- 并集意味着将集合合并。
- 交集意味着找出两个集合中都有的元素。
- 差集意味着将从一个集合中剔除出现在另一个集合中的元素。

---

```python
>>> fruits = set(["avocado", "tomato", "banana"])
>>> vegetables = set(["beets", "carrots", "tomato"])
>>> fruits | vegetables #←------并集
set(["avocado", "beets", "carrots", "tomato", "banana"])
>>> fruits & vegetables #←------交集
set(["tomato"])
>>> fruits – vegetables #←------差集
set(["avocado", "banana"])
>>> vegetables – fruits ←------你觉得这行代码是做什么的呢?
```

---

### 动态规划 dp (dynamic) : bottom up

- fibonacci
- stair way

---

# backtracking

- permute arr
- permute str
- permute with duplicate

---

# graph

- bfs
- dfs
- directed graph
- undirected graph

---

# tree

- 树是一种特殊的图，其中没有往后指的边
- bfs
- dfs : preOrder, inOrder, postOrder
- 二叉树遍历的相关算法：
  - 94.binary-tree-inorder-traversal
  - 102.binary-tree-level-order-traversal
  - 103.binary-tree-zigzag-level-order-traversal
  - 144.binary-tree-preorder-traversal
  - 145.binary-tree-postorder-traversal
  - 199.binary-tree-right-side-view

---

### 二叉查找树 Binary Search Tree

- 其中序遍历的结果是一个有序数组
- 常规操作有插入，查找，删除，找父节点，求最大值，求最小值

---

### 平衡树 : 树在数据结构层面构造了二分查找算法

- https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/basic-data-structure#er-cha-ping-heng-shu

---

### 基本操作：

    - 旋转
    - 插入
    - 删除
    - 查询前驱
    - 查询后继

---

# Trie 树 相关算法：

- 208.implement-trie-prefix-tree
- 211.add-and-search-word-data-structure-design
- 212.word-search-ii

---

# Graph 图的题目的算法比较适合套模板。题目类型主要有：

- 图由节点 (node)和边 (edge) 组成。
- https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/basic-data-structure#zui-duan-ju-li-zui-duan-lu-jing
- dijkstra : 主要解决的是图中任意两点的最短距离
- floyd_warshall : 1462. 课程安排 IV
- 最小生成树（Kruskal & Prim）
- A 星寻路算法
- 二分图（染色法）
- 拓扑排序

---

# heap : javascript 没有

- 型的实现就是二叉堆
- the kth biggest / smallest number

---

### 散列表（Hash table，也叫哈希表），是根据键（Key）而直接访问在記憶體儲存位置的数据结构。

- 散列表是一种很有用的数据结构，由键 值对组成，如人名和电子邮件地址或者用户名和密码。散列表的用 途之大，再怎么强调都不过分。
- 每当我需要解决问题时，首先想到 的两种方法是:1) 可以使用散列表吗? 2) 可以使用图来创建模型吗

---

# hashmap, Map, Set

---

# intervals (timeline)

---

# slide window

- https://segmentfault.com/a/1190000025178927

---

# two pointers

---

# divide and conquer

- check quick sort
- https://brilliant.org/practice/recursive-functions/?p=2
- These kinds of programs can be represented as binary trees with the initial call as the root.

---

# Greedy Method - Brute Force Approach

- https://brilliant.org/wiki/recursive-backtracking/?quiz=recursive-backtracking#
- it is a Brute Force Approach

---

# Knapsack Problem - Greedy Method

- https://www.youtube.com/watch?v=oTTzNMHM05I&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=40

---

# Data Structures in JavaScript: Arrays, HashMaps, and Lists

- https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/

---

# 数组 或者 链表

- https://labuladong.github.io/algo/1/2/

---

### 数据结构 基本操作 : 增删查改

- 对于任何数据结构，其基本操作无非遍历 + 访问，再具体一点就是：增删查改

---

### 数据结构的遍历 : 线性的和非线性的

- https://labuladong.github.io/algo/1/2/
- 各种数据结构的遍历 + 访问无非两种形式：线性的和非线性的
- `线性`就是 `for/while` `迭代`为代表，`非线性`就是`递归为代表`
- `数组遍历`框架，典型的线性迭代结构
- `链表遍历`框架，兼具迭代和递归结构
- `二叉树遍历`框架，典型的非线性递归遍历结构

---

### 数据结构基础

- https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/basic-data-structure

---

### 队列的实际使用

- “HTTP 1.1 的队头阻塞问题

---

### 栈的实际使用 : 不管入栈还是出栈，都是在栈顶操作

- 栈并不能用于查找
- 浏览器的执行栈
- 括号匹配
- 栈混洗
- 中缀表达式（用的很少
- 后缀表达式（逆波兰表达式）表达式计算问题

---

### 链表 : 链表是一种最基本数据结构，熟练掌握链表的结构和常见操作是基础中的基础

---

### 最短路径问 题 (shortest-path problem)

- 使用图来创建问题模型
- 使用广度优先搜索解决问题

---

### 广度优先搜索是一种用于图 的查找算法，可帮助回答两类问题。

- 第一类问题:从节点 A 出发，有前往节点 B 的路径吗?
- 第二类问题:从节点 A 出发，前往节点 B 的哪条路径最短?
- 你需要按添加顺序进行检查。有一 个可实现这种目的的数据结构，那就是队列 (queue)
- 队列是一种先进先出 (First In First Out，FIFO)的数据结构，而栈是一种后进先出 (Last In First Out，LIFO)的数据结构。

---

### 散列表 : 散列函数和数组创建了一种 被称为散列表 (hash table)的数据结构 . 也被称为`散列映射`、`映射`、`字典`和`关联数组`

- 数组和链表都被直接映射到内存，但散列表更复杂，它使用散列函数来确定元素的存储位置。
- 散列函数和数组创建了一种 被称为散列表 (hash table)的数据结构。散列表是你学习的第一种包 含额外逻辑的数据结构。

- 学习的复杂数据结构中，散列表可能是`最有用`的，也被称为`散列映射`、`映射`、`字典`和`关联数组`

---

### 散列表也使用 数组来存储数据，因此其获取元素的速度与数组一样快

- 数组和链表都被直接映射到内存，但散列表更复杂，它使用散列函数来确定元素的存储位置。
- 散列表让你能够将键映射到值
- 散列表是`无序的`，因此添加键—值对的`顺序无关紧要`。

---

### 散列函数 : 散列函数是这样的函数，即无论你给它什么数据，它都还你一个数字

- 散列函数“将输入映射到数字”, 一个散列函数不 管输入是什么都返回 same value，它就不是好的散列函数。最理想的情况 是，将不同的输入映射到不同的数字。

---

### 散列表功能

- DNS 解析 (DNS resolution)，散列表是提供这种功能的方式之一!
- 散列表用作缓存, 缓存是一种常用的加速方式，所有大型网站都使用缓存，而缓存的数据则存储在散列表中!

---

### 散列表适合用于:

- 仿真映射关系;
- 防止重复;
- 缓存/记住数据，以免服务器再通过处理来生成它们

---

### 散列表性能

- 散列表执行各种操作的时间都为 O (1), 最糟情况下，散列表所有操作的运行时间都为 O (n )
- 在平均情况下，散列表的查找(获取给定索引处的值)速度与数组一样
  快，而插入和删除速度与链表一样快，因此它兼具两者的优点!
- 但在最糟情况下，散列表的各种操作的速度都很慢。

---

### 避免冲突 collision

- 因此，在使用散列表时，避开最糟情况至关重要。为此，需要避免冲突。
- 而要避免冲突，需要有:
  - 较低的填装因子;
  - 良好的散列函数

---

### 散列表的填装因子

- 散列表的填装因子很容易计算 : 计算数组中被占用的位置数 2(has val)/5(total) = 0.4
- 填装因子大于 1 意味着商品数量超过了数组的位置数。一旦填装因子开 始增大，你就需要在散列表中添加位置，这被称为调整长度 (`resizing`)。
- 调整长度的开销很大，因此你不会希望频繁地这样做。
- 但平均而言，即便考 虑到调整长度所需的时间，散列表操作所需的时间也为 O (1)

---

### 良好的散列函数: 让数组中的值呈均匀分布

- 可研究一下 SHA 函数
- 散列函数的结果必须是均匀分布的，这很重要。它们的映射范围必须尽可能大。最糟糕的散列函数莫过于将所有输入都映射到散列表的同一个位置

---

```python
graph = {}
graph["you"] = ["alice", "bob", "claire"]
# graph["you"] 是一个数组，其中 包含了“你”的所有邻居。
```
