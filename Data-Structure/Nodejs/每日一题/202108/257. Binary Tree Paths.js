{
    var binaryTreePaths = function (root) {
        if (root === null) return root;

        let res = []
        let s = [[root, '']];

        while (s.length) {
            let [n, currPath] = s.pop();

            if (n.left === null && n.right === null) { // only leaf
                currPath += n.val;
                res.push(currPath);
            }

            if (n.right !== null) {
                s.push([n.right, currPath + n.val + "->"]);
            }
            
            if (n.left !== null) {
                s.push([n.left, currPath + n.val + "->"]);
            }
        }
        return res;
    }
}