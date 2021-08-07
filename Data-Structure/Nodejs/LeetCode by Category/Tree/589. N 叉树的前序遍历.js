//589. N 叉树的前序遍历
/*
给定一个 N 叉树，返回其节点值的 前序遍历 。

N 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）

进阶：

递归法很简单，你可以使用迭代法完成此题吗?
*/
{
    //589. N 叉树的前序遍历
    var preorder = function (root) {
        if (root === null) return [];
        let s = [root];
        let res = [];
        while (s.length > 0) {
            let n = s.shift();
            res.push(n.val);
            s.unshift(...n.children);
        }
        return res;
    };
}
{
    //589. N 叉树的前序遍历
    var preorder = function (root) {
        let res = [];
        const nTreePreorder = root => {
            if (root === null) return;
            res.push(root.val);
            root.children.forEach(child => nTreePreorder(child));
            return;
        }
        nTreePreorder(root);
        return res;
    };
}