//111. Minimum Depth of Binary Tree
/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。
 
//叶子节点，左右孩子都为空的节点才是叶子节点
//最小深度是从根节点到最近叶子节点的最短路径上的节点数量。，注意是叶子节点。

道题的关键是搞清楚递归结束条件

叶子节点的定义是左孩子和右孩子都为 null 时叫做叶子节点
当 root 节点左右孩子都为空时，返回 1
当 root 节点左右孩子有一个为空时，返回不为空的孩子节点的深度
当 root 节点左右孩子都不为空时，返回左右孩子较小深度的节点值

public int minDepth(TreeNode root) {
        if(root == null) return 0;
        //这道题递归条件里分为三种情况
        //1.左孩子和有孩子都为空的情况，说明到达了叶子节点，直接返回1即可
        if(root.left == null && root.right == null) return 1;
        //2.如果左孩子和由孩子其中一个为空，那么需要返回比较大的那个孩子的深度        
        int m1 = minDepth(root.left);
        int m2 = minDepth(root.right);
        //这里其中一个节点为空，说明m1和m2有一个必然为0，所以可以返回m1 + m2 + 1;
        if(root.left == null || root.right == null) return m1 + m2 + 1;
        
        //3.最后一种情况，也就是左右孩子都不为空，返回最小深度+1即可
        return Math.min(m1,m2) + 1; 
    }

作者：reals
链接：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/solution/li-jie-zhe-dao-ti-de-jie-shu-tiao-jian-by-user7208/ 
*/
/*
对于每一个非叶子节点，我们只需要分别计算其左右子树的最小叶子节点深度。这样就将一个大问题转化为了小问题，可以递归地解决该问题。
*/
{
    //求二叉树的最小深度: DFS
    //(only for this question) The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node. 
    //111. Minimum Depth of Binary Tree
    const minDepth = root => {
        if (root === null) return 0;
        // only think about root node
        if (root.left === null && root.right === null) return 1;

        let treeMinDepth = Infinity;
        // if left subtree is not empty, get the minDepth for left subtree
        if (root.left !== null) {
            treeMinDepth = Math.min(minDepth(root.left), treeMinDepth);
        }
        // if right subtree is not empty, get the minDepth for right subtree
        if (root.right !== null) {
            treeMinDepth = Math.min(minDepth(root.right), treeMinDepth);
        }
        return 1 + treeMinDepth;
    }
}
{
    const minDepth = root => {
        if (root === null) return 0;
        // only think about root node
        if (root.left === null && root.right === null) return 1;

        let treeMinDepth = Infinity;

        //左子树的最小叶子节点深度
        if (root.left !== null) {  // why need this ?
            treeMinDepth = Math.min(minDepth(root.left), treeMinDepth);
        }
        //左子树的最小叶子节点深度
        if (root.right !== null) {
            treeMinDepth = Math.min(minDepth(root.right), treeMinDepth);
        }
        return 1 + treeMinDepth;
    }
}
{
    //BFS
    var minDepth = function (root) {
        if (!root) return 0;
        let q = [root];
        let depth = 1;
        while (q.length) {
            const sz = q.length;
            for (let i = 0; i < sz; i++) {
                const node = q.shift();
                if (node.left === null && node.right === null) {
                    return depth;
                } // this is the logic to find minDepth
                node.left && q.push(node.left);
                node.right && q.push(node.right)
            }
            depth++;
        }
        return depth;
    };
}
/*
Lowest Common Ancestor of a Binary Search Tree
Check if There is a Valid Path in a Grid
Pseudo-Palindromic Paths in a Binary Tree
*/
{
    const getDepth = node => {
        if (node === null) return 0;

        let leftDepth = getDepth(node.left);    // 左
        let rightDepth = getDepth(node.right);  // 右

        // 当一个左子树为空，右不为空，这时并不是最低点 ???
        if (node.left === NULL && node.right !== NULL) {
            return 1 + rightDepth;
        }
        // 当一个右子树为空，左不为空，这时并不是最低点
        if (node.left !== NULL && node.right === NULL) {
            return 1 + leftDepth;
        }
        let result = 1 + min(leftDepth, rightDepth);
        return result;
    }
    var minDepth = function (root) {
        return getDepth(root);
    }
}