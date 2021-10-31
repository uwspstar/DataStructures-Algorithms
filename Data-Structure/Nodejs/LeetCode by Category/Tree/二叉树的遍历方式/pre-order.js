//144. Binary Tree Preorder Traversal
//https://leetcode.com/problems/binary-tree-preorder-traversal/

//recursion vs iteration performance
// self, left, right

{   // recursive
    const preorder = root => {
        if (!root) return;
        console.log(root.val);
        preorder(root.left);
        preorder(root.right);
    }

}
//stack self,  right , left,
{
    //iterative
    //前序遍历是中左右，每次先处理的是中间节点，那么先将跟节点放入栈中，然后将右孩子加入栈，再加入左孩子。为什么要先加入 右孩子，再加入左孩子呢？ 因为这样出栈的时候才是中左右的顺序。

    const preorder = root => {
        if (!root) return;
        const stack = [root];
        while (stack.length) {
            const n = stack.pop();
            console.log(n.val);
            if (n.right) stack.push(n.right); // right first , then left;
            if (n.left) stack.push(n.left);  //left
        }
    }

}
{
    // iteration
    //self, left, right
    var preorderTraversal = function (root) {
        const res = [];
        if (root === null) return res;

        const stack = [];
        let node = root; // using stack LIFO

        while (node) {
            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
            res.push(node.val);
            node = stack.pop();
        }

        return res;
    };

}

{
    {
        const preorder = (root) => {
            if (!root) return;
            const stack = [root];
            while (stack.length) {
                let sz = stack.length;
                for (let i = 0; i < sz; i++) {
                    const n = stack.pop();
                    console.log(n.val);
                    if (n.right) stack.push(n.right); // right first , then left;
                    if (n.left) stack.push(n.left); //left
                }
            }
        };
    }
}