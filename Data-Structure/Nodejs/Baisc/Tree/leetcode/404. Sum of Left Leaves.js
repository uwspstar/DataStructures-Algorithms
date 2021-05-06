//404. Sum of Left Leaves
//Given the root of a binary tree, return the sum of all left leaves.
//Input: root = [3,9,20,null,null,15,7] Output: 24 Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
//如果左节点不为空，且左节点没有左右孩子，那么这个节点就是左叶子
//判断当前节点是不是左叶子是无法判断的，必须要通过节点的父节点来判断其左孩子是不是左叶子。
/*
if (node->left != NULL && node->left->left == NULL && node->left->right == NULL) {
    左叶子节点处理逻辑
}
*/

{
    var sumOfLeftLeaves = function (root) {
        if (root === null) return 0;
        let res = 0;
        //如果左节点不为空，且左节点没有左右孩子，那么这个节点就是左叶子
        const isLeaf = n => {
            return n !== null && n.left === null && n.right === null;
        }

        const dfs = n => {
            if (n === null) return 0;

            if (isLeaf(n.left)) {
                res += n.left.val;
            }

            if (n.left !== null) {
                dfs(n.left);
            }
            if (n.right !== null) {
                dfs(n.right);
            }
        }

        dfs(root);
        return res;
    };
}
/*
Construct Binary Tree from Preorder and Postorder Traversal
Complete Binary Tree Inserter
Find Nearest Right Node in Binary Tree
*/