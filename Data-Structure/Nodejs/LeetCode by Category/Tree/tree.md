---
marp: true
theme: default
header: 'https://github.com/youngyangyang04/leetcode-master'
footer: 'https://github.com/youngyangyang04/leetcode-master'
paginate: true
size: 16:9
---

# Tree

- 写树相关的算法，先搞清楚当前 root 节点该做什么，然后根据函数定义递归调用子节点，递归调用会让孩子节点做相同的事情。
- fibonacci 这其实就是一个树的后序遍历
- merge sort 这其实就是一个树的后序遍历
- quick sort 这其实就是一个树的前序遍历

---

# 二叉树可以链式存储，也可以顺序存储

- 链式存储方式就用指针， 顺序存储的方式就是用数组

---

# Height vs Depth

- https://stackoverflow.com/questions/2603692/what-is-the-difference-between-tree-depth-and-height
- Tip: to avoid confusion between terminologies:
- 1. `Height`: Imagine measuring a person's height, we do it from toe to head (leaf to root).
- 2. `Depth`: Imagine measuring depth of a sea, we do it from earth's surface to ocean bed (root to leaf).

---

- The `depth` of a node is the `number of edges` from the `node to the tree's root` node.
- A root node will have a depth of 0.

- The `height` of a node is the `number of edges` on the `longest path` from the `node to a leaf`.
- A leaf node will have a height of 0.

---

# 根据题意，思考一个二叉树节点需要做什么，到底用什么遍历顺序就清楚了

- https://labuladong.github.io/algo/2/18/22/
- https://zhuanlan.zhihu.com/p/308150123
- 而遍历不是目的，遍历是为了更好地做处理，这里的处理包括搜索，修改树等。
- 树虽然只能从根开始访问，但是我们可以「选择」在访问完毕回来的时候做处理，还是在访问回来之前做处理，这两种不同的方式就是「后序遍历」和「先序遍历」。
- https://www.geeksforgeeks.org/difference-between-bfs-and-dfs/

---

### How to solve (almost) any binary tree coding problem

- https://www.youtube.com/watch?v=s2Yyk3qdy3o

# step

- step 1: Finding one or more base cases
- step 2: calling the same function on the left subtree
- step 3: calling the same function on the right subtree
- step 4: Join the results

---

```js
//allTreeTemplate
{
  const treeSum = (root) => {
    if (root === null) return 0; // 0

    leftSum = treeSum(root.left);
    rightSum = treeSum(root.right);

    return root.val + leftSum + rightSum;
  };
}
```

---

```js
//allTreeTemplate
{
  const nodeCount = (root) => {
    if (root === null) return 0; // 0

    leftCount = leftCount(root.left);
    rightCount = leftCount(root.right);

    return 1 + leftCount + rightCount;
  };
}
```

---

```js
//allTreeTemplate
{
  const treeMaxValue = (root) => {
    if (root === null) return 0; // 0

    leftMaxValue = treeMaxValue(root.left);
    rightMaxValue = treeMaxValue(root.right);

    return Math.max(root.val + leftMaxValue + rightMaxValue);
  };
}
```

---

```js
//allTreeTemplate
{
  const treeMaxHeight = (root) => {
    if (root === null) return 0; // 0

    leftMaxHeight = treeMaxHeight(root.left);
    rightMaxHeight = treeMaxHeight(root.right);

    return 1 + Math.max(leftMaxHeight + rightMaxHeight);
  };
}
```

---

- https://leetcode.com/problems/invert-binary-tree/

```js
//allTreeTemplate
{
  const reverseTree = (root) => {
    if (root === null) return root; // 0

    let leftTree = reverseTree(root.left);
    let rightTree = reverseTree(root.right);
    root.left = rightTree;
    root.right = leftTree;
    return root;
  };
}
```

---

```js
{
  const reverseTree = (root) => {
    if (root === null) return root; // 0
    [root.left, root.right] = [root.right, root.left];
    reverseTree(root.left);
    reverseTree(root.right);
    return root;
  };
}
```

---

```js
{
  ////postOrder faster
  const reverseTree = (root) => {
    if (root === null) return root; // 0
    reverseTree(root.left);
    reverseTree(root.right);
    [root.left, root.right] = [root.right, root.left];
    return root;
  };
}
```

---

### 概念 : 高度是从下往上数，深度是从上往下。因此根节点的深度和叶子节点的高度是 0。

- https://zhuanlan.zhihu.com/p/308150123
- 树的`高度` height：节点到叶子节点的最大值就是其高度。
- 树的`深度` depth：高度和深度是相反的，高度是从下往上数，深度是从上往下。因此根节点的深度和叶子节点的高度是 0。
- 树的`层`：根开始定义，根为第一层，根的孩子为第二层。
- 二叉树，三叉树，。。。 N 叉树，由其`子节点最多可以有几个`决定，最多有 N 个就是 N 叉树。
- 有没有想过为啥只有二叉树，而没有一叉树。实际上链表就是特殊的树，即一叉树。

---

### 二叉树分类

- `完全二叉树` : 完全二叉树的所有结点与同样深度的满二叉树，它们按层序编号相同的结点，是一一对应的。关键词是按层序编号
- `满二叉树` : 在一棵二叉树中,如果所有分支结点都存在左子树和右子树,并且所有叶子都在同一层上,这样的二叉树称为满二叉树
- `二叉搜索树`
- `平衡二叉树` : `平衡二叉搜索树`：又被称为 AVL（Adelson-Velsky and Landis）树
- `红黑树` : 其实红黑树就是一种二叉平衡搜索树

---

### 二叉树特点

- 每个结点最多有两颗子树,所以二叉树不存在度大于 2 的结点
- 左子树和右子树是有顺序的,次序不能任意颠倒
- 即使树中某结点只有一颗子树,也要区分左子树和右子树的, 线性表就是特殊的二叉树

---

### 二叉树存储

- 二叉树可以`链式存储`，也可以`顺序存储`。
- 链式存储方式就用指针
- 顺序存储的方式就是用数组。非常适合完全二叉树
  - 用数组来存储二叉树如何遍历的呢？如果父节点的数组下表是 `i`，那么它的左孩子就是 `i _ 2 + 1`，右孩子就是 `i _ 2 + 2`。

---

### 顺序存储的方式就是用数组

- 一种极端的情况,一棵深度为 k 的右斜树,它只有 k 个结点,却需要分配个存储单元,会造成对空间的极度浪费,所以顺序结构一般只用于完全二叉树

---

### 一个中心，两个基本点，三种题型，四个重要概念，七个技巧

- https://zhuanlan.zhihu.com/p/308150123

---

### How to traverse the tree

- https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solution/

---

### How to construct the tree from two traversals: inorder and preorder/postorder/etc

- https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solution/

---

### Tree Traversal Summary

- If you know you need to explore the roots before inspecting any leaves, choose `pre-order` traversal because you will encounter all the roots before all of the leaves.
- If you know you need to explore all the leaves before any nodes, choose `post-order` traversal because you don’t waste any time inspecting roots when searching for leaves.
- If you know that the tree has an inherent sequence in the nodes and you want to flatten the tree into its original sequence, then you should use an `in-order` traversal. The tree would be flattened in the same way it was created. A `pre-order` or `post-order` traversal might not unwind the tree back into the sequence that was used to create it.
- Time Complexity: O(n) : The time complexity of any of these traversals is the same because each traversal requires that all nodes are visited.

---

### 而遍历不是目的，遍历是为了更好地做处理，这里的处理包括搜索，修改树等。

- 树虽然只能从根开始访问，但是我们可以「选择」在访问完毕回来的时候做处理，还是在访问回来之前做处理，这两种不同的方式就是「后序遍历」和「先序遍历」。

# 二叉树主要有两种遍历方式：

##### 深度优先遍历：先往深走，遇到叶子节点再往回走。root (position), left, right

    - 前序遍历
      -（preOrder : root, left, right 递归法，迭代法）: quick Sort
    - 中序遍历
      -（inOrder : left, root, right 递归法，迭代法）: build a tree, inorder (the name make sense)
    - 后序遍历
      -（postOrder : left, right, root 递归法，迭代法）: 二叉树的属性 ,是否对称, fibonacci, merge sort

    前中后序遍历的逻辑其实都是可以借助栈使用非递归的方式来实现的。

---

### Tree DFS

- https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed
- Tree DFS pattern works by starting at the root of the tree, if the node is not a leaf you need to do three things:
- Decide whether to process the current node now (pre-order), or between processing two children (in-order) or after processing both children (post-order).
- Make two recursive calls for both the children of the current node to process them.
- Sum of Path Numbers (medium)
- All Paths for a Sum (medium)

---

### When to use Pre-Order, In-order or Post-Order?

- https://stackoverflow.com/questions/9456937/when-to-use-preorder-postorder-and-inorder-binary-search-tree-traversal-strate

- `pre-order` : If you know you need to explore the roots before inspecting any leaves, you pick pre-order because you will encounter all the roots before all of the leaves.

- `post-order` : If you know you need to explore all the leaves before any nodes, you select post-order because you don't waste any time inspecting roots in search for leaves.

- `in-order` If you know that the tree has an inherent sequence in the nodes, and you want to flatten the tree back into its original sequence, than an in-order traversal should be used. The tree would be flattened in the same way it was created. A pre-order or post-order traversal might not unwind the tree back into the sequence which was used to create it.

---

### preorder (self, left, right)

```js
{
  // recursive
  const preorder = (root) => {
    if (!root) return;
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
  };
}
```

---

```js
{
  const preorder = (root) => {
    if (!root) return;
    const stack = [root];
    while (stack.length) {
      const n = stack.pop();
      console.log(n.val);
      if (n.right) stack.push(n.right); // right first , then left;
      if (n.left) stack.push(n.left); //left
    }
  };
}
```

---

- iterative : stack, self, **_right_** , left,
- 前序遍历是中左右，每次先处理的是中间节点，那么先将跟节点放入栈中，然后将右孩子加入栈，再加入左孩子。为什么要先加入 右孩子，再加入左孩子呢？ 因为这样出栈的时候才是中左右的顺序

---

- let sz = stack.length;

```js
{
  const preorder = (root) => {
    if (!root) return;
    const stack = [root];
    while (stack.length) {
      let sz = stack.length;
      for (let i = 0; i < sz; i++) {
        const n = stack.pop();
        console.log(n.val);
        if (n.right) stack.push(n.right); // right first , then left;
        if (n.left) stack.push(n.left); //left
      }
    }
  };
}
```

---

##### 广度优先遍历：一层一层的去遍历。

- 层次遍历（迭代法）
- 而广度优先遍历的实现一般使用队列来实现，这也是队列先进先出的特点所决定的，因为需要先进先出的结构，才能一层一层的来遍历二叉树。
- Binary Tree Level Order Traversal (easy)
- Zigzag Traversal (medium)

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
- 注意类似用数组构造二叉树的题目，每次分隔尽量不要定义新的数组，而是通过下表索引直接在原数组上操作，这样可以节约时间和`空间上的开销`。

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

- BST，除了它的定义，还有一个重要的性质：BST 的中序遍历结果是有序的（升序）
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

### Tree Data Structures in JavaScript for Beginners

- https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/

---

### 计算机的数据结构是

- 计算机的数据结构是对现实世界物体间关系的一种抽象。比如家族的族谱，公司架构中的人员组织关系，电脑中的文件夹结构，html 渲染的 dom 结构等等，这些有层次关系的结构在计算机领域都叫做树
- 写复杂递归的时, 画一个递归树帮助自己理解
