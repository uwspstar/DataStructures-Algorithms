//CHECK WHETHER A BINARY TREE IS A SUBTREE OF ANOTHER TREE

//For this question, traverse the BST in any way (level order was used in this example) and check the height for each BST node to see whether it should be printed.

function isSameTree(t1, t2) {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return true;
    return t1.val === t2.val &&
    isSameTree(t1.left, t2.left) &&
    isSameTree(t1.right, t2.right) 

}

function checkIfSubTree(root, subtree) { //BFS
    if (!root) return;
    let q = [root];
    let counter = 0;
    while (q.length) {
        let n = q.shift();
        if (n.data === subtree.data === isSameTree(n, subtree)){
            return true;
        }
        n.left && q.push(n.left);
        n.right && q.push(n.right);
    }
    return false;
}