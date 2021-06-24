/*
How to solve (almost) any binary tree coding problem
- https://www.youtube.com/watch?v=s2Yyk3qdy3o
# steps

- step 1: Finding one or more base cases
- step 2: calling the same function on the left subtree
- step 3: calling the same function on the right subtree
- step 4: Join the results
*/
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
//treeSum (sum all nodes' value)
{
    const treeSum = (root) => {
        if (root === null) return 0; // 0

        let leftSum = treeSum(root.left);
        let rightSum = treeSum(root.right);

        return root.val + leftSum + rightSum;
    };
}

//nodeCount (total node)
{
    const nodeCount = (root) => {
        if (root === null) return 0; // 0, after this step, root is 1

        let leftCount = leftCount(root.left);
        let rightCount = leftCount(root.right);

        return 1 + leftCount + rightCount;
    };
}

//treeMaxValue : max value of the tree
{
    const treeMaxValue = (root) => {
        if (root === null) return 0; // 0, after this step, compare with root val also

        let leftMaxValue = treeMaxValue(root.left);
        let rightMaxValue = treeMaxValue(root.right);

        return Math.max(root.val + leftMaxValue + rightMaxValue);
    };
}

//treeMaxHeight :  tree depth
{
    const treeMaxHeight = (root) => {
        if (root === null) return 0; // 0

        let leftMaxHeight = treeMaxHeight(root.left);
        let rightMaxHeight = treeMaxHeight(root.right);

        return 1 + Math.max(leftMaxHeight + rightMaxHeight);
    };
}

//https://leetcode.com/problems/invert-binary-tree/
//reverseTree : left to right; right to left
{
    const reverseTree = (root) => {
        if (root === null) return root; // 0

        let leftTree = reverseTree(root.left);
        let rightTree = reverseTree(root.right);
        root.left = rightTree;
        root.right = leftTree;
        return root;
    };
}

{
    const reverseTree = (root) => {
        if (root === null) return root; // 0
        [root.left, root.right] = [root.right, root.left];
        reverseTree(root.left);
        reverseTree(root.right);
        return root;
    };
}
{
    ////postOrder faster
    const reverseTree = (root) => {
        if (root === null) return root; // 0
        reverseTree(root.left);
        reverseTree(root.right);
        [root.left, root.right] = [root.right, root.left];
        return root;
    };
}