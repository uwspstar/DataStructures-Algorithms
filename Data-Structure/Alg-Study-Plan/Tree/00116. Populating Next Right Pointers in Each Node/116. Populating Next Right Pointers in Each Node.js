//116. Populating Next Right Pointers in Each Node
/*
二叉树的问题难点在于，如何把题目的要求细化成每个节点需要做的事情，
但是如果只依赖一个节点的话，肯定是没办法连接「跨父节点」的两个相邻节点的。
*/
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
    //dfs
    const connectTwoNode = (node1, node2) => {
        if (node1 === null || node2 === null) return;

        // 将传入的两个节点连接/**** 前序遍历位置 ****/
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