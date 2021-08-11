const insertNode = (root, node) => {

    if (root == node) {
        return node;
    }

    let tmp = new TreeNode();
    tmp = root;
    let last = null;

    while (tmp !== null) {
        last = tmp;
        if (tmp.val > node.val) {
            tmp = tmp.left;
        } else {
            tmp = tmp.right;
        }
    }

    if (last !== null) {
        if (last.val > node.val) { 
            last.left = node; 
        }
        else { 
            last.right = node; 
        }
    }
    return root;
}