// 面试题7 重建二叉树
// leetcode 105. Construct Binary Tree from Preorder and Inorder Traversal
//https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// 题目 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如前序遍历序列 {1, 2, 4, 7, 3, 5, 6, 8}
// 和中序遍历序列  {4, 7, 2, 1, 5, 3, 8, 6}，则重建出
// 普通二叉树
//              1
//           /     \
//          2       3  
//         /       / \
//        4       5   6
//         \         /
//          7       8
// 所有结点都没有右子结点
//            1
//           / 
//          2   
//         / 
//        3 
//       /
//      4
//     /
//    5

//输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中 都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并 返回。

//思路:先找出根节点，然后利用递归方法构造二叉树
{
    var buildTree = function (preorder, inorder) {

        const dfs = (start, end) => {
            if (end < start) return null;

            let rootVal = preorder.shift();

            let localRoot = new TreeNode(rootVal);

            let idx = inorder.indexOf(rootVal);

            localRoot.left = dfs(start, idx - 1);
            localRoot.right = dfs(idx + 1, end);

            return localRoot;
        }
        return dfs(0, inorder.length - 1);
    };
}
{
    var buildTree = function (preorder, inorder) {

        function construct(preorder, inorder) {
            
            let root = preorder[0];// 找到根节点元素
            
            let index = inorder.indexOf(root);// 确定左右子树
            // careful : preorder.slice(1, index + 1)

            let left = (index === 0 ? null : construct(preorder.slice(1, index + 1), inorder.slice(0, index)));

            let right = (index === inorder.length - 1 ? null : construct(preorder.slice(index + 1), inorder.slice(index + 1)));

            let localRoot = new TreeNode(root, left, right);
            return localRoot;
        }
        return construct(preorder, inorder);
    }
}