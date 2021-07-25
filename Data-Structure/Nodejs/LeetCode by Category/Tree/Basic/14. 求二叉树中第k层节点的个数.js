
{
    //求二叉树中第k层节点的个数 : DFS
    const numsOfkLevelTreeNode = (root, k) => {
        if (root === null || k < 1) return 0;
        if (k === 1) return 1;
        let leftNum = numsOfkLevelTreeNode(root.left, k - 1);
        let rightNum = numsOfkLevelTreeNode(root.right, k - 1);
        return leftNum + rightNum;

    }

    //求二叉树中第k层节点的个数 : BFS
    const numsOfkLevelTreeNode = (root, k) => {
        if (root === null || k < 1) return 0;
        if (k === 1) return 1;
        let level = 1;
        let s = [root];
        let res = 0;
        while (s.length > 0) {
            let sz = s.length;
            if (level === k) {
                return res = sz;
            }
            for (let i = 0; i < sz; i++) {
                let n = s.shift();
                n.left && s.push(n.left);
                n.right && s.push(n.right);
            }
            level++;
        }
        if (level < k ) return; // need to ask whether k always smaller than level
        return res;
    }
}