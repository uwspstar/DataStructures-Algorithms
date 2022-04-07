// 938. Range Sum of BST
/*
Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

Example 1:
Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
*/
{
    var rangeSumBST = function (root, low, high) {
        if (root === null) return 0;
        let ans = 0;
        const dfs = (root, low, high) => {
            if (root === null) return 0;
            if (root.val >= low && root.val <= high) {
                ans += root.val;
            }
            // have not reach low val
            if (root.val > low) dfs(root.left, low, high);
            // have not reach high val
            if (root.val < high) dfs(root.right, low, high);
        }
        dfs(root, low, high);
        return ans
    };

    // Inorder Successor in BST (M)
    // Complete Binary Tree Inserter (M)
    // Change the Root of a Binary Tree (M)
}
{
    // BST, left < root < right
    var rangeSumBST = function (root, low, high) {
        let leftSum = 0;
        let rightSum = 0;
        let rootVal = 0;

        if (root.left) {
            leftSum = rangeSumBST(root.left, low, high)
        }
        if (root.right) {
            rightSum = rangeSumBST(root.right, low, high)
        }

        if (root.val >= low && root.val <= high) {
            rootVal = root.val;
        }

        return rightSum + leftSum + rootVal;
    };
}