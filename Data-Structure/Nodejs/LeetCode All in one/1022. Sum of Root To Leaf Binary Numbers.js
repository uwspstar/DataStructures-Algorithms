//1022. Sum of Root To Leaf Binary Numbers
/*
 
 
You are given the root of a binary tree where each node has a value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

Return the sum of these numbers. The answer is guaranteed to fit in a 32-bits integer.
 
Input: root = [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

Input: root = [0]
Output: 0
 
Input: root = [1]
Output: 1 

Input: root = [1,1]
Output: 3
*/
{
    var sumRootToLeaf = function (root) {
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
        dfs(root, root.val + '');

        return res;
    };
}
{
    var sumRootToLeaf = function (root) {
        function dfs(node, str) {
            if (node === null) return 0;
            str += node.val;
            if (!node.left && !node.right) return parseInt(str, 2);
            return dfs(node.left, str) + dfs(node.right, str);
        }

        return dfs(root, '');
    };
}