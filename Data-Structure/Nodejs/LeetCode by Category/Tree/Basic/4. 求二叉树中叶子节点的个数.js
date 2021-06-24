{
    const leafNodesCount = root => {
        if (root == NULL) return 0;
        if (root.left === NULL && root.right === NULL) return 1; // think about root

        return leafNodesCount(root.left) + leafNodesCount(root.right);
    }
}