//145. Binary Tree Postorder Traversal
//Given the root of a binary tree, return the postorder traversal of its nodes' values.
/*
Input: root = [1,null,2,3]
Output: [3,2,1]
*/
//postorder
{
    var postorderTraversal = function (root) {
        if (root === null) return [];

        let res = [];

        const dfs_postOrder = n => {
            if (n === null) return [];

            n.left && dfs_postOrder(n.left);
            n.right && dfs_postOrder(n.right);

            res.push(n.val) //logic : self
        }

        dfs_postOrder(root);

        return res;
    };

}
{
    const postorderTraversal = root => {
        if (root === null) return [];

        let stack = [root];
        let outStack = [];
        let res = [];

        while (stack.length > 0) {
            let n = stack.pop();
            outStack.push(n);
            
            if (n.left !== null) {
                stack.push(n.left);
            }
            if (n.right !== null) {
                stack.push(n.right);
            }
        }

        while (outStack.length > 0) {
            let n = outStack.pop();
            res.push(n.val);
        }

        return res;
    };
}

//Binary Tree Longest Consecutive Sequence
//Find Duplicate Subtrees
//Build Binary Expression Tree From Infix Expression
// 316. Remove Duplicate Letters
// 439. Ternary Expression Parser
// 652. Find Duplicate Subtrees