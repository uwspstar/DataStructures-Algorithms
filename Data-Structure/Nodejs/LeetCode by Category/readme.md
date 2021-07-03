---
marp: true
theme: default
header: 'leetcode'
footer: 'Code Interview'
paginate: true
size: 16:9
---

# 数据结构的基本存储方式就是链式和顺序两种，基本操作就是增删查改，遍历方式无非迭代和递归

---

- https://www.interviewbit.com/courses/programming/
- https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed

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

# binary search

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
# heap

- the kth biggest / smallest number

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
