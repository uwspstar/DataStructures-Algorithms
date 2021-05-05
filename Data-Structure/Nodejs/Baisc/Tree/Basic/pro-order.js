 //recursion vs iteration performance
{   // recursive
    const preorder = root => {
        if (!root) return;
        console.log(root.val);
        preorder(root.left);
        preorder(root.right);
    } 
    
}
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
            if (n.left) stack.push(n.left);
        }
    }
   
}