// 面试题7：重建二叉树
// 题目：输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输
// 入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,
// 2, 4, 7, 3, 5, 6, 8}和中序遍历序列{4, 7, 2, 1, 5, 3, 8, 6}，则重建出
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
    // 通过前序遍历找到根节点，结合中序遍历找到左右子树，之后递归构建左右子树。
    class BinaryTreeNode {
        constructor(val, left, right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
    const constructTree = (preOrder, inOrder) => {
        if (preOrder === null || inOrder === null) return null;

        if (preOrder.length == 0 || inOrder.length == 0) return null;

        if (preOrder.length !== inOrder.length)  return null;

        const build = (preOrder, inOrder) => {
            let root = preOrder(0);
            let idx = inOrder.indexOf(root);
            let left = idx === 0 ? null : build(preOrder.slice(0, idx), inOrder.slice(0, idx));
            let right = idx === 0 ? null : build(preOrder.slice(idx + 1), inOrder.slice(idx + 1));
            return BinaryTreeNode(root, left, right);
        }

        return build(preOrder, inOrder);
    }
}