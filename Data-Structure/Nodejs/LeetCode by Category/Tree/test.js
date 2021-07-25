const treeMaxDepth = root => {
    if (root === null) return 0;
    let leftTreeDepth = treeMaxDepth(node.left);
    let rightTreeDepth = treeMaxDepth(node.right);
    return Math.max(leftTreeDepth, rightTreeDepth) + 1;
}


