---
marp: true
theme: default
header: 'leetcode'
footer: 'Code Interview'
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

### BigO 大 O 表示法 : 表示法计算的是操作数

- 仅知道算法需 要多长时间才能运行完毕还不够，还需知道运行时间如何随列表增长而 增加。这正是大 O 表示法的用武之地
- linear time
- 画一个格子是一次操作，画 16 个格子,需要 16 步. O (n )
- 将纸对折一次就是一次操作。第一次对折相当于画了两个格子! O (log n )
- 大 O 表示法指出了`最糟情况下的运行时间`

---

### 5 种大 O 运行时间

- O (log n )，也叫对数时间 ，这样的算法包括二分查找。
- O (n )，也叫线性时间 ，这样的算法包括简单查找。
- O (n log n )，这样的算法包括快速排序。
- O (n^2 )，这样的算法包括选择排序。
- O (n !)，这样的算法包括旅行商问题。

---

### binary search 二分查找 有序的元素列表

- 仅当列表是有序的时候，二分查找才管用
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

# 插入操作很多，但读取操作很少。该使用数组还 是链表呢?

- 需要随机地读取元素时，数组的 效率很高，因为可迅速找到数组的任何元素
- 链表的优势在插入元素方面. 需要同时读取所有元素时，链表的效率很高:你读取 第一个元素，根据其中的地址再读取第二个元素，以此类推。但如果你 需要跳跃，链表的效率真的很低. 当需要在中间插入元素时，链表是更好的选择。

---

# recursive

- dfs

---

# backtracking

- permute arr
- permute str
- permute with duplicate

---

# dp (dynamic) : bottom up

- fibonacci
- stair way

---

# graph

- bfs
- dfs
- directed graph
- undirected graph

---

# tree

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

- 浏览器的执行栈
- 括号匹配
- 栈混洗
- 中缀表达式（用的很少
- 后缀表达式（逆波兰表达式）

---

### 链表 : 链表是一种最基本数据结构，熟练掌握链表的结构和常见操作是基础中的基础

---

### 最短路径问 题 (shortest-path problem)

- 使用图来创建问题模型
- 使用广度优先搜索解决问题

### 广度优先搜索是一种用于图 的查找算法，可帮助回答两类问题。

- 第一类问题:从节点 A 出发，有前往节点 B 的路径吗?
- 第二类问题:从节点 A 出发，前往节点 B 的哪条路径最短?
- 你需要按添加顺序进行检查。有一 个可实现这种目的的数据结构，那就是队列 (queue)
- 队列是一种先进先出 (First In First Out，FIFO)的数据结构，而栈是一种后进先出 (Last In First Out，LIFO)的数据结构。

### 散列表

- 散列表让你能够将键映射到值
- 散列表是`无序的`，因此添加键—值对的`顺序无关紧要`。

```python
graph = {}
graph["you"] = ["alice", "bob", "claire"]
# graph["you"] 是一个数组，其中 包含了“你”的所有邻居。
```
