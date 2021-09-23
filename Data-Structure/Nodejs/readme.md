---
marp: true
---

# 10,000 hour rule

---

# 数据结构

- https://algs4.cs.princeton.edu/cheatsheet/
- https://labuladong.gitbook.io/
- https://github.com/youngyangyang04/leetcode-master
- https://www.amazon.com/Elements-Programming-Interviews-Java-Insiders/dp/1517671272

---

### 数据结构的存储方式只有两种：数组（顺序存储）和链表（链式存储）。

- 数组和链表才是「结构基础」。因为那些多样化的数据结构，栈、队列、堆、树、图等等,究其源头，都是在链表或者数组上的特殊操作，API 不同而已。
- 「队列」、「栈」这两种数据结构既可以使用链表也可以使用数组实现。
- 「树」，用数组实现就是「堆」. 用链表实现就是很常见的那种「树」
- 「图」的两种表示方法，邻接表就是链表，邻接矩阵就是二维数组。

---

### 数组 vs 链表

- 数组快速找到对应元素 O(1)
- 链表找到对应元素 O(N)

- 在数组中间进行插入和删除，每次必须搬移后面的所有数据以保持连续，时间复杂度 O(N).
- 链表删除元素或者插入新元素，时间复杂度 O(1).

- 数组如果要扩容，需要重新分配一块更大的空间，再把数据全部复制过去，时间复杂度 O(N)

---

### 数据结构的基本操作 : 增删改查。

---

### 据结构的遍历两种形式：线性(迭代) 和 非线性 (递归)。

- 线性就是 for/while `迭代`为代表.
- 非线性就是`递归`为代表.
- 数组遍历框架，典型的线性迭代结构.
- 链表遍历框架，兼具迭代和递归结构.
- 二叉树遍历框架，典型的非线性递归遍历结构.

---

# 框架

- 递归代码是学好算法的基本功

---

### 二叉树遍历框架

- 很多`DP`问题就是在遍历一棵树
- `BackTracking` 就是个 N 叉树的前后序遍历问题
- `QuickSort`就是个二叉树的前序遍历(preOrder)，`MergeSort`就是个二叉树的后序遍历(postOrder)

```js
const traverse = (root) => {
  // 前序遍历代码位置
  traverse(root.left);
  // 中序遍历代码位置
  traverse(root.right);
  // 后序遍历代码位置
};
```

---

### 几乎 90%二叉树的题目都是一套这个框架

```js
const traverse = (root) => {
  if (root === null) return root; //empty tree
  if (root.left === null && root.right === null) return root; //only have root node;

  // 前序遍历: do something Logic
  let leftSubTreeResult = traverse(root.left);
  // 中序遍历: do something Logic
  let rightSubTreeResult = traverse(root.right);
  // 后序遍历代: do something Logic
};
```

- 求二叉树中最大路径和
- 根据前序遍历和中序遍历的结果还原一棵二叉树
- 恢复一棵 BST

---

### 理解递归函数最重要的就是画出递归树

### 动态规划问题的一般形式就是求最值
