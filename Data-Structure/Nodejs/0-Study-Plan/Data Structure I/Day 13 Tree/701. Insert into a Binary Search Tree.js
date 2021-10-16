/*
701. Insert into a Binary Search Tree 
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them. 

Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]
Explanation: Another accepted tree is:
*/
var insertIntoBST = function (root, val) {

    if (root === null) return new TreeNode(val);

    if (val > root.val) {// insert into the right subtree
        root.right = insertIntoBST(root.right, val);
    }
    else {// insert into the left subtree
        root.left = insertIntoBST(root.left, val);
    }
    return root;

};