You are given a binary tree representation of an arithmetic expression. In this tree, each leaf is an integer value,, and a non-leaf node is one of the four operations: '+', '-', '*', or '/'.

Write a function that takes this tree and evaluates the expression.

Example:

    *
   / \
  +    +
 / \  / \
3  2  4  5

This is a representation of the expression (3 + 2) * (4 + 5), and should return 45.


To solve this problem, you can traverse the binary tree recursively and evaluate the expression at each node. When you encounter a non-leaf node, you perform the corresponding arithmetic operation on the values of its left and right subtrees.

Here's a Python function to accomplish this task:

class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def evaluate_expression(root):
    if root is None:
        return 0
    
    if root.value.isdigit():
        return int(root.value)
    
    left_val = evaluate_expression(root.left)
    right_val = evaluate_expression(root.right)
    
    if root.value == '+':
        return left_val + right_val
    elif root.value == '-':
        return left_val - right_val
    elif root.value == '*':
        return left_val * right_val
    elif root.value == '/':
        return left_val / right_val

# Example usage:
# Constructing the binary tree
root = TreeNode("*")
root.left = TreeNode("+")
root.right = TreeNode("+")
root.left.left = TreeNode("3")
root.left.right = TreeNode("2")
root.right.left = TreeNode("4")
root.right.right = TreeNode("5")

# Evaluating the expression
result = evaluate_expression(root)
print("Result:", result)  # Output: Result: 45


This code defines a TreeNode class to represent the nodes of the binary tree. The evaluate_expression function recursively evaluates the expression by performing arithmetic operations based on the values of the nodes. Finally, an example usage demonstrates how to construct the binary tree and evaluate the expression.
