//590. N 叉树的后序遍历
{
    //590. N 叉树的后序遍历
    var postorder = function (root) {
        if (root === null) return [];
        let res = [];
        const postorderNTree = root => {
            if (root === null) return;
            if (root.children !== null) {
                root.children.forEach(child => {
                    postorderNTree(child);
                })
            }
            res.push(root.val);
            return;
        }
        postorderNTree(root);
        return res;
    };
}
{
    //590. N 叉树的后序遍历
    var postorder = function (root) {
        if (root === null) return [];
        let stack = [root];
        let res = [];
        while (stack.length > 0) {
            let sz = stack.length;
            for (let i = 0; i < sz; i++) {
                let n = stack.pop();
                if (n.children !== null) {
                    stack.push(...n.children);
                }
                res.unshift(n.val);
            }
        }
        return res;
    };
}