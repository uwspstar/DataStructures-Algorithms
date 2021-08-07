//asked by Apple:
/*
You are given the root of a binary tree, along with two nodes, A and B. Find and return the lowest common ancestor of A and B. For this problem, you can assume that each node also has a pointer to its parent, along with its left and right child.
*/
{


    const lca = (root, p, q) => {
        if (root === null || p === null || q === null) return root;

        let left = lca(root.left, p, q);
        let right = lca(root.right, p, q);

        if (left === null) return right;
        if (right === null) return left;

        return root;
    }
}
/*
class TreeNode:
  def __init__(self, val):
    self.left = None
    self.right = None
    self.parent = None
    self.val = val


def lowestCommonAncestor(root, a, b):
  def depth(node):
    count = 0
    while node:
      count += 1
      node = node.parent
    return count

  depth_a, depth_b = depth(a), depth(b)
  if depth_a < depth_b:
    while depth_a < depth_b:
      b = b.parent
      depth_b -= 1
  elif depth_a > depth_b:
    while depth_a > depth_b:
      a = a.parent
      depth_a -= 1
  while a and b and (a is not b):
    a = a.parent
    b = b.parent
  return a if (a is b) else None
  */