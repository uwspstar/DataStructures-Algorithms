const flatten = root => {
    if (root == null) return;// base case

    flatten(root.left);
    flatten(root.right);

    /**** 后序遍历位置 ****/// 1、左右子树已经被拉平成一条链表
    let left = root.left;
    let right = root.right;

    root.left = null;// 2、将左子树作为右子树 :-) !!!!
    root.right = left;

    // 3、将原先的右子树接到当前右子树的末端
    let p = root;
    while (p.right !== null) {
        p = p.right;
    }
    p.right = right;
}