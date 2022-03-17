// 117. Populating Next Right Pointers in Each Node II
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

Example 1:
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
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
                    n.next = q[0]; // becase shift()
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
    // Path In Zigzag Labelled Binary Tree
    // Count Servers that Communicate
    // Number of Nodes in the Sub-Tree With the Same Label
    // All Nodes Distance K in Binary Tree
    // Web Crawler
    // Throne Inheritance
}