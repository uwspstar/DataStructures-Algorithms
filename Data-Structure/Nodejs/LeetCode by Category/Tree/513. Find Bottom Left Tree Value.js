//513. Find Bottom Left Tree Value
//Given the root of a binary tree, return the leftmost value in the last row of the tree.
//404. Sum of Left Leaves
{
    //在树的最后一行找到最左边的值。深度最大的叶子节点一定是最后一行。
    //BFS :  leftmost value NOT the left leave
    var findBottomLeftValue = function (root) {
        if (root === null) return root;
        /*
        const isLeftLeave = n => {
            return n !== null && n.left === null && n.right === null;
        }*/

        let res = root.val;

        let q = [root];
        //Given the root of a binary tree, return the leftmost value in the last row of the tree.
        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                if (i == 0) { //leftmost
                    res = n.val;
                }
                //if (isLeftLeave(n.left)) {
                //res =  n.left.val;
                //}
                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
        }
        return res;

    };
}

/*
Path With Maximum Minimum Value
Reorder Routes to Make All Paths Lead to the City Zero
Lexicographically Smallest String After Applying Operations
*/