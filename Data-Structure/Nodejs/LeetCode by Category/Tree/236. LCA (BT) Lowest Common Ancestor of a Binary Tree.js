//236. Lowest Common Ancestor of a Binary Tree
/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/236-er-cha-shu-de-zui-jin-gong-gong-zu-xian-hou-xu/

//https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0236.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.md

//If the maximum of the two values is smaller than the current root,go left. If the minimum of the two values is bigger than the current root, go right. Figures 15-21 and 15-22 show the two different cases of this.

{

    var lowestCommonAncestor = function (root, p, q) {
        if (root === null) return root;
        if (root === p || root === q) return root;

        let left = lowestCommonAncestor(root.left, p, q);
        let right = lowestCommonAncestor(root.right, p, q);
        // not find in left side, it will be on right side
        if (!left) return right;
        // not find in right side, it will be on left side
        if (!right) return left;
        //else 
        return root;
    };
}

/*
Lowest Common Ancestor of a Binary Search Tree
Smallest Common Region
Lowest Common Ancestor of a Binary Tree II
Lowest Common Ancestor of a Binary Tree IV
*/