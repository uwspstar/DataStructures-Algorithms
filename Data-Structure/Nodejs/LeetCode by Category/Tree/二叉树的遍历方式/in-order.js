//94. Binary Tree Inorder Traversal
// stack, left go to end first

{
    // two color ways
    // https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/tree

    // left, self, right
    var inorderTraversal = function (root) {
        if (root === null) return [];

        const res = [];
        const white = 0;
        const grey = 1;
        const stack = [[white, root]];

        while (stack.length > 0) {
            const [color, node] = stack.pop();
            if (color === white) {
                node.right && stack.push([white, node.right]); //right
                stack.push([grey, node]); //self
                node.left && stack.push([white, node.left]); //left
            } else {
                res.push(node.val);
            }
        }
        return res;
    };
}
{
    var inorderTraversal = function (root) {
        if (root === null) return [];

        let res = [];
        let stack = [];
        let p = root;

        while (stack.length > 0 || p) {
            while (p) {
                stack.push(p);
                p = p.left;
            }
            let n = stack.pop();
            res.push(n.val);
            p = n.right;
        }
        return res;
    };
}

{
    var inorderTraversal = function (root) {
        if (root === null) return [];

        let res = [];

        const dfs_inorderTraversal = n => {
            n.left && dfs_inorderTraversal(n.left);
            res.push(n.val);
            n.right && dfs_inorderTraversal(n.right);
        }

        dfs_inorderTraversal(root);

        return res;
    };
}
{
    /*
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        WHITE, GRAY = 0, 1
        res = []
        stack = [(WHITE, root)]
        while stack:
            color, node = stack.pop()
            if node is None: continue
            if color == WHITE:
                stack.append((WHITE, node.right))
                stack.append((GRAY, node))
                stack.append((WHITE, node.left))
            else:
                res.append(node.val)
        return res

    */
}
// 173. Binary Search Tree Iterator
// 230. Kth Smallest Element in a BST
// 272. Closest Binary Search Tree Value II
// 285. Inorder Successor in BST
// 783. Minimum Distance Between BST Nodes