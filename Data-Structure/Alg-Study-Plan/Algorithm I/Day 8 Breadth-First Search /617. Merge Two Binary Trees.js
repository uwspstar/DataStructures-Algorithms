{
    var mergeTrees = function (root1, root2) {
        if (root1 === null) return root2;
        if (root2 === null) return root1;

        let q = [[root1, root2]];

        while (q.length > 0) {
            let sz = q.length;

            for (let i = 0; i < sz; i++) {
                let [n1, n2] = q.shift();

                n1.val += n2.val;

                if (n1.left !== null && n2.left !== null) {
                    q.push([n1.left, n2.left])
                }

                if (n1.right !== null && n2.right !== null) {
                    q.push([n1.right, n2.right])
                }

                if (n1.left === null && n2.left !== null) {
                    n1.left = n2.left;
                }

                if (n1.right === null && n2.right !== null) {
                    n1.right = n2.right;
                }
            }
        }
        return root1;
    };
}
{
    var mergeTrees = function (root1, root2) {
        if (root1 === null) return root2;
        if (root2 === null) return root1;

        let node = new TreeNode(root1.val + root2.val);
        // left : left tree node after merge left subtrees
        let left = mergeTrees(root1.left, root2.left)
        let right = mergeTrees(root1.right, root2.right);
        node.left = left;
        node.right = right;

        return node;
    }
}