

//allTreeTemplate
{
    const treeSum = (root) => {
        if (root === null) return 0; // 0

        leftSum = treeSum(root.left);
        rightSum = treeSum(root.right);

        return root.val + leftSum + rightSum;
    };
}


//allTreeTemplate
{
    const nodeCount = (root) => {
        if (root === null) return 0; // 0

        leftCount = leftCount(root.left);
        rightCount = leftCount(root.right);

        return 1 + leftCount + rightCount;
    };
}



//allTreeTemplate
{
    const treeMaxValue = (root) => {
        if (root === null) return 0; // 0

        leftMaxValue = treeMaxValue(root.left);
        rightMaxValue = treeMaxValue(root.right);

        return Math.max(root.val + leftMaxValue + rightMaxValue);
    };
}

//allTreeTemplate
{
    const treeMaxHeight = (root) => {
        if (root === null) return 0; // 0

        leftMaxHeight = treeMaxHeight(root.left);
        rightMaxHeight = treeMaxHeight(root.right);

        return 1 + Math.max(leftMaxHeight + rightMaxHeight);
    };
}

//https://leetcode.com/problems/invert-binary-tree/
//allTreeTemplate
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