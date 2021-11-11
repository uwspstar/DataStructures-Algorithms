{//binary tree
    const traverse = (root) => {
        if (root == null) return;
        traverse(root.left);
        traverse(root.right);
    }
}
{
    // N-ary tree
    const traverse = (root) => {
        if (root == null) return;
        for (let child of children) {
            traverse(child);
        }
    }
}