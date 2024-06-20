### Invert Binary Tree
### 翻转二叉树

**Inverting a Binary Tree:** Swap the left and right children of every node in the tree.
**翻转二叉树:** 交换树中每个节点的左右子节点。

Here is a detailed explanation and implementation in both Node.js and Python.
以下是Node.js和Python中的详细解释和实现。

#### Node.js Implementation
#### Node.js 实现

```javascript
// Definition for a binary tree node
// 二叉树节点定义
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Invert Binary Tree Function
// 翻转二叉树函数
function invertTree(root) {
    if (root === null) {
        return null;
    }

    // Swap the left and right children
    // 交换左右子节点
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively invert the left and right subtrees
    // 递归地翻转左右子树
    invertTree(root.left);
    invertTree(root.right);

    return root;
}

// Example Usage
// 示例用法
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

console.log(invertTree(root)); 
// Output: 4, 7, 2, 9, 6, 3, 1 (in inverted form)
```

#### Python Implementation
#### Python 实现

```python
# Definition for a binary tree node
# 二叉树节点定义
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Invert Binary Tree Function
# 翻转二叉树函数
def invert_tree(root):
    if root is None:
        return None

    # Swap the left and right children
    # 交换左右子节点
    root.left, root.right = root.right, root.left

    # Recursively invert the left and right subtrees
    # 递归地翻转左右子树
    invert_tree(root.left)
    invert_tree(root.right)

    return root

# Example Usage
# 示例用法
root = TreeNode(4)
root.left = TreeNode(2)
root.right = TreeNode(7)
root.left.left = TreeNode(1)
root.left.right = TreeNode(3)
root.right.left = TreeNode(6)
root.right.right = TreeNode(9)

inverted_root = invert_tree(root)
# Output: 4, 7, 2, 9, 6, 3, 1 (in inverted form)
```

### Complexity Analysis
### 复杂度分析

| Algorithm | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Invert Tree | O(n) | O(n) |

| 算法 | 时间复杂度 | 空间复杂度 |
| ---- | ---------- | ---------- |
| 翻转二叉树 | O(n) | O(n) |

**Time Complexity:**
Traversing all nodes exactly once gives us O(n), where n is the number of nodes.
**时间复杂度:**
遍历所有节点一次，因此时间复杂度为O(n)，其中n是节点的数量。

**Space Complexity:**
In the worst case (a completely unbalanced tree), the space complexity is O(n) due to the recursive stack.
**空间复杂度:**
在最坏的情况下（完全不平衡的树），空间复杂度为O(n)，因为递归栈的存在。

### Tips or Better Solutions
### 提示或更好的解决方案

1. **Iterative Approach:** Using a queue can avoid the overhead of recursion.
2. **迭代方法:** 使用队列可以避免递归的开销。

#### Node.js Iterative Implementation
#### Node.js 迭代实现

```javascript
function invertTreeIterative(root) {
    if (root === null) return null;

    const queue = [];
    queue.push(root);

    while (queue.length > 0) {
        const current = queue.shift();

        // Swap the left and right children
        // 交换左右子节点
        const temp = current.left;
        current.left = current.right;
        current.right = temp;

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }

    return root;
}
```

#### Python Iterative Implementation
#### Python 迭代实现

```python
def invert_tree_iterative(root):
    if root is None:
        return None

    queue = []
    queue.append(root)

    while queue:
        current = queue.pop(0)

        # Swap the left and right children
        # 交换左右子节点
        current.left, current.right = current.right, current.left

        if current.left:
            queue.append(current.left)
        if current.right:
            queue.append(current.right)

    return root
```

By understanding both recursive and iterative approaches, you can choose the one that best fits your needs.
通过理解递归和迭代方法，你可以选择最适合你需求的方法。
