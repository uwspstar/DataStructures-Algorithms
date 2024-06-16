### Binary Search Tree (BST) for Sets and Maps

Binary Search Trees (BSTs) are often used to implement sets and maps (dictionaries) due to their efficient insertion, deletion, and lookup operations. In a BST, all elements in the left subtree are less than the root, and all elements in the right subtree are greater than the root. This property makes BSTs suitable for dynamic sets and maps where elements can be added or removed frequently.

二叉搜索树（BST）常用于实现集合（Set）和映射（Map，即字典），因为它们具有高效的插入、删除和查找操作。在BST中，左子树的所有元素都小于根节点，右子树的所有元素都大于根节点。这一性质使BST适用于动态集合和映射，其中元素可以频繁地添加或删除。

### Node.js Code Examples

#### Implementing a BST for Sets (集合)

In a BST-based set, each node stores a unique value. The operations include insertion, deletion, and search.

在基于BST的集合中，每个节点存储一个唯一值。操作包括插入、删除和查找。

```javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BSTSet {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        if (node === null) {
            return new TreeNode(value);
        }
        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else if (value > node.value) {
            node.right = this._insert(node.right, value);
        }
        return node;
    }

    contains(value) {
        return this._contains(this.root, value);
    }

    _contains(node, value) {
        if (node === null) {
            return false;
        }
        if (value === node.value) {
            return true;
        }
        if (value < node.value) {
            return this._contains(node.left, value);
        } else {
            return this._contains(node.right, value);
        }
    }

    remove(value) {
        this.root = this._remove(this.root, value);
    }

    _remove(node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this._remove(node.left, value);
        } else if (value > node.value) {
            node.right = this._remove(node.right, value);
        } else {
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }
            node.value = this._minValue(node.right);
            node.right = this._remove(node.right, node.value);
        }
        return node;
    }

    _minValue(node) {
        let minValue = node.value;
        while (node.left !== null) {
            node = node.left;
            minValue = node.value;
        }
        return minValue;
    }

    inorder() {
        this._inorder(this.root);
    }

    _inorder(node) {
        if (node !== null) {
            this._inorder(node.left);
            console.log(node.value);
            this._inorder(node.right);
        }
    }
}

// Example usage:
const bstSet = new BSTSet();
bstSet.insert(10);
bstSet.insert(20);
bstSet.insert(5);
console.log("Inorder traversal of the set:");
bstSet.inorder();
console.log("Set contains 10:", bstSet.contains(10));
console.log("Set contains 15:", bstSet.contains(15));
bstSet.remove(10);
console.log("Inorder traversal after removing 10:");
bstSet.inorder();
```

#### Implementing a BST for Maps (映射)

In a BST-based map, each node stores a key-value pair. The operations include insertion, deletion, search, and retrieval of values by key.

在基于BST的映射中，每个节点存储一个键值对。操作包括插入、删除、查找和按键检索值。

```javascript
class TreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BSTMap {
    constructor() {
        this.root = null;
    }

    insert(key, value) {
        this.root = this._insert(this.root, key, value);
    }

    _insert(node, key, value) {
        if (node === null) {
            return new TreeNode(key, value);
        }
        if (key < node.key) {
            node.left = this._insert(node.left, key, value);
        } else if (key > node.key) {
            node.right = this._insert(node.right, key, value);
        } else {
            node.value = value; // Update the value if key already exists
        }
        return node;
    }

    get(key) {
        return this._get(this.root, key);
    }

    _get(node, key) {
        if (node === null) {
            return null;
        }
        if (key === node.key) {
            return node.value;
        }
        if (key < node.key) {
            return this._get(node.left, key);
        } else {
            return this._get(node.right, key);
        }
    }

    containsKey(key) {
        return this._containsKey(this.root, key);
    }

    _containsKey(node, key) {
        if (node === null) {
            return false;
        }
        if (key === node.key) {
            return true;
        }
        if (key < node.key) {
            return this._containsKey(node.left, key);
        } else {
            return this._containsKey(node.right, key);
        }
    }

    remove(key) {
        this.root = this._remove(this.root, key);
    }

    _remove(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = this._remove(node.left, key);
        } else if (key > node.key) {
            node.right = this._remove(node.right, key);
        } else {
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }
            node.key = this._minKey(node.right);
            node.value = this._get(node.right, node.key);
            node.right = this._remove(node.right, node.key);
        }
        return node;
    }

    _minKey(node) {
        let minKey = node.key;
        while (node.left !== null) {
            node = node.left;
            minKey = node.key;
        }
        return minKey;
    }

    inorder() {
        this._inorder(this.root);
    }

    _inorder(node) {
        if (node !== null) {
            this._inorder(node.left);
            console.log(`Key: ${node.key}, Value: ${node.value}`);
            this._inorder(node.right);
        }
    }
}

// Example usage:
const bstMap = new BSTMap();
bstMap.insert(10, "ten");
bstMap.insert(20, "twenty");
bstMap.insert(5, "five");
console.log("Inorder traversal of the map:");
bstMap.inorder();
console.log("Map contains key 10:", bstMap.containsKey(10));
console.log("Value for key 10:", bstMap.get(10));
bstMap.remove(10);
console.log("Inorder traversal after removing key 10:");
bstMap.inorder();
```

### Comparison Table (比较表)

| Operation (操作) | Set (集合) | Map (映射) | Description (描述) |
| --- | --- | --- | --- |
| Insertion (插入) | `insert(value)` | `insert(key, value)` | Insert a value into the set or a key-value pair into the map. (将值插入集合或将键值对插入映射) |
| Deletion (删除) | `remove(value)` | `remove(key)` | Remove a value from the set or a key-value pair from the map. (从集合中删除值或从映射中删除键值对) |
| Search (查找) | `contains(value)` | `containsKey(key)` | Check if a value exists in the set or if a key exists in the map. (检查集合中是否存在值或映射中是否存在键) |
| Retrieval (检索) | N/A | `get(key)` | Retrieve the value associated with a key in the map. (检索与键关联的值) |

Understanding how to implement and use BSTs for sets and maps provides a foundation for handling dynamic collections of data efficiently.

了解如何实现和使用BST进行集合和映射操作，为高效处理动态数据集合提供了基础。
