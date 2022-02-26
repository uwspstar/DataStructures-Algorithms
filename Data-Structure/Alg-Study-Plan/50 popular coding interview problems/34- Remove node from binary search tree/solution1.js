// Time complexity: O(h)
// Space complexity: O(h)

class Tree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function getMinNode(root) {
  while (root.left !== null) root = root.left;
  return root;
}

function deleteNodeBst(root, num) {
  if (root === null) {
    return null;
  } else if (num < root.data) {
    root.left = deleteNodeBst(root.left, num);
  } else if (num > root.data) {
    root.right = deleteNodeBst(root.right, num);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      let successor = getMinNode(root.right); // find the right side smallest tree node; after replace with right data, and deleted
      root.data = successor.data;
      root.right = deleteNodeBst(root.right, successor.data); // recursive again
    }
  }
  return root;
}


