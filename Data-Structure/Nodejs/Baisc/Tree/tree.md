---
marp: true
theme: default
header: 'https://github.com/youngyangyang04/leetcode-master'
footer: 'https://github.com/youngyangyang04/leetcode-master'
paginate: true
size: 16:9
---

# Tree

- 平衡二叉搜索树：又被称为 AVL（Adelson-Velsky and Landis）树
- 二叉树可以链式存储，也可以顺序存储。那么链式存储方式就用指针， 顺序存储的方式就是用数组。
- 用数组来存储二叉树如何遍历的呢？如果父节点的数组下表是 i，那么它的左孩子就是 i _ 2 + 1，右孩子就是 i _ 2 + 2。

---

# 二叉树主要有两种遍历方式：

##### 深度优先遍历：先往深走，遇到叶子节点再往回走。

    - 前序遍历（递归法，迭代法）
    - 中序遍历（递归法，迭代法）
    - 后序遍历（递归法，迭代法）

    前中后序遍历的逻辑其实都是可以借助栈使用非递归的方式来实现的。

##### 广度优先遍历：一层一层的去遍历。

    - 层次遍历（迭代法）

    而广度优先遍历的实现一般使用队列来实现，这也是队列先进先出的特点所决定的，因为需要先进先出的结构，才能一层一层的来遍历二叉树。

---

### 递归函数返回值

- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0112.%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.md
- 如果需要搜索整颗二叉树，那么递归函数就不要返回值，如果要搜索其中一条符合条件的路径，递归函数就需要返回值，因为遇到符合条件的路径了就要及时返回。

---

### 回溯和递归

- 回溯和递归是一一对应的，有一个递归，就要有一个回溯

---

# 一篇文章搞定面试中的二叉树

- https://zhuanlan.zhihu.com/p/43316790
- https://www.jianshu.com/p/0190985635eb

---

# All about Tree
