//104. Maximum Depth of Binary Tree
/*Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/
{
    // DFS : recursive

    var maxDepth = function (root) {
        if (root === null) return 0;
        let maxLevel = 1;
        const dfs = (n, depth) => {
            if (n === null) return;
            //dfs recursion preOrder
            if (n.left === null && n.right === null) { //self
                maxLevel = Math.max(maxLevel, depth);
            }

            n.left && dfs(n.left, depth + 1); //left
            n.right && dfs(n.right, depth + 1); //right
        }
        dfs(root, 1);
        return maxLevel;
    }
}
{
    //BFS : iteration
    var maxDepth = function (root) {
        if (root === null) return 0;
        let q = [root];
        let depth = 0; // inside while has at least one ++
        while (q.length > 0) {
            let sz = q.length;
            // each level
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
            depth++;
        }

        return depth;
    }
}
/*
Balanced Binary Tree
Maximum Depth of N-ary Tree
Time Needed to Inform All Employees
*/

//递归：后序，求根节点最大高度就是最大深度，通过递归函数的返回值做计算树的高度
//迭代：层序遍历

//先求它的左子树的深度，再求的右子树的深度，最后取左右深度最大的数值 再+1 （加1是因为算上当前中间节点）就是目前节点为根节点的树的深度
/*
int leftDepth = getDepth(node->left);       // 左
int rightDepth = getDepth(node->right);     // 右
int depth = 1 + max(leftDepth, rightDepth); // 中
return depth;
*/
{

    var maxDepth = function (root) {
        if (root === null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
}