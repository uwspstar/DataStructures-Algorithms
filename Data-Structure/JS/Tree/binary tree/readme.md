---
marp: true
---

# Binary tree

- https://www.geeksforgeeks.org/binary-tree-data-structure/
- https://medium.com/smelly-code/a-bit-about-binary-tree-111e2d600974
- `Binary tree` is a tree where each node can have maximum two children.
- Since there are only two children so it’s quite intuitive to call them left and right child.

---

```js
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTreeNode(10);
const left = new BinaryTreeNode(20);
const right = new BinaryTreeNode(30);
root.left = left;
root.right = right;
console.log(root);
// Our first binary tree.
//
//    10
//   /  \
//  20   30
```

---

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BTree {
  constructor() {
    this.root = null;
  }
  insertNode(node, newNode) {}
  insert(value) {}
  traversal(value) {}
  search(value) {}
  remove(value) {}
}
```
