// /1448. Count Good Nodes in Binary Tree
/*
Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree. 

Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.
*/
{
    var goodNodes = function (root) {
        let res = 0;
        const dfsInorder = (root, maxSoFar) => {
            if (root === null) return 0;
            // node val on the pass path, cannot be bigger than current node val
            if (root.val >= maxSoFar) {
                res++;
            }
            root.left && dfsInorder(root.left, Math.max(root.val, maxSoFar));
            root.right && dfsInorder(root.right, Math.max(root.val, maxSoFar));
        }

        dfsInorder(root, root.val);
        return res;
    };


}