/*
二叉搜索树非递归 BST Iterator
使用条件
    - 用非递归的方式(Non-recursion / Iteration)实现二叉树的中序遍历
    - 常用于 BST 但不仅仅可以用于 BST
复杂度
时间复杂度 O(n) 空间复杂度 O(n)
*/

{
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }

    const inorderTraversal = root => {
        if (root === null) return [];

        let res = [];
        let stack = [];
        let p = root;

        while (stack.length > 0 || p !== null) {
            while (p) { //left
                stack.push(p);
                p = p.left;
            }
            let n = stack.pop();
            res.push(n.val);
            p = n.right; //right
        }
        return res;
    }
}