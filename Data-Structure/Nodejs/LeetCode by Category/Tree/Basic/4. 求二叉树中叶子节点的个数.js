//求二叉树中叶子节点的个数
{
    const leafNodesCount = root => {
        if (root == NULL) return 0;
        if (root.left === NULL && root.right === NULL) return 1; // think about root

        return leafNodesCount(root.left) + leafNodesCount(root.right);
    }
}
{
    //求二叉树中叶子节点的个数 : DFS
    const leafNodeCount = root => {
        if (root === null) return 0;
        if (root.left === null && root.right === null) return 1;

        let leftLeafNodeCount = leafNodeCount(root.left);
        let rightLeafNodeCount = leafNodeCount(root.right);

        return leftLeafNodeCount + rightLeafNodeCount;
    }

    const leafNodeCount = root => {
        if (root === null) return 0;
        let res = 0;
        const dfs = (n, res) => {
            if (n === null) return;
            if (n.left === null && n.right === null) res++;
            n.left && dfs(n.left);
            n.right && dfs(n.right);
        }
        dfs(root, 0);
        return res;

    }
}