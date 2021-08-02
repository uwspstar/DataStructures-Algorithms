//LCA求两个二叉树的最低公共祖先节点
//236. Lowest Common Ancestor of a Binary Tree
/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).
*/
{
    var lowestCommonAncestor = function (root, p, q) {
        if (root === null) return root;
        if (root === p || root === q) return root;

        let leftLowestCommonAncestor = lowestCommonAncestor(root.left, p, q);
        let rightLowestCommonAncestor = lowestCommonAncestor(root.right, p, q);

        if (leftLowestCommonAncestor === null) return rightLowestCommonAncestor;
        if (rightLowestCommonAncestor === null) return leftLowestCommonAncestor;

        return root;
    };
}
{
    var lowestCommonAncestor = function (root, p, q) {
        if (root === null || root === p || root === q) return root;

        let left = lowestCommonAncestor(root.left, p, q);
        let right = lowestCommonAncestor(root.right, p, q);

        if (!left) return right;
        if (!right) return left;

        return root;
    };
}
{
    const getLastCommonParent = (root, t1, t2) => {
        if (findNode(root.left, t1)) {
            if (findNode(root.right, t2)) {
                return root;
            }
            else {
                return getLastCommonParent(root.left, t1, t2);
            }
        } else {
            if (findNode(root.left, t2)) {
                return root;
            } else {
                return getLastCommonParent(root.right, t1, t2)
            }
        }
    }
    // 查找节点node是否在当前 二叉树中 
    var findNode = function (root, node) {
        if (root == null || node == null) {
            return false;
        }
        if (root == node) {
            return true;
        }
        let found = findNode(root.left, node);
        if (!found) {
            found = findNode(root.right, node);
        }
        return found;
    }
}
{
    // LCA for BST
    const lca = (root, t1, t2) => {
        if (root.val < t1.val && root.val < t2.val) {
            lca(root.left, t1, t2);
        } else if (root.val > t1.val && root.val > t2.val) {
            lca(root.right, t1, t2);
        } else {
            return root;
        }
    }
}