//501. Find Mode in Binary Search Tree
/*
Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
*/
//https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/solution/er-cha-sou-suo-shu-zhong-de-zhong-shu-by-leetcode-/

//首先，我们考虑在寻找出现次数最多的数时，不使用哈希表。 这个优化是基于二叉搜索树中序遍历的性质：一棵二叉搜索树的中序遍历序列是一个非递减的有序序列。
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
 * @return {number[]}
 */

//Follow up: Could you do that without using any extra space? 
//(Assume that the implicit stack space incurred due to recursion does not count).

var findMode = function (root) {
    let base = 0;
    let count = 0;
    let maxCount = 0;
    let answer = [];

    const update = (x) => {
        if (x === base) {
            count++;
        } else {
            count = 1;
            base = x;
        }

        if (count === maxCount) {
            answer.push(base); // has same frequency
        }

        if (count > maxCount) {
            maxCount = count;
            answer = [base]; // kind of reset
        }
    }

    //inOrder
    const dfs = (n) => {
        if (!n) {
            return;
        }
        dfs(n.left);
        update(n.val);
        dfs(n.right);
    }

    dfs(root);
    return answer;
};

/*
Binary Tree Upside Down
Equal Tree Partition
All Nodes Distance K in Binary Tree
*/