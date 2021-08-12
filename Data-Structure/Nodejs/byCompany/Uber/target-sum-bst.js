//Given a binary tree, and a target number, find if there is a path from the root to any leaf that sums up to the target.

/*
We know we have reached a leaf node when root is equal to None (the parent node is a leaf node). Thus we can check if the target here is equal to 0, and if it is then we have reached our target sum and we should return True. Otherwise return False. If the node is not a leaf node, we should run the function recursively on the left node first, and check if it returns True. If it is then there is no need to run the recursive function on the right node, and we can just return True. If recursive function on the left node returns False, that means there is no path through the left child that sums up to the target, so we can perform the recursive function on the right node and see if it is still possible, and return the result of that recursive call. The above description can be simplified into an or condition between the left and right recursive calls.

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

def target_sum_bst(root, target):
  if root is None and target == 0:
    return True
  elif root is None:
    return False

  return (target_sum_bst(root.left, target - root.value) or
          target_sum_bst(root.right, target - root.value))

#      1
#    /   \
#   2     3
#    \     \
#     6     4


n6 = Node(6)
n4 = Node(4)
n3 = Node(3, None, n4)
n2 = Node(2, None, n6)
n1 = Node(1, n2, n3)

print(target_sum_bst(n1, 9))
# True
# Path from 1 -> 2 -> 6

The time complexity is O(n) for potentially traversing through all nodes, and the space complexity is O(h) where h is the maximum height of the binary tree.
*/