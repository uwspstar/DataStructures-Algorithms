//116. Populating Next Right Pointers in Each Node
/*
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
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
//Populating Next Right Pointers in Each Node II
// /https://labuladong.gitbook.io/algo/mu-lu-ye-1/mu-lu-ye-1/er-cha-shu-xi-lie-1
{
    // 主函数
    const connect = root => {
        if (root == null) return null;
        connectTwoNode(root.left, root.right);
        return root;
    }

    // 辅助函数
    const connectTwoNode = (node1, node2) => {
        if (node1 === null || node2 === null) return;

        // 将传入的两个节点连接
        node1.next = node2;

        // 连接相同父节点的两个子节点
        connectTwoNode(node1.left, node1.right);
        connectTwoNode(node2.left, node2.right);

        // 连接跨越父节点的两个子节点
        connectTwoNode(node1.right, node2.left);
    }
    //Sentence Similarity II
    //Maximum Difference Between Node and Ancestor
    //Pseudo-Palindromic Paths in a Binary Tree
}