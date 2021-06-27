/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Input: root = [1,null,2,3] Output: [1,2,3]

*/

{
    var preorderTraversal = function (root) {
        if (root === null) return [];

        let res = [];
        let stack = [root];

        while (stack.length > 0) {
            let n = stack.pop();
            res.push(n.val);
            if (n.right !== null) {
                stack.push(n.right);
            }
            if (n.left !== null) {
                stack.push(n.left);
            }
        }
        return res;
    };
}
{
    var preorderTraversal = function (root) {
        if (root === null) return [];
        let res = [];
        const dfs = n => {
            res.push(n.val);  //console.log(root.val); // logic  : // self
            n.left && dfs(n.left) // left 
            n.right && dfs(n.right) // right
        }
        dfs(root);
        return res
    }
}
{
    var preorderTraversal = function (root, res = []) {
        if (root === null) return [];
        res.push(root.val);
        if (root.left !== null) {
            preorderTraversal(root.left, res);
        }
        if (root.right !== null) {
            preorderTraversal(root.right, res);
        }
        return res;
    };
}
//255. Verify Preorder Sequence in Binary Search Tree
{
    var preorderTraversal = function (root) {
        if (root === null) return [];
        let s = [root]
        let res = [];
        while (s.length > 0) {
            let n = s.pop();
            res.push(n.val);
            if (n.right !== null) s.push(n.right);
            if (n.left !== null) s.push(n.left);
        }
        return res;
    };
}
{
    var preorderTraversal = function (root, s = [root], res = []) {
        if (root === null) return [];
        if (!s.length) return res;
        let n = s.pop();
        res.push(n.val);
        if (n.right !== null) s.push(n.right);
        if (n.left !== null) s.push(n.left);

        return preorderTraversal(root, s, res);
    };
}