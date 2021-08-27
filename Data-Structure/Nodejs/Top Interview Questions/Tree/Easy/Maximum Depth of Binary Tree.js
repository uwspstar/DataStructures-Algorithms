{
    var maxDepth = function (root) {
        if (root === null) return 0;

        let leftMaxDepth = maxDepth(root.left);
        let rightMaxDepth = maxDepth(root.right)

        return Math.max(leftMaxDepth, rightMaxDepth) + 1;
    }
}
{
    //T: O(N)
    //
    var maxDepth = function (root) {
        if (root === null) return 0;
        let q = [root]; // has root, depth = 0
        let depth = 0;
        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
            depth++;
        }
        return depth;
    };
}