//106. Construct Binary Tree from Inorder and Postorder Traversal
//Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
//Output: [3,9,20,null,null,15,7]

const buildTree = (inorder, postorder) => {

    if (postorder.length === 0) return postorder;
    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    let N = postorder.length;

    const helper = (start, end) => {
        if (postorder.length === 0) return null;
        if (end < start) return null;

        let rootVal = postorder.pop();
        let idx = map.get(rootVal);

        let root = new TreeNode(rootVal);

        root.right = helper(idx + 1, end);
        root.left = helper(start, idx - 1);

        return root;
    }

    return helper(0, N - 1);
}
