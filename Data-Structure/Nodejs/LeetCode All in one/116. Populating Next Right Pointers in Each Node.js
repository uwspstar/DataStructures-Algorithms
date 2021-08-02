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
    var connect = function (root) {
        if (root == null) return null;
        connectTwoNode(root.left, root.right);
        return root;
    }

    var connectTwoNode = function (node1, node2) {
        if (node1 == null || node2 == null) {
            return;
        }

        node1.next = node2;

        connectTwoNode(node1.left, node1.right);
        connectTwoNode(node2.left, node2.right);

        connectTwoNode(node1.right, node2.left);
    }
}

{
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
//Populating Next Right Pointers in Each Node II