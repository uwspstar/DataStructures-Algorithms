### BST Traversal

In a Binary Search Tree (BST), traversal refers to visiting all the nodes in a specific order. The common traversal methods are:

- **Preorder Traversal**: Visit the root, then the left subtree, and finally the right subtree.
- **Inorder Traversal**: Visit the left subtree, then the root, and finally the right subtree. This traversal returns the nodes in ascending order.
- **Postorder Traversal**: Visit the left subtree, then the right subtree, and finally the root.
- **Level Order Traversal**: Visit the nodes level by level from top to bottom.

在二叉搜索树（BST）中，遍历指的是以特定顺序访问所有节点。常见的遍历方法有：

- **前序遍历**：先访问根节点，然后访问左子树，最后访问右子树。
- **中序遍历**：先访问左子树，然后访问根节点，最后访问右子树。这种遍历以升序返回节点。
- **后序遍历**：先访问左子树，然后访问右子树，最后访问根节点。
- **层序遍历**：从上到下逐层访问节点。

#### Node.js Code Examples

##### Preorder Traversal (前序遍历)

```javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function preorderTraversal(root) {
    if (root !== null) {
        console.log(root.value);
        preorderTraversal(root.left);
        preorderTraversal(root.right);
    }
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Preorder Traversal:");
preorderTraversal(root);
```

##### Inorder Traversal (中序遍历)

```javascript
function inorderTraversal(root) {
    if (root !== null) {
        inorderTraversal(root.left);
        console.log(root.value);
        inorderTraversal(root.right);
    }
}

console.log("Inorder Traversal:");
inorderTraversal(root);
```

##### Postorder Traversal (后序遍历)

```javascript
function postorderTraversal(root) {
    if (root !== null) {
        postorderTraversal(root.left);
        postorderTraversal(root.right);
        console.log(root.value);
    }
}

console.log("Postorder Traversal:");
postorderTraversal(root);
```

##### Level Order Traversal (层序遍历)

```javascript
function levelOrderTraversal(root) {
    if (root === null) {
        return;
    }

    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        console.log(node.value);
        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
    }
}

console.log("Level Order Traversal:");
levelOrderTraversal(root);
```

### Comparison Table (比较表)

| Traversal Method | Description | 时间复杂度 | 空间复杂度 |
| --- | --- | --- | --- |
| Preorder (前序遍历) | Visit root, left subtree, right subtree (访问根节点，左子树，右子树) | O(n) | O(h) |
| Inorder (中序遍历) | Visit left subtree, root, right subtree (访问左子树，根节点，右子树) | O(n) | O(h) |
| Postorder (后序遍历) | Visit left subtree, right subtree, root (访问左子树，右子树，根节点) | O(n) | O(h) |
| Level Order (层序遍历) | Visit nodes level by level (逐层访问节点) | O(n) | O(w) |

- \( n \): Number of nodes in the tree (树中的节点数)
- \( h \): Height of the tree (树的高度)
- \( w \): Width of the tree (树的宽度)

Understanding and implementing these traversal methods will help you effectively navigate and manipulate binary search trees.

理解并实现这些遍历方法将帮助您有效地导航和操作二叉搜索树。
