//559. Maximum Depth of N-ary Tree
/*
Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
*/


{
    //BFS
    var maxDepth = function (root) {
        if (root === null) return 0;
        let q = [root];
        let depth = 0;
        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                if (n.children) {
                    n.children.forEach(child => {
                        q.push(child);
                    })
                }
            }
            depth++;
        }
        return depth;
    };
}
{
    //DFS
    var maxDepth = function (root) {
        if (root === null) return 0;

        let maxDepth = 0;

        const dfs = (n, depth) => {
            // every level
            if (n.children) {
                n.children.forEach(child => {
                    dfs(child, depth + 1);
                })
            }
            // check max on every level
            maxDepth = Math.max(maxDepth, depth);
        }

        dfs(root, 1); // in this case root depth is 1 

        return maxDepth;
    }

}

/*
Path Sum II
Cracking the Safe
Minimum Knight Moves
*/
{
    //559. N 叉树的最大深度
    var maxDepth = function (root) {
        if (root === null) return 0;
        let res = 0;
        //DFS
        const getMaxDepth = (root, depth) => {
            if (root === null) return;
            if (root.children) {
                res = Math.max(depth, res);
                root.children.forEach(child => {
                    console.log('child=', child.val, 'depth=', depth + 1);
                    child && getMaxDepth(child, depth + 1); // same as: getMax(root.left, depth + 1)
                })
            }
            return;
        }
        getMaxDepth(root, 0);
        return res + 1;
    };
}
{
    var maxDepth = function (root) {
        if (root === null) return 0;
        let queue = [root];
        let depth = 0;
        while (queue.length > 0) {
            let sz = queue.length;
            depth++;
            for (let i = 0; i < sz; i++) {
                let n = queue.shift();
                queue.push(...n.children);
            }
        }
        return depth;
    };
}