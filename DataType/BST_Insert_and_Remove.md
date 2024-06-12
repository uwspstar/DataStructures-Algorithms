在二叉搜索树（BST）中，插入和删除是两个基本的操作。下面详细介绍这两个操作的实现方法。

### 插入操作

插入操作的目的是在二叉搜索树中添加一个新节点，并确保树的性质（左子树节点的值小于根节点的值，右子树节点的值大于根节点的值）保持不变。

#### 插入操作的实现

```python
class TreeNode:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def insert(root, key):
    # 如果树为空，返回一个新节点
    if root is None:
        return TreeNode(key)
    
    # 否则，递归地插入到子树
    if key < root.val:
        root.left = insert(root.left, key)
    else:
        root.right = insert(root.right, key)
    
    return root

# 测试插入操作
root = None
keys = [50, 30, 20, 40, 70, 60, 80]
for key in keys:
    root = insert(root, key)

# 打印中序遍历
def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.val, end=' ')
        inorder_traversal(root.right)

print("Inorder traversal after insertion:")
inorder_traversal(root)
print()
```

### 删除操作

删除操作的目的是从二叉搜索树中移除一个节点，并确保树的性质保持不变。删除操作需要考虑三种情况：
1. 要删除的节点是叶子节点。
2. 要删除的节点只有一个子节点。
3. 要删除的节点有两个子节点。

#### 删除操作的实现

```python
def delete_node(root, key):
    if root is None:
        return root
    
    # 如果要删除的值小于根节点的值，在左子树中删除
    if key < root.val:
        root.left = delete_node(root.left, key)
    # 如果要删除的值大于根节点的值，在右子树中删除
    elif key > root.val:
        root.right = delete_node(root.right, key)
    # 找到要删除的节点
    else:
        # 节点只有一个子节点或没有子节点
        if root.left is None:
            return root.right
        elif root.right is None:
            return root.left
        
        # 节点有两个子节点，找到右子树中的最小值节点
        temp = min_value_node(root.right)
        
        # 用右子树中的最小值节点替换当前节点的值
        root.val = temp.val
        
        # 删除右子树中的最小值节点
        root.right = delete_node(root.right, temp.val)
    
    return root

def min_value_node(node):
    current = node
    while current.left is not None:
        current = current.left
    return current

# 测试删除操作
root = delete_node(root, 20)
print("Inorder traversal after deleting 20:")
inorder_traversal(root)
print()

root = delete_node(root, 30)
print("Inorder traversal after deleting 30:")
inorder_traversal(root)
print()

root = delete_node(root, 50)
print("Inorder traversal after deleting 50:")
inorder_traversal(root)
print()
```

### 复杂度分析

- **插入操作**：
  - 时间复杂度：平均为 \(O(\log n)\)，最坏为 \(O(n)\)。
  - 空间复杂度：递归调用栈的深度为 \(O(h)\)，其中 \(h\) 是树的高度。

- **删除操作**：
  - 时间复杂度：平均为 \(O(\log n)\)，最坏为 \(O(n)\)。
  - 空间复杂度：递归调用栈的深度为 \(O(h)\)，其中 \(h\) 是树的高度。

### 总结

通过上述代码和详细解释，我们可以清晰地了解二叉搜索树中插入和删除操作的实现方法及其复杂度分析。在实际应用中，保持二叉搜索树的平衡非常重要，可以考虑使用平衡树（如AVL树或红黑树）来优化性能。如果有其他问题或需要进一步的解释，请随时告诉我。
