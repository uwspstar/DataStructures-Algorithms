//0701.二叉搜索树中的插入操作
{
    //recursive
    var insertIntoBST = function (root, val) {
        const setInOrder = (root, val) => {
            if (root === null) {
                let node = new TreeNode(val);
                return node;
            }
            if (root.val > val)
                root.left = setInOrder(root.left, val);
            else if (root.val < val)
                root.right = setInOrder(root.right, val);
            return root;
        }
        return setInOrder(root, val);
    };
}
{
    var insertIntoBST = function (root, val) {
        let parent = new TreeNode(0);
        const preOrder = (cur, val) => {
            if (cur === null) {
                let node = new TreeNode(val);
                if (parent.val > val)
                    parent.left = node;
                else
                    parent.right = node;
                return;
            }
            parent = cur;
            if (cur.val > val)
                preOrder(cur.left, val);
            if (cur.val < val)
                preOrder(cur.right, val);
        }
        if (root === null)
            root = new TreeNode(val);
        preOrder(root, val);
        return root;
    };
}
{
    //iteration
    var insertIntoBST = function (root, val) {
        if (root === null) {
            root = new TreeNode(val);
        } else {
            let parent = new TreeNode(0);
            let cur = root;
            while (cur) {
                parent = cur;
                if (cur.val > val)
                    cur = cur.left;
                else
                    cur = cur.right;
            }
            let node = new TreeNode(val);
            if (parent.val > val)
                parent.left = node;
            else
                parent.right = node;
        }
        return root;
    };
}