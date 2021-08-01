//计算一棵二叉树有多少个节点
{
    const countNode = root => {
        //step 1 : only,if only, have root node
        if (root === null) return 0;
        if (root.left === null && root.right === null) return 1;

        let res = 0;

        //step 2 : only,if only, have root left subtree node
        let leftCount = count(root.left);

        //step 3 : only,if only, have root right subtree node

        let rightCount = count(root.right);

        // think about merge sort (postOrder)
        res = leftCount + rightCount + 1; // 1 is root

        return res;
    }
    //Inorder Successor in BST II
    //Path With Maximum Minimum Value
    //All Elements in Two Binary Search Trees
}