//429. N-ary Tree Level Order Traversal
//Given an n-ary tree, return the level order traversal of its nodes' values.

//Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

{

    var levelOrder = function (root) {
        if (root === null) return [];

        let res = [];
        let q = [root];
        
        while (q.length > 0) {
            let sz = q.length;
            let tmp = [];
            for (let i = 0; i < sz; i++) { // each level
                let n = q.shift();
                tmp.push(n.val);
                if (n.children) {
                    n.children.forEach(child => {
                        q.push(child);
                    })
                }
            }
            res.push(tmp);
        }
        return res;
    };
}

/*
01 Matrix
Open the Lock
Lowest Common Ancestor of a Binary Tree IV
*/