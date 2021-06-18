//515. Find Largest Value in Each Tree Row
//Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

{
    //BFS queue
    var largestValues = function (root) {
        if (root === null) return [];
        let q = [root];
        let res = [];
        while (q.length > 0) {
            let sz = q.length;
            let tmp = null;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                tmp = tmp === null ? n.val : Math.max(tmp, n.val);
                if (n.left !== null) {
                    q.push(n.left)
                }
                if (n.right !== null) {
                    q.push(n.right)
                }
            }
            res.push(tmp);
        }
        return res;
    };
}

/*
Word Ladder II
All Possible Full Binary Trees
Minimum Time to Collect All Apples in a Tree
*/