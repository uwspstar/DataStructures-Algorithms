var mergeTrees = function (root1, root2) {
    if (root1 === null) return root2;
    if (root2 === null) return root1;

    //DFS
    root1.val += root2.val;                               // 中
    root1.left = mergeTrees(root1.left, root2.left);      // 左
    root1.right = mergeTrees(root1.right, root2.right);   // 右 

    return root1;
};