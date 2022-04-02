//1022. Sum of Root To Leaf Binary Numbers
var sumRootToLeaf = function(root) {
    if (root === null) return 0;
    let res = 0;
    const dfs = (root, path) => {
        if (root === null) return;
        //console.log('dfs(root=',root.val,',path=', path,')')
        
        if (root.left === null && root.right === null) {
            res += parseInt(path, 2);
        }
        
        root.left && dfs(root.left, path + root.left.val);
        root.right && dfs(root.right, path + root.right.val);
    }
    dfs (root, root.val+'');
    
    return res;
};

var sumRootToLeaf2 = function(root) {
    const dfs = (node, sum) => {
        if (node === null) return 0;
        
        sum = sum * 2 + node.val;
        
        if (node.left === null && node.right === null) return sum;
        
        let leftTreeSum = dfs(node.left, sum);
        let rightTreeSum = dfs(node.right, sum);
        
        return leftTreeSum + rightTreeSum;
    }
    
    return dfs(root, 0);
};