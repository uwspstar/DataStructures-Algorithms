//112. Path Sum
/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
*/
{
    //https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0112.%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.md

    //如果需要搜索整颗二叉树，那么递归函数就不要返回值，如果要搜索其中一条符合条件的路径，递归函数就需要返回值，因为遇到符合条件的路径了就要及时返回。

    // currSum (before check left leave) , targetSum (if it is leaf)
    var hasPathSum = function (root, targetSum) {

        const dfs = (curr, currentSum, targetSum) => {

            if (curr === null) return false;
            
            currentSum += curr.val; // start with  0

            if (curr.left === null && curr.right === null) { //if it is a leaf
                return currentSum === targetSum;
            }

            return dfs(curr.left, currentSum, targetSum) || dfs(curr.right, currentSum, targetSum);
        }

        return dfs(root, 0, targetSum);
    };
}
{
    // think about dp hasSum
    var hasPathSum = function (root, sum) {
        if (root == null) return false;

        if (!root.left && !root.right && sum == root.val) {// is leaf no children
            return true;
        }
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
}
/*
Path Sum II
Sum Root to Leaf Numbers
Path Sum III
Path Sum IV
*/