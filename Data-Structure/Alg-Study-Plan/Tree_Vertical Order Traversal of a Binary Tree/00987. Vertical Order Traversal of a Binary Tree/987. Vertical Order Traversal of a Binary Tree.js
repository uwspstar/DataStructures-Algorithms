//987. Vertical Order Traversal of a Binary Tree
{ //BFS
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