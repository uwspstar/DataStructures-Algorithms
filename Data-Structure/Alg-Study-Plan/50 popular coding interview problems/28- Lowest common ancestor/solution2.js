// By checking if num1 is on the left and num2 is on the right or the opposite:

// Time complexity: O(n)
// Space complexity: O(h)

class Tree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function lowestCommonAncestor(root, num1, num2) {
  if (root == null) return null;
  if (root.data == num1 || root.data == num2) return root;
  let leftLCA = lowestCommonAncestor(root.left, num1, num2);
  let rightLCA = lowestCommonAncestor(root.right, num1, num2);
  if (leftLCA && rightLCA) return root;
  return leftLCA != null ? leftLCA : rightLCA;
}


