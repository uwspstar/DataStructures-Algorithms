//255. Verify Preorder Sequence in ***Binary Search Tree***
//Given an array of unique integers preorder, return true if it is the correct preorder traversal sequence of a binary search tree
/*
Input: preorder = [5,2,1,3,6]
Output: true

https://www.geeksforgeeks.org/binary-search-tree-data-structure/
Binary Search Tree is a node-based binary tree data structure which has the following properties:

The left subtree of a node contains only nodes with keys lesser than the node’s key.
The right subtree of a node contains only nodes with keys greater than the node’s key.
The left and right subtree each must also be a binary search tree.

*/
{
    const verifyPreorder = preorder => {

        //left i * 2 + 1
        //right i * 2 + 2


    };
}
{
    let stack = new [];
    let inOrder = new [];

    for (int val : preorder) {
        if (!inOrder.isEmpty() && val < inOrder.peek()) return false;
        while (!stack.isEmpty() && val > stack.peek()) {
            // new traced parent node
            inOrder.push(stack.pop());
        }
        stack.push(val);
    }
    return true;
}