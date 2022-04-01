// 1644. Lowest Common Ancestor of a Binary Tree II
/*
Given the root of a binary tree, return the lowest common ancestor (LCA) of two given nodes, p and q. If either node p or q does not exist in the tree, return null. All values of the nodes in the tree are unique.

According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p and q in a binary tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself)". A descendant of a node x is a node y that is on the path from node x to some leaf node.

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

Example 2:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5. A node can be a descendant of itself according to the definition of LCA.

Example 3:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 10
Output: null
Explanation: Node 10 does not exist in the tree, so return null.
*/
{
    //if either node p or q does not exist in the tree, return null.
    const findLCA = (root, p, q, obj) => {
        if (root === null) return root;

        let left = findLCA(root.left, p, q, obj);
        let right = findLCA(root.right, p, q, obj);
        // must in post Traversal, so all node will be traveled
        if (root === p || root === q) {
            if (root === p) obj.findP = true;
            if (root === q) obj.findQ = true;
            return root; // ???
        }

        if (left === null) return right;
        if (right === null) return left;

        return root;
    }
    var lowestCommonAncestor = function (root, p, q) {
        const obj = { findP: false, findQ: false };
        let res = findLCA(root, p, q, obj);
        if (obj.findP && obj.findQ) {
            return res;
        }
        return null;
    };

}
{
    var lowestCommonAncestor = function (root, p, q) {
        let findP = false;
        let findQ = false;

        const findLCA = (root, p, q) => {
            if (root === null) return root;

            let left = findLCA(root.left, p, q);
            let right = findLCA(root.right, p, q);

            if (root === p || root === q) {
                if (root === p) findP = true;
                if (root === q) findQ = true;
                return root; // ???
            }

            if (left === null) return right;
            if (right === null) return left;

            return root;
        }

        let res = findLCA(root, p, q);
        if (findP && findQ) {
            return res;
        }
        return null;
    };
}
{
    //if either node p or q does not exist in the tree, return null.
    var lowestCommonAncestor = function (root, p, q) {
        let findP = false;
        let findQ = false;

        const findLCA = (root, p, q) => {
            if (root === null) return root;

            let left = findLCA(root.left, p, q);
            let right = findLCA(root.right, p, q);

            if (root === p || root === q) {
                if (root === p) findP = true;
                if (root === q) findQ = true;
                return root; // ???
            }

            if (left !== null && right !== null) return root;
            if (left === null && right === null) return null;

            return left === null ? right : left;
        }

        let res = findLCA(root, p, q);

        console.log('findP=', findP, 'findQ=', findQ)

        if (findP && findQ) {
            return res;
        }
        return null;
    };

    // Longest Increasing Path in a Matrix (H)
    // Count Subtrees With Max Distance Between Cities (H)
    // Find if Path Exists in Graph (E)
}