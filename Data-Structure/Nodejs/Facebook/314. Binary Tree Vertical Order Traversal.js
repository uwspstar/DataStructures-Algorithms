//314. Binary Tree Vertical Order Traversal
/*
Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right

Input: root = [3,9,20,null,null,15,7] Output: [[9],[3,15],[20],[7]]
Input: root = [3,9,8,4,0,1,7] Output: [[4],[9],[3,0,1],[8],[7]]
Input: root = [3,9,8,4,0,1,7,null,null,null,2,5] Output: [[4],[9,5],[3,0,1],[8,2],[7]]
Input: root = [] Output: []
*/
{
    /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    //BFS queue
    var verticalOrder = function (root) {
        if (root === null) return [];
        let res = [];
        let q = [[root, 0]]; // [node, level]
        let columnTable = new Map();
        let minLevel = null;
        let maxLevel = null

        while (q.length > 0) {
            let [n, level] = q.shift();

            let key = level;

            minLevel = minLevel !== null ? Math.min(minLevel, key) : key;
            maxLevel = maxLevel !== null ? Math.max(maxLevel, key) : key;

            let tmp = columnTable.has(key) ? columnTable.get(key) : [];
            tmp.push(n.val);
            columnTable.set(key, tmp);

            if (n.left !== null) {
                q.push([n.left, level - 1]);
            }
            if (n.right !== null) {
                q.push([n.right, level + 1]);
            }
        }

        for (let i = minLevel; i <= maxLevel; i++) {
            res.push(columnTable.get(i));
        }

        return res;
    };
}
{
    var verticalOrder = function (root) {
        if (root === null) return [];
        let res = [];
        let q = [[root, 0]]; // [node, level]
        let columnTable = new Map();

        while (q.length > 0) {
            let sz = q.length;
            let [n, level] = q.shift();
            let key = level;
            let tmp = columnTable.has(key) ? columnTable.get(key) : [];
            tmp.push(n.val)
            columnTable.set(key, tmp);

            if (n.left !== null) {
                q.push([n.left, level - 1]); // this build left column
            }
            if (n.right !== null) {
                q.push([n.right, level + 1]); // this build right column
            }
        }
        let tmp = [...columnTable.keys()].sort((a, b) => a - b);

        for (let key of tmp) {
            res.push(columnTable.get(key))
        }

        return res;
    };
}