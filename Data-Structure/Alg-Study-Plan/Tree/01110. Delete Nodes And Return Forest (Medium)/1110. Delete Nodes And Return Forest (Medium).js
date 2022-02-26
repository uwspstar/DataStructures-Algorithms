// 1110. Delete Nodes And Return Forest (Medium)
//这道题最主要需要注意的细节是如果通过递归处理原树，以及需要在什么时候断开指针。同 时，为了便于寻找待删除节点，可以建立一个哈希表方便查找。
var delNodes = function (root, to_delete) {
    let res = [];
    let set = new Set(to_delete);

    const dfs = (node) => {
        if (node === null) return null;

        node.left = dfs(node.left);
        node.right = dfs(node.right);

        if (set.has(node.val)) {
            if (node.left !== null) {
                res.push(node.left);  // 零散的非空子树
            }
            if (node.right !== null) {
                res.push(node.right);
            }
            node = null;
        }
        return node;  // 本级递归返回值：移除掉特定节点后的二叉树
    }

    let node = dfs(root);

    if (node !== null) {
        res.push(node);
    }

    return res;
};