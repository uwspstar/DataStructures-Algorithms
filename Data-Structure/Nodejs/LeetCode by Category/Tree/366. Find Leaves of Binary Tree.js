//366. Find Leaves of Binary Tree
/*
Given the root of a binary tree, collect a tree's nodes as if you were doing this:

Collect all the leaf nodes.
Remove all the leaf nodes.
Repeat until the tree is empty.

Example 1:
Input: root = [1,2,3,4,5] Output: [[4,5,3],[2],[1]]
Explanation:
[[3,5,4],[2],[1]] and [[3,4,5],[2],[1]] are also considered correct answers since per each level it does not matter the order on which elements are returned.

Example 2: Input: root = [1] Output: [[1]]
*/
{
    var findLeaves = function (root) {
        const res = [];

        dfs(root);

        return res;

        function dfs(node) {
            if (node == null) return -1;

            const leftHeight = dfs(node.left);
            const rightHeight = dfs(node.right);

            const currHeight = Math.max(leftHeight, rightHeight) + 1;

            if (!res[currHeight]) res[currHeight] = [];
            res[currHeight].push(node.val);

            return currHeight;
        }
    };
}
{
    var findLeaves = function (root) {
        let map = new Map();

        // helper function
        var findHeight = function (node, map) {
            if (node === null) {
                return 0;
            }
            let level = Math.max(findHeight(node.left, map), findHeight(node.right, map)) + 1;

            if (map.has(level)) {
                let currentValue = map.get(level);
                currentValue.push(node.val)
                map.set(level, currentValue);
            }
            else {
                map.set(level, [node.val]);
            }
            return level;
        }
        // call helper to determine height of all nodes.
        findHeight(root, map);

        return Array.from(map.values());

    };
}