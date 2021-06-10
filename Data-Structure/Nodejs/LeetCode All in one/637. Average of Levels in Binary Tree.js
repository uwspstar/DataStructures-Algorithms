//637. Average of Levels in Binary Tree
//Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
//bfs
//q
{
    var averageOfLevels = function(root) {
        let res = [];
        let q = [root];
        while (q.length > 0) {
            let sz = q.length;
            let total = 0;
            // all nodes for each level
            for (let i = 0; i < sz; i++) { 
                let n = q.shift();  
                total = total + n.val; // every level
                if (n.left) { 
                    q.push(n.left);
                }
                if (n.right) {
                    q.push(n.right);
                }
            }
            res.push(total / sz);
        } 
        return res;
    };
}
/*
Recover Binary Search Tree
All Elements in Two Binary Search Trees
Clone Binary Tree With Random Pointer
*/