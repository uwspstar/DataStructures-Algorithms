---
marp: true
theme: default
header: ''
footer: ''
paginate: true
size: 16:9
---

# 二叉树题目(js 实现)

---

# 二叉树的数据结构：

```
class Node {
   constructor(val) {
       this.value = val;
       this.left = null;
       this.right =  null;
   }
}
```

---

# 树相关的算法，先搞清楚当前 root 节点该做什么，然后根据函数定义递归调用子节点，递归调用会让孩子节点做相同的事情。

- fibonacci 这其实就是一个树的后序遍历
- merge sort 这其实就是一个树的后序遍历
- quick sort 这其实就是一个树的前序遍历

---

# 二叉树的题目普遍可以用递归和迭代的方式来解.

# 在很多时候，树递归的写法与深度优先搜索的递归写法相同

---

# How to solve (almost) any binary tree coding problem

https://www.youtube.com/watch?v=s2Yyk3qdy3o

- step 1: Finding one or more base cases
- step 2: calling the same function on the left subtree
- step 3: calling the same function on the right subtree
- step 4: Join the results

---

# 1. 求二叉树的最大深度

```js
{
  //求二叉树的最大深度 DFS
  //104. Maximum Depth of Binary Tree
  const maxDepth = (root) => {
    if (root === null) return 0;
    let leftTreeDepth = maxDepth(root.left);
    let rightTreeDepth = maxDepth(root.right);
    return Math.max(leftTreeDepth, rightTreeDepth) + 1;
  };

  const maxDepth = (root) => {
    return root === null
      ? 0
      : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  };

  //求二叉树的最大深度 BFS
  var maxDepth = function (root) {
    if (root === null) return 0;
    let depth = 0; //inside while at least has 1
    let q = [root];
    while (q.length > 0) {
      depth++;
      let sz = q.length;
      for (let i = 0; i < sz; i++) {
        let n = q.shift();
        n.left && q.push(n.left);
        n.right && q.push(n.right);
      }
    }
    return depth;
  };
}
```

---

# 2. 求二叉树的最小深度

```js
{
  //求二叉树的最小深度 :DFS
  //111. Minimum Depth of Binary Tree
  const minDepth = (root) => {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;
    let treeMinDepth = Infinity;
    if (root.left !== null) {
      treeMinDepth = Math.min(minDepth(root.left), treeMinDepth);
    }
    if (root.right !== null) {
      treeMinDepth = Math.min(minDepth(root.right), treeMinDepth);
    }
    return 1 + treeMinDepth;
  };
  //求二叉树的最小深度 :BFS
  const minDepth = (root) => {
    if (root === null) return 0;
    let depth = 1;
    let q = [root];
    while (q.length > 0) {
      let sz = q.length;
      for (let i = 0; i < sz; i++) {
        let n = q.shift();
        if (n.left === null && n.right === null) return depth;
        n.left && q.push(n.left);
        n.right && q.push(n.right);
      }
      depth++;
    }
    return depth;
  };
}
```

---

# 3. 求二叉树中节点的个数

```js
{
  //求二叉树中节点的个数 :DFS, postOrder
  //222. Count Complete Tree Nodes
  const countNodes = (root) => {
    if (root === null) return 0;
    let leftNodesCount = countNodes(root.left);
    let rightNodesCount = countNodes(root.right);
    return 1 + leftNodesCount + rightNodesCount;
  };
  //Serialize and Deserialize BST
  //Maximum Average Subtree
  //Count Ways to Build Rooms in an Ant Colony

  //求二叉树中节点的个数 :BFS
  var countNodes = function (root) {
    if (root === null) return 0;
    let s = [root];
    let res = 0;
    while (s.length > 0) {
      let sz = s.length;
      res += sz;
      for (let i = 0; i < sz; i++) {
        let n = s.shift();
        n.left && s.push(n.left);
        n.right && s.push(n.right);
      }
    }
    return res;
  };
}
```

---

# 4. 求二叉树中叶子节点的个数

```js
{
  //求二叉树中叶子节点的个数 : DFS
  const leafNodeCount = (root) => {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;

    let leftLeafNodeCount = leafNodeCount(root.left);
    let rightLeafNodeCount = leafNodeCount(root.right);

    return leftLeafNodeCount + rightLeafNodeCount;
  };

  const leafNodeCount = (root) => {
    if (root === null) return 0;
    let res = 0;
    const dfs = (n, res) => {
      if (n === null) return;
      if (n.left === null && n.right === null) res++;
      n.left && dfs(n.left);
      n.right && dfs(n.right);
    };
    dfs(root, 0);
    return res;
  };
}
```

---

# 5. 求二叉树中第 k 层节点的个数

```js
{
  //求二叉树中第 k 层节点的个数 : DFS
  const numsOfkLevelTreeNode = (root, k) => {
    if (root === null || k < 1) return 0;
    if (k === 1) return 1;
    let leftNum = numsOfkLevelTreeNode(root.left, k - 1);
    let rightNum = numsOfkLevelTreeNode(root.right, k - 1);
    return leftNum + rightNum;
  };

  //求二叉树中第 k 层节点的个数 : BFS
  const numsOfkLevelTreeNode = (root, k) => {
    if (root === null || k < 1) return 0;
    if (k === 1) return 1;
    let level = 1;
    let s = [root];
    let res = 0;
    while (s.length > 0) {
      let sz = s.length;
      if (level === k) {
        return (res = sz);
      }
      for (let i = 0; i < sz; i++) {
        let n = s.shift();
        n.left && s.push(n.left);
        n.right && s.push(n.right);
      }
      level++;
    }
    if (level < k) return; // need to ask whether k always smaller than level
    return res;
  };
}
```

---

# 6. 判断二叉树是否是平衡二叉树

# 如果每个节点的左右子树的高度相差不超过 1，它就是一颗平衡二叉树

```js
{
  const height = (root) => {
    if (root == null) return -1;
    return 1 + Math.max(height(root.left), height(root.right));
  };
  var isBalanced = function (root) {
    if (root === null) return true;

    return (
      Math.abs(height(root.left) - height(root.right)) < 2 &&
      isBalanced(root.left) &&
      isBalanced(root.right)
    );
  };
  //Maximum Width of Binary Tree
  //Cracking the Safe
  //Find Elements in a Contaminated Binary Tree
}
```
