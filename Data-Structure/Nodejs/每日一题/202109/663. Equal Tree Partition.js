//663. Equal Tree Partition
/*
Given the root of a binary tree, return true if you can partition the tree into two trees with equal sums of values after removing exactly one edge on the original tree.

Input: root = [5,10,10,null,null,2,3]
Output: true
*/

//we should check that half the sum of the entire tree occurs somewhere in our recording (and not from the total of the entire tree.)

var checkEqualTree = function(root) {
    const map = new Map();
    
    const getSum = (root) => {
        if (root === null) return 0;
        let sum = root.val + getSum(root.left) + getSum(root.right);
        map.set(sum, true);
        return sum;
    }

    let rootSum = root.val + getSum(root.left) + getSum(root.right);
    
    return rootSum % 2 === 0 && map.has(rootSum / 2);
};
