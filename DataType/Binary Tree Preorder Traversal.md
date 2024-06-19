### Binary Tree Preorder Traversal
### 二叉树的前序遍历

**Preorder Traversal:** Visit the root node, then recursively visit the left subtree, and finally, the right subtree.
**前序遍历:** 先访问根节点，然后递归访问左子树，最后递归访问右子树。

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

// Preorder Traversal Function
// 前序遍历函数
function preorderTraversal(root) {
    const result = [];
    traverse(root, result);
    return result;
}

// Helper function to perform the traversal
// 执行遍历的辅助函数
function traverse(node, result) {
    if (node !== null) {
        result.push(node.val); // Visit root
        traverse(node.left, result); // Visit left subtree
        traverse(node.right, result); // Visit right subtree
    }
}

// Example Usage
// 示例用法
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(preorderTraversal(root)); // Output: [1, 2, 3]
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

# Preorder Traversal Function
# 前序遍历函数
def preorder_traversal(root):
    result = []
    traverse(root, result)
    return result

# Helper function to perform the traversal
# 执行遍历的辅助函数
def traverse(node, result):
    if node is not None:
        result.append(node.val)  # Visit root
        traverse(node.left, result)  # Visit left subtree
        traverse(node.right, result)  # Visit right subtree

# Example Usage
# 示例用法
root = TreeNode(1)
root.right = TreeNode(2)
root.right.left = TreeNode(3)

print(preorder_traversal(root))  # Output: [1, 2, 3]
```

### Complexity Analysis
### 复杂度分析

| Algorithm | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Preorder Traversal | O(n) | O(n) |

| 算法 | 时间复杂度 | 空间复杂度 |
| ---- | ---------- | ---------- |
| 前序遍历 | O(n) | O(n) |

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

1. **Iterative Approach:** Using a stack can avoid the overhead of recursion.
2. **迭代方法:** 使用栈可以避免递归的开销。

#### Node.js Iterative Implementation
#### Node.js 迭代实现

```javascript
function preorderTraversalIterative(root) {
    const result = [];
    const stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        while (current !== null) {
            result.push(current.val); // Visit root
            stack.push(current);
            current = current.left; // Visit left subtree
        }
        current = stack.pop();
        current = current.right; // Visit right subtree
    }
    return result;
}
```

#### Python Iterative Implementation
#### Python 迭代实现

```python
def preorder_traversal_iterative(root):
    result = []
    stack = []
    current = root

    while current is not None or stack:
        while current is not None:
            result.append(current.val)  # Visit root
            stack.append(current)
            current = current.left  # Visit left subtree
        current = stack.pop()
        current = current.right  # Visit right subtree

    return result
```

By understanding both recursive and iterative approaches, you can choose the one that best fits your needs.
通过理解递归和迭代方法，你可以选择最适合你需求的方法。
