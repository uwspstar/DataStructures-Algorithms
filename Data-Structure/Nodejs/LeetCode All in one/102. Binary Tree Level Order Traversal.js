//102. Binary Tree Level Order Traversal
//Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
{
    var levelOrder = function(root) {
        if (root === null) return [];
        let res = [];
        let q = [root];
        while (q.length > 0) {
            const sz = q.length; 
            let tmp = [];
            for (let i = 0; i < sz; i++) {  
                let n = q.shift(); 
                tmp.push(n.val);
                if (n.left !== null) {
                    q.push(n.left);
                }
                if (n.right !== null) {
                    q.push(n.right);
                } 
            }
            res.push(tmp); 
        }
        return res;
    };
}