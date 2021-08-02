//116.填充二叉树节点的右侧指针
//BFS
{
    //BFS
    var connect = function (root) {
        if (root === null) return root;

        let q = [root];

        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) { //each level
                let n = q.shift();
                if (i !== sz - 1) { // not the rightest node
                    n.next = q[0];
                    //res.push('#');
                }
                if (n.left) {
                    q.push(n.left);
                }
                if (n.right) {
                    q.push(n.right);
                }
            }
        }
        return root;
    };
}