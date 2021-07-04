//508. Most Frequent Subtree Sum
/*
Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order.

The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).

Example 1: Input: root = [5,2,-3] Output: [2,-3,4]

Example 2: Input: root = [5,2,-5] Output: [2]
*/
{
    var findFrequentTreeSum = function (root) {
        if (root === null) return 0;
        let res = [];
        let map = new Map();
        let mostFre = -Infinity;

        const subtreeSum = root => {
            if (root === null) return 0;

            let leftSubTreeSum = subtreeSum(root.left);
            let rightSubTreeSum = subtreeSum(root.right);

            let sum = root.val + leftSubTreeSum + rightSubTreeSum;
            map.has(sum) ? map.set(sum, map.get(sum) + 1) : map.set(sum, 1);

            mostFre = Math.max(mostFre, map.get(sum));

            return sum;
        }
        subtreeSum(root);

        for (let key of map.keys()) {
            if (map.get(key) === mostFre) {
                res.push(key);
            }
        }

        return res;
    };
    //LFU Cache
    //Loud and Rich
    //Longest ZigZag Path in a Binary Tree
}
{
    //brute force
    var findFrequentTreeSum = function (root) {
        if (root === null) return 0;
        let res = [];
        let map = new Map();
        //O(N)
        const subtreeSum = root => {
            if (root === null) return 0;
            let leftSubTreeSum = subtreeSum(root.left);
            let rightSubTreeSum = subtreeSum(root.right);
            let sum = root.val + leftSubTreeSum + rightSubTreeSum;
            map.has(sum) ? map.set(sum, map.get(sum) + 1) : map.set(sum, 1)
            return sum;
        }
        //return all the values with the highest frequency in any order.
        subtreeSum(root);
        let max = -Infinity;
        //O(N)
        for (let num of map.values()) {
            if (max < num) {
                max = num;
            }
        }
        for (let key of map.keys()) {
            if (map.get(key) === max) {
                res.push(key);
            }
        }
        console.log(map, res, max);//Map(3) { 2 => 1, -3 => 1, 4 => 1 }
        return res;

    };
    //House Robber III
    //Dinner Plate Stacks
    //Clone Binary Tree With Random Pointer
}