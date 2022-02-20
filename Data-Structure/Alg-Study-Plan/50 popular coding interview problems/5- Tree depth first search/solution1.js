// Time complexity: O(n)
// Space complexity: O(h)

class Tree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function dfsPreorder(root) {
  if (root == null) return;
  console.log(root.data);
  dfsPreorder(root.left);
  dfsPreorder(root.right);
}

function dfsInorder(root) {
  if (root == null) return;
  dfsInorder(root.left);
  console.log(root.data);
  dfsInorder(root.right);
}

function dfsPostorder(root) {
  if (root == null) return;
  dfsPostorder(root.left);
  dfsPostorder(root.right);
  console.log(root.data);
}


