//113. Path Sum II
/*
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.

A leaf is a node with no children.

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]

Input: root = [1,2,3], targetSum = 5
Output: []
 
Input: root = [1,2], targetSum = 0
Output: []
*/
{
    var pathSum = function (root, targetSum) {
        let res = [];
        let path = [];
        const backTracking = (root, target) => {
    
            if (root === null) return;
            
            path.push(root.val);

            target = target - root.val;

            if (target === 0 && root.left === null && root.right === null) {
                res.push([...path]);
            }

            root.left && backTracking(root.left, target);
            root.right && backTracking(root.right, target);

            path.pop();
        }
        backTracking(root, targetSum)
        return res;
    }
}