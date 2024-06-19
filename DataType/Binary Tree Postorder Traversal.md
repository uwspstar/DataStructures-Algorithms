### Binary Tree Postorder Traversal
### 二叉树的后序遍历

**Postorder Traversal:** Recursively visit the left subtree, then the right subtree, and finally the root node.
**后序遍历:** 先递归访问左子树，然后递归访问右子树，最后访问根节点。

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

// Postorder Traversal Function
// 后序遍历函数
function postorderTraversal(root) {
    const result = [];
    traverse(root, result);
    return result;
}

// Helper function to perform the traversal
// 执行遍历的辅助函数
function traverse(node, result) {
    if (node !== null) {
        traverse(node.left, result); // Visit left subtree
        traverse(node.right, result); // Visit right subtree
        result.push(node.val); // Visit root
    }
}

// Example Usage
// 示例用法
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(postorderTraversal(root)); // Output: [4, 5, 2, 3, 1]
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

# Postorder Traversal Function
# 后序遍历函数
def postorder_traversal(root):
    result = []
    traverse(root, result)
    return result

# Helper function to perform the traversal
# 执行遍历的辅助函数
def traverse(node, result):
    if node is not None:
        traverse(node.left, result)  # Visit left subtree
        traverse(node.right, result)  # Visit right subtree
        result.append(node.val)  # Visit root

# Example Usage
# 示例用法
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

print(postorder_traversal(root))  # Output: [4, 5, 2, 3, 1]
```

### Complexity Analysis
### 复杂度分析

| Algorithm | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Postorder Traversal | O(n) | O(n) |

| 算法 | 时间复杂度 | 空间复杂度 |
| ---- | ---------- | ---------- |
| 后序遍历 | O(n) | O(n) |

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

1. **Iterative Approach:** Using two stacks can avoid the overhead of recursion.
2. **迭代方法:** 使用两个栈可以避免递归的开销。

#### Node.js Iterative Implementation
#### Node.js 迭代实现

```javascript
function postorderTraversalIterative(root) {
    const result = [];
    if (root === null) return result;

    const stack1 = [];
    const stack2 = [];
    stack1.push(root);

    while (stack1.length > 0) {
        const node = stack1.pop();
        stack2.push(node);

        if (node.left !== null) stack1.push(node.left);
        if (node.right !== null) stack1.push(node.right);
    }

    while (stack2.length > 0) {
        result.push(stack2.pop().val);
    }

    return result;
}
```

#### Python Iterative Implementation
#### Python 迭代实现

```python
def postorder_traversal_iterative(root):
    if root is None:
        return []

    result = []
    stack1 = []
    stack2 = []
    stack1.append(root)

    while stack1:
        node = stack1.pop()
        stack2.append(node)

        if node.left:
            stack1.append(node.left)
        if node.right:
            stack1.append(node.right)

    while stack2:
        result.append(stack2.pop().val)

    return result
```

By understanding both recursive and iterative approaches, you can choose the one that best fits your needs.
通过理解递归和迭代方法，你可以选择最适合你需求的方法。
