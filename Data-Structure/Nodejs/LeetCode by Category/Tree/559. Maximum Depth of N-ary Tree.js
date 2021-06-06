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
            maxDepth = Math.max(maxDepth, depth); // check max on every level
        }

        dfs(root, 1);

        return maxDepth;
    }

}

/*
Path Sum II
Cracking the Safe
Minimum Knight Moves
*/
