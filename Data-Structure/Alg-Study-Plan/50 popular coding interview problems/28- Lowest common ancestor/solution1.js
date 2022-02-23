// By getting paths:

// Time complexity: O(n)
// Space complexity: O(h)

class Tree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function getPath(root, path, num) {
  if (root == null) return false;
  path.push(root);
  if (root.data == num) return true;
  if (getPath(root.left, path, num) || getPath(root.right, path, num))
    return true;
  path.pop();
  return false;
}

function lowestCommonAncestor(root, num1, num2) {
  let pathNum1 = [];
  let pathNum2 = [];
  if (!getPath(root, pathNum1, num1) || !getPath(root, pathNum2, num2))
    return null;
  let minLength = Math.min(pathNum1.length, pathNum2.length);
  let i = 0;
  while (i < minLength) {
    if (pathNum1[i] == pathNum2[i]) i++;
    else break;
  }
  return pathNum1[i - 1];
}


