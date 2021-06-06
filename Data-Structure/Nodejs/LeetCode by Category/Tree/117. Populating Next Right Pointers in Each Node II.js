/*
Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
*/
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
/*
All Nodes Distance K in Binary Tree
Web Crawler
Throne Inheritance
*/