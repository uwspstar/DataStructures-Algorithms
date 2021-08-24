//653. Two Sum IV - Input is a BST
//Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

{
    // regular BFS
    var findTarget = function (root, k) {
        if (root === null) return false;
        let set = new Set();
        let q = [root];
        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                const n = q.shift();
                if (set.has(n.val)) return true;
                set.add(k - n.val);

                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
        }
        return false;
    };
}