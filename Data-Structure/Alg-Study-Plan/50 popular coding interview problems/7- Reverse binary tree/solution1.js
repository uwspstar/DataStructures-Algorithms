// Time complexity: O(n)
// Space complexity: O(h)

class Tree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function reverseTree(root) {
  if (root == null) return;
  // preOrder
  [root.left, root.right] = [root.right, root.left];
  reverseTree(root.left);
  reverseTree(root.right);
}

//postOrder faster
var invertTree = function (root) {
  if (root === null) return root;
  let left = invertTree(root.left)
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}


