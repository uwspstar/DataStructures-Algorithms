//113. Path Sum II
/*
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.

A leaf is a node with no children.
*/
{
    var pathSum = function (root, targetSum) {
        if (!root) return [];

        let res = [];

        let dfs = (n, target, currentPathNodeArray) => {
            if (!n) return;

            target -= n.val;

            currentPathNodeArray.push(n.val); //backtracking

            if (!n.left && !n.right && target == 0) {
                res.push([...currentPathNodeArray]);
            }
            n.left && dfs(n.left, target, currentPathNodeArray);
            n.right && dfs(n.right, target, currentPathNodeArray);

            currentPathNodeArray.pop(); //backtracking
        };

        dfs(root, targetSum, []);

        return res;
    }
}

/*
Path Sum III
Path Sum IV
*/