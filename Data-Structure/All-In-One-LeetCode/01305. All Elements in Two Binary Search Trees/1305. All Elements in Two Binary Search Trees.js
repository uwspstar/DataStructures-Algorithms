//1305. All Elements in Two Binary Search Trees
const getAllElements =  (root1, root2) => {
    let arr = [];
    const inorder = (node) => {
        if (!node) return
        inorder(node.left)
        arr.push(node.val)
        inorder(node.right)
    }
    inorder(root1)
    inorder(root2)
    arr.sort((a, b) => a - b)
    return arr
};