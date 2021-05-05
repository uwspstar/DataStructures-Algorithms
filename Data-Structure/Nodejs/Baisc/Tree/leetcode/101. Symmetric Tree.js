//101. Symmetric Tree
//Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
//Input: root = [1,2,2,3,4,4,3] Output: true
{
    const isMirror = (n1, n2) => {
        if (n1 === null && n2 === null) return true;

        if (n1 === null && n2 !== null) return false;
        if (n1 !== null && n2 === null) return false;
        
        if (n1.val !== n2.val) return false;
        
        return isMirror(n1.left, n2.right) && isMirror(n2.left, n1.right) 
        
    }
    
    var isSymmetric = function(root) {
        if (root === null) return true;
        return isMirror(root, root)
    };
}