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

### Tree Traversal Summary

- If you know you need to explore the roots before inspecting any leaves, choose `pre-order` traversal because you will encounter all the roots before all of the leaves.
- If you know you need to explore all the leaves before any nodes, choose `post-order` traversal because you don’t waste any time inspecting roots when searching for leaves.
- If you know that the tree has an inherent sequence in the nodes and you want to flatten the tree into its original sequence, then you should use an `in-order` traversal. The tree would be flattened in the same way it was created. A `pre-order` or `post-order` traversal might not unwind the tree back into the sequence that was used to create it.
- Time Complexity: O(n) : The time complexity of any of these traversals is the same because each traversal requires that all nodes are visited.

---

# 二叉树主要有两种遍历方式：

##### 深度优先遍历：先往深走，遇到叶子节点再往回走。

    - 前序遍历（递归法，迭代法）
    - 中序遍历（递归法，迭代法）:
    - 后序遍历（递归法，迭代法）: 二叉树的属性 ,是否对称,

    前中后序遍历的逻辑其实都是可以借助栈使用非递归的方式来实现的。

---

### When to use Pre-Order, In-order or Post-Order?

- https://stackoverflow.com/questions/9456937/when-to-use-preorder-postorder-and-inorder-binary-search-tree-traversal-strate

- `pre-order` : If you know you need to explore the roots before inspecting any leaves, you pick pre-order because you will encounter all the roots before all of the leaves.

- `post-order` : If you know you need to explore all the leaves before any nodes, you select post-order because you don't waste any time inspecting roots in search for leaves.

- `in-order` If you know that the tree has an inherent sequence in the nodes, and you want to flatten the tree back into its original sequence, than an in-order traversal should be used. The tree would be flattened in the same way it was created. A pre-order or post-order traversal might not unwind the tree back into the sequence which was used to create it.

---

##### 广度优先遍历：一层一层的去遍历。

    - 层次遍历（迭代法）

    而广度优先遍历的实现一般使用队列来实现，这也是队列先进先出的特点所决定的，因为需要先进先出的结构，才能一层一层的来遍历二叉树。

---

# 递归函数返回值

- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0112.%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.md
- 如果需要搜索整颗二叉树，那么递归函数就不要返回值，如果要搜索其中一条符合条件的路径，递归函数就需要返回值，因为遇到符合条件的路径了就要及时返回。

---

# 回溯和递归

- 回溯和递归是一一对应的，有一个递归，就要有一个回溯

---

# 一篇文章搞定面试中的二叉树

- https://zhuanlan.zhihu.com/p/43316790
- https://www.jianshu.com/p/0190985635eb

---

# 构造树

- 为什么前序和后序不能唯一构成一棵二叉树，因为没有中序遍历就无法确定左右部分，也就无法分割。
- 注意类似用数组构造二叉树的题目，每次分隔尽量不要定义新的数组，而是通过下表索引直接在原数组上操作，这样可以节约时间和空间上的开销。

- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E5%91%A8%E6%80%BB%E7%BB%93/20201010%E4%BA%8C%E5%8F%89%E6%A0%91%E5%91%A8%E6%9C%AB%E6%80%BB%E7%BB%93.md
- 构造树一般采用的是前序遍历，因为先构造中间节点，然后递归构造左子树和右子树。

---

### 二叉搜索树是一个有序树：

- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0700.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E6%90%9C%E7%B4%A2.md
- 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
- 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
- 它的左、右子树也分别为二叉搜索树
- 这就决定了，二叉搜索树，递归遍历和迭代遍历和普通二叉树都不一样。
- 因为二叉搜索树的节点是有序的，所以可以有方向的去搜索。
- 如果 root->val > val，搜索左子树，如果 root->val < val，就搜索右子树，最后如果都没有搜索到，就返回 NULL

---

### 二叉搜索树 : 中序遍历

- 大多是二叉搜索树的题目，其实都离不开中序遍历，因为这样就是有序的。inOrder the name explain everything in order
- 230. Kth Smallest Element in a BST

---

### 删除节点有以下五种情况：

- 第一种情况：没找到删除的节点，遍历到空节点直接返回了

- 找到删除的节点
  - 第二种情况：左右孩子都为空（叶子节点），直接删除节点， 返回 NULL 为根节点
  - 第三种情况：删除节点的左孩子为空，右孩子不为空，删除节点，右孩子补位，返回右孩子为根节点
  - 第四种情况：删除节点的右孩子为空，左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点
  - 第五种情况：左右孩子节点都不为空，则将删除节点的左子树头结点（左孩子）放到删除节点的右子树的最左面节点的左孩子上，返回删除节点右孩子为新的根节点。

---

### 刪除二分搜索樹的任意元素

- 刪除二分搜索樹的任意元素
- https://www.youtube.com/watch?v=96O7KXaBm-Q&list=PLVK8Utuxl6BYC_3jYxM56YdcGnozjrnAn&index=47

---

### Hibbard Deletion

- http://math.oxford.emory.edu/site/cs171/hibbardDeletion/

---

### All about Tree
