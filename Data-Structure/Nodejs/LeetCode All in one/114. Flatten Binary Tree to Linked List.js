//114. Flatten Binary Tree to Linked List
/*
Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.

Input: root = [1,2,5,3,4,null,6] Output: [1,null,2,null,3,null,4,null,5,null,6]
Input: root = [] Output: []
Input: root = [0] Output: [0]
*/
{
    var flatten = function (root) {
        if (!root) return root;

        const dfs = (n) => {
            if (!n) return null
            if (!n.left && !n.right) return n; //leaf node return

            let leftTail = dfs(n.left);
            let rightTail = dfs(n.right);

            // logic
            if (leftTail) {
                let rightHead = n.right;
                n.right = n.left
                n.left = null
                leftTail.right = rightHead;
            }

            return rightTail === null ? leftTail : rightTail; // need to have return
        }

        dfs(root);
        return root;
    };
}
//Flatten a Multilevel Doubly Linked List
//Correct a Binary Tree