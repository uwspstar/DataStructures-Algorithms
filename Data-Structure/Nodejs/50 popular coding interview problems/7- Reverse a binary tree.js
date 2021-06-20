/*
Given a binary tree of integers root, create a function that reverses it left to right in-place.

Input: root = [1, 2, 3, 4, 5, 6, 7] Output: [1, 3, 2, 7, 6, 5, 4]

Input: root = [6, 8, 13, 2, 1, 5, null, 7]
Output: [6, 13, 8, null, 5, 1, 2, null, null, null, null, null, 7]

*/
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

    function invertTree(root) {
        if (root === null) return;
        [root.left, root.right] = [root.right, root.left];
        invertTree(root.left);
        invertTree(root.right);
    }
}
{
    const reverseBTree = root => {
        if (root === null) return root;
        let leftTree = reverseBTree(root.left);
        let rightTree = reverseBTree(root.right);
        root.right = leftTree;
        root.left = rightTree;
        return root;
    }
}