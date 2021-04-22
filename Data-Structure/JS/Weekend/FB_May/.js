/*
Number of Visible Nodes
There is a binary tree with N nodes. You are viewing the tree from its left side and can see only the leftmost nodes at each level. Return the number of visible nodes.
Note: You can see only the leftmost nodes, but that doesn't mean they have to be left nodes. The leftmost node at a level could be a right node.
Signature
int visibleNodes(Node root) {
Input
The root node of a tree, where the number of nodes is between 1 and 1000, and the value of each node is between 0 and 1,000,000,000
Output
An int representing the number of visible nodes.
Example
            8  <------ root
           / \
         3    10
        / \     \
       1   6     14
          / \    /
         4   7  13            
output = 4
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function visibleNodes(root) {
    // Write your code here
    if (root === null) return root;
    let q = [root];
    let res = 1;
    while (q.length > 0) { 
        let n = q.shift();
        if (n.left !== null || (n.left === null && n.right !== null)) {
            res++;
        }
        if (n.left !== null) {
            q.push(n.left); 
        }
        if (n.right !== null) {
            q.push(n.right);
        }
    }
    return res;
}
//        8
//      /   \
//     3     10
//    / \      \
//   1   6      14
//      / \     /
//     4   7   13

var root1 = new TreeNode(8);
root1.left = new TreeNode(3);
root1.right = new TreeNode(10);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(6);
root1.left.right.left = new TreeNode(4);
root1.left.right.right = new TreeNode(7);
root1.right.right = new TreeNode(14);
root1.right.right.left = new TreeNode(13);
//var expected_1 = 4;
console.log(visibleNodes(root1))


//       10
//      /  \
//     8    15
//    /    /  \
//   4    14   16
//    \    
//     5 
//      \
//       6

var root2 = new TreeNode(10);
root2.left = new TreeNode(8);
root2.right = new TreeNode(15);
root2.left.left = new TreeNode(4);
root2.left.left.right = new TreeNode(5);
root2.left.left.right.right = new TreeNode(6);
root2.right.left = new TreeNode(14);
root2.right.right = new TreeNode(16);
//var expected_2 = 5;
console.log(visibleNodes(root2))

