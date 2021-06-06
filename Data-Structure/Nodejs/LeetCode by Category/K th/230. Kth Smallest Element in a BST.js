//230. Kth Smallest Element in a BST
/*
Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.
Input: root = [3,1,4,null,2], k = 1 Output: 1;
Input: root = [5,3,6,2,4,null,null,1], k = 3 Output: 3;
*/
/*
Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?*/
{
    //dfs_inOrder : inOrder the name explain in order
    var kthSmallest = function (root, k) {
        if (root === null) return root;
        let res = [];
        const dfs_inOrder = n => {
            if (n === null) return res;
            n.left && dfs_inOrder(n.left);
            res.push(n.val);
            n.right && dfs_inOrder(n.right);
        }
        dfs_inOrder(root);
        return res[k - 1];
    };
}
{
    /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    //dfs_inOrder : inOrder the name explain in order
    var kthSmallest = function (root, k) {
        if (root === null) return root;
        let res = [];
        let s = [];
        let p = root;
        while (s.length || p) {
            while (p) {
                s.push(p);
                p = p.left;
            }

            let n = s.pop();
            res.push(n.val);
            p = n.right;
        }

        return res[k - 1];
    };
}