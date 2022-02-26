//110. Balanced Binary Tree (Easy)
// 判断一个二叉树是否平衡。树平衡的定义是，对于树上的任意节点，其两侧节点的最大深度 的差值不得大于 1

const getMaxHeight = root => {
    if (root === null) return true;
    let left = getMaxHeight(root.left);
    let right = getMaxHeight(root.right);
    return Math.max(left, right) + 1;

}
const isBalanced = root => {
    if (root === null) return true;
    if (root.left === null && root.right === null) return true;

    let left = getMaxHeight(root.left);
    let right = getMaxHeight(root.right);

    if (Math.abs(left - right) > 1) return false;

    return isBalanced(root.left) && isBalanced(root.right);
}