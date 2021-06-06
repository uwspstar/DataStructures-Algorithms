//stack
// both iterative and recursion
{ 
    const preorder = root => {
        if (!root) return;
        const stack = [root];
        while (stack.length) {
            const n = stack.pop();
            console.log(n.val);
            if (n.right) stack.push(n.right); // right first , then left;
            if (n.left) stack.push(n.left);
        }
    }

}
{
    var inorderTraversal = function (root) {
        if (root === null) return [];

        let res = [];
        let stack = [];
        let p = root;

        while (stack.length > 0 || p) {
            while (p) {
                stack.push(p);
                p = p.left;
            }
            let n = stack.pop();
            res.push(n.val);
            p = n.right;
        }
        return res;
    };
}
{
    const postorder = root => {
        if (!root) return
        const outputStack = []
        const stack = [root]

        while (stack.length) {
            const n = stack.pop()
            outputStack.push(n)
            if (n.left) stack.push(n.left)
            if (n.right) stack.push(n.right)
        }

        while (outputStack.length) {
            const n = outputStack.pop()
            console.log(n.val)
        }
    }
}