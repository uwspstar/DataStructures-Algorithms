/*
Solve the problem [JavaScript]
Given a binary tree if integers root, create a boolean function that checks if it's a balanced binary tree. A binary tree is considered as balanced if its left and right subtree are balanced, and the difference between their heights is at most 1

Example 1:
Input: root = [5, 8, 1, 6, 7, 2, 3, 9, null, null, null, null, null, null, 4]
Output: true

Example 2:
Input: root = [5, 8, null, 6, 7, 9]
Output: false

Explanation: the height of the left subtree is 3, but the height of the right subtree is 0, the difference is greater than 1, we deduce that the tree is not balanced

Example 2:
Input: root = [5, 8, null, 6, 7, 9]
Output: false

Explanation: the height of the left subtree is 3, but the height of the right subtree is 0, the difference is greater than 1, we deduce that the tree is not balanced

Example 3:
Input: root = [5, 8, 1, 6, 7, null, 3, 9, null, null, null, null, 4]
Output: false

Explanation: The height of the left subtree of the right subtree is 0, but the height of the right subtree of the right subtree is 2, the difference is greater than 1, we deduce that the right subtree is not balanced, it implies that the whole binary tree is not balanced
*/
{
    // Time complexity: O(nlogn)
    // Space complexity: O(h)
    class Tree {
        constructor(data, left = null, right = null) {
            this.data = data;
            this.left = left;
            this.right = right;
        }
    }

    function height(root) {
        if (root == null) return -1;
        let lefth = height(root.left);
        let righth = height(root.right);
        return 1 + Math.max(lefth, righth);
    }

    function isBalanced(root) {
        if (root == null) return true;
        let lefth = height(root.left);
        let righth = height(root.right);
        return Math.abs(lefth - righth) <= 1 && isBalanced(root.left) && isBalanced(root.right)
    }
}
{
    // Time complexity: O(n)
    // Space complexity: O(h)

    class Tree {
        constructor(data, left = null, right = null) {
            this.data = data;
            this.left = left;
            this.right = right;
        }
    }

    function rec(root, output) {
        if (root == null) return -1;
        let lefth = rec(root.left, output);
        let righth = rec(root.right, output);
        if (Math.abs(lefth - righth) > 1) output[0] = false;
        return 1 + Math.max(lefth, righth);
    }

    function isBalanced(root) {
        let output = [true];
        rec(root, output);
        return output[0];
    }


}