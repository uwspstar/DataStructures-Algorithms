//450. Delete Node in a BST
var deleteNode = function (root, key) {
    if (root === null) return null;
    
    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else if (root.val === key) {
        if (root.left === null) {
            return root.right;
        } else if (root.right == null) {
            return root.left;
        } else if (root.left !== null && root.right !== null) {
            let node = root.right;
            while (node.left != null) {
                // 寻找欲删除节点右子树的最左节点
                node = node.left;
            }
            // 将欲删除节点的左子树成为其右子树的最左节点的左子树
            node.left = root.left;
            // 欲删除节点的右子顶替其位置，节点被删除
            root = root.right;
        }
    }
    return root;
};