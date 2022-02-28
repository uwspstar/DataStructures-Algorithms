//987. Vertical Order Traversal of a Binary Tree
/*
Given the root of a binary tree, calculate the vertical order traversal of the binary tree.

For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).

The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

Return the vertical order traversal of the binary tree.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]
Explanation:
Column -1: Only node 9 is in this column.
Column 0: Nodes 3 and 15 are in this column in that order from top to bottom.
Column 1: Only node 20 is in this column.
Column 2: Only node 7 is in this column.
*/
{
    var verticalTraversal = function (root) {
        let arr = [];
        let q = [[root, 0, 0]];
        while (q.length > 0) {
            let [node, row, col] = q.shift();
            arr.push([col, row, node.val]);
            if (node.left !== null) q.push([node.left, row + 1, col - 1]);
            if (node.right !== null) q.push([node.right, row + 1, col + 1]);
        }

        arr.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

        let ans = [[arr[0][2]]];
        for (let i = 1; i < arr.length; i++) {
            let curr = arr[i];
            let last = arr[i - 1];
            if (curr[0] === last[0]) {
                let N = ans.length;
                ans[N - 1].push(curr[2]);
            } else {
                ans.push([curr[2]]);
            }
        }
        return ans;
    };
}