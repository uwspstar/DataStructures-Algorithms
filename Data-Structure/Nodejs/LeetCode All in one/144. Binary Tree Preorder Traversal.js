/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Input: root = [1,null,2,3] Output: [1,2,3]
*/

// preorder
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

//255. Verify Preorder Sequence in Binary Search Tree