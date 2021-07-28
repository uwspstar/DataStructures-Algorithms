//翻转二叉树or镜像二叉树
//226. Invert Binary Tree
{
    //翻转二叉树or镜像二叉树: DFS
    const invertTree = function (root) {
        if (root === null) return root;
        let left = invertTree(root.left)
        let right = invertTree(root.right);
        root.left = right;
        root.right = left;
        return root;
    }

    const invertTree = root => {
        if (root === null) return root;
        invertTree(root.left);
        invertTree(root.right);
        [root.left, root.right] = [root.right, root.left];
        return root;
    }

    // 翻转二叉树or镜像二叉树: BFS
    const invertTree = root => {
        if (root == null) return null;
        let q = [root];
        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                [n.left, n.right] = [n.right, n.left]; // swap
                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
        }
        return root;
    };
}