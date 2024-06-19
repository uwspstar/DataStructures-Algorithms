### Binary Tree Preorder Traversal
### 二叉树的前序遍历

#### Explanation
Preorder traversal of a binary tree involves visiting the root node first, followed by the left subtree, and finally the right subtree.
前序遍历二叉树的顺序是先访问根节点，然后访问左子树，最后访问右子树。

#### Node.js Example
```javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function preorderTraversal(root) {
    let result = [];
    function traverse(node) {
        if (node === null) return;
        result.push(node.value); // Visit the root node
        traverse(node.left); // Visit the left subtree
        traverse(node.right); // Visit the right subtree
    }
    traverse(root);
    return result;
}

// Example Usage
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(preorderTraversal(root)); // Output: [1, 2, 4, 5, 3]
```
### 解释代码行
1. 定义TreeNode类来表示二叉树的节点。
2. 定义preorderTraversal函数来执行前序遍历。
3. 初始化结果数组。
4. 定义递归函数traverse来遍历树。
5. 检查节点是否为null，如果是，返回。
6. 将节点的值添加到结果数组中。
7. 递归调用traverse遍历左子树。
8. 递归调用traverse遍历右子树。
9. 返回结果数组。

#### Python Example
```python
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def preorder_traversal(root):
    result = []
    def traverse(node):
        if node is None:
            return
        result.append(node.value) # Visit the root node
        traverse(node.left) # Visit the left subtree
        traverse(node.right) # Visit the right subtree
    traverse(root)
    return result

# Example Usage
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

print(preorder_traversal(root)) # Output: [1, 2, 4, 5, 3]
```
### 解释代码行
1. 定义TreeNode类来表示二叉树的节点。
2. 定义preorder_traversal函数来执行前序遍历。
3. 初始化结果列表。
4. 定义递归函数traverse来遍历树。
5. 检查节点是否为None，如果是，返回。
6. 将节点的值添加到结果列表中。
7. 递归调用traverse遍历左子树。
8. 递归调用traverse遍历右子树。
9. 返回结果列表。

#### Big-O Analysis
### 时间和空间复杂度分析
| Complexity | Time | Space |
| --- | --- | --- |
| Preorder Traversal | O(n) | O(n) |

- **Time Complexity 时间复杂度:** O(n) because each node is visited once. 因为每个节点都被访问一次。
- **Space Complexity 空间复杂度:** O(n) in the worst case for the call stack due to recursion. 最坏情况下，递归调用栈的空间复杂度为O(n)。

#### Tips
- Iterative solution using a stack can be implemented to avoid recursion, which may be more efficient for deep trees.
- 可以使用栈来实现迭代解决方案，以避免递归，这对于深度树可能更有效。
