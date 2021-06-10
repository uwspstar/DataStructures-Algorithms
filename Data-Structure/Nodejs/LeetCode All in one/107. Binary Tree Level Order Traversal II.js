//107. Binary Tree Level Order Traversal II
//Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

{
    var levelOrderBottom = function (root) {
        if (root === null) return []; // not return null, need to return [];
        let q = [root];
        let res = [];

        while (q.length > 0) {
            let sz = q.length;
            let tmp = []; //hold the level node
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                tmp.push(n.val); // put all level node value in
                if (n.left !== null) {
                    q.push(n.left);
                }
                if (n.right !== null) {
                    q.push(n.right);
                }
            }
            res.unshift(tmp); // insert ahead : smart
        }
        return res;
    };
}

//Average of Levels in Binary Tree