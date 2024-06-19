### Binary Tree Inorder Traversal (二叉树中序遍历)

Inorder traversal of a binary tree is a depth-first traversal method where nodes are visited in the following order:
1. Left subtree
2. Root node
3. Right subtree

二叉树的中序遍历是一种深度优先遍历方法，按以下顺序访问节点：
1. 左子树
2. 根节点
3. 右子树

### Recursive Approach (递归方法)

The recursive approach for inorder traversal is straightforward. You start at the root and recursively visit the left subtree, then the root, and finally the right subtree.

递归方法的中序遍历非常简单。从根节点开始，递归地访问左子树，然后是根节点，最后是右子树。

#### Node.js Code Example:

```javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inorderTraversal(root) {
    const result = [];
    function traverse(node) {
        if (node !== null) {
            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        }
    }
    traverse(root);
    return result;
}

// Example usage:
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(inorderTraversal(root)); // Output: [1, 3, 2]
```

#### Python Code Example:

```python
class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

def inorder_traversal(root):
    result = []
    def traverse(node):
        if node:
            traverse(node.left)
            result.append(node.value)
            traverse(node.right)
    traverse(root)
    return result

# Example usage:
root = TreeNode(1)
root.right = TreeNode(2)
root.right.left = TreeNode(3)

print(inorder_traversal(root))  # Output: [1, 3, 2]
```

**详细过程解释**：

1. 从根节点开始，如果节点不为空，则递归遍历其左子树。
2. 将节点值添加到结果数组中。
3. 递归遍历节点的右子树。

### Iterative Approach (迭代方法)

The iterative approach uses a stack to simulate the system's call stack in the recursive approach. This method involves pushing nodes onto the stack and then processing them.

迭代方法使用栈来模拟递归方法中的系统调用栈。这种方法涉及将节点压入栈中，然后处理它们。

#### Node.js Code Example:

```javascript
function inorderTraversalIterative(root) {
    const result = [];
    const stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.value);
        current = current.right;
    }

    return result;
}

// Example usage:
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(inorderTraversalIterative(root)); // Output: [1, 3, 2]
```

#### Python Code Example:

```python
def inorder_traversal_iterative(root):
    result, stack = [], []
    current = root
    while current or stack:
        while current:
            stack.append(current)
            current = current.left
        current = stack.pop()
        result.append(current.value)
        current = current.right
    return result

# Example usage:
root = TreeNode(1)
root.right = TreeNode(2)
root.right.left = TreeNode(3)

print(inorder_traversal_iterative(root))  # Output: [1, 3, 2]
```

**详细过程解释**：

1. 初始化一个空栈和一个指向当前节点的指针。
2. 当当前节点不为空或栈不为空时，执行以下步骤：
   - 将当前节点压入栈中，并移动到其左子节点。
   - 如果当前节点为空，则从栈中弹出一个节点，并将其值添加到结果数组中，然后移动到其右子节点。

### Comparison Table (比较表)

| Method 方法 | Time Complexity 时间复杂度 | Space Complexity 空间复杂度 | Description 描述 |
| --- | --- | --- | --- |
| Recursive 递归 | O(n) | O(h) | Simple implementation, uses system stack 简单实现，使用系统栈 |
| Iterative 迭代 | O(n) | O(h) | Uses an explicit stack, avoids function call overhead 使用显式栈，避免函数调用开销 |

- \( n \): Number of nodes in the tree (树中的节点数)
- \( h \): Height of the tree (树的高度)

### Use Cases and Tips (用例和提示)

#### Use Cases (用例)

1. **Expression Trees 表达式树**：Inorder traversal of an expression tree gives the infix expression.
2. **Binary Search Trees 二叉搜索树**：Inorder traversal of a binary search tree gives the nodes in sorted order.

1. **表达式树**：表达式树的中序遍历给出中缀表达式。
2. **二叉搜索树**：二叉搜索树的中序遍历给出排序后的节点。

#### Tips (提示)

- **Understand the Tree Structure 理解树结构**：Before implementing, ensure you understand the binary tree's structure and properties.
- **Choose the Right Approach 选择合适的方法**：Use the recursive approach for simplicity and the iterative approach for efficiency and control over stack usage.
- **Handle Edge Cases 处理边界情况**：Consider edge cases such as empty trees or trees with a single node.

通过理解这些方法和使用场景，您可以高效地进行二叉树的中序遍历，适应各种计算问题的需求。
