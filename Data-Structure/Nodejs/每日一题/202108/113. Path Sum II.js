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
        //递归函数不需要返回值，因为我们要遍历整个树
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
/*
Time Complexity: O(N^2)O 
 ) where NN are the number of nodes in a tree. In the worst case, we could have a complete binary tree and if that is the case, then there would be N/2 leafs. For every leaf, we perform a potential O(N) operation of copying over the pathNodes nodes to a new list to be added to the final pathsList. Hence, the complexity in the worst case could be O(N^2) 
 ).
 */