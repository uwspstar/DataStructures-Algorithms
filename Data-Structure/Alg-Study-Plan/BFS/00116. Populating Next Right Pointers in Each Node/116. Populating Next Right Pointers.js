{
    //BFS
    var connect = function (root) {
        if (root === null) return root;
        let q = [root];
        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) { //each level
                let n = q.shift();
                if (i !== sz - 1) {
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
{
    // DFS
    const connectTwoNode = (node1, node2) => {
        if (node1 === null || node2 === null) return;
        /**** 前序遍历位置 ****/
        // 将传入的两个节点连接
        node1.next = node2;

        // 连接相同父节点的两个子节点
        connectTwoNode(node1.left, node1.right);
        connectTwoNode(node2.left, node2.right);

        // 连接跨越父节点的两个子节点
        connectTwoNode(node1.right, node2.left);
    }
    var connect = function (root) {
        if (root == null) return null;
        connectTwoNode(root.left, root.right);
        return root;
    };
}