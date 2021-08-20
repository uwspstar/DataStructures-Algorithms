//1339. Maximum Product of Splitted Binary Tree
/*
Given the root of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.

Return the maximum product of the sums of the two subtrees. Since the answer may be too large, return it modulo 109 + 7.

Note that you need to maximize the answer before taking the mod and not after taking it.



Example 1:


Input: root = [1,2,3,4,5,6]
Output: 110
Explanation: Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)
Example 2:


Input: root = [1,null,2,3,4,null,null,5,6]
Output: 90
Explanation: Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)
Example 3:

Input: root = [2,3,9,10,7,8,6,5,4,11,1]
Output: 1025
Example 4:

Input: root = [1,1]
Output: 1
*/
{
  var maxProduct = function (root) {
    if (root === null) return 0;
    let res = 0;
    let sum = 0;
    let nodeSum = [];

    const dfs = (root) => {
      if (root === null) return 0;

      let leftSum = dfs(root.left);
      let rightSum = dfs(root.right);
      let currentRootTreeValue = root.val + leftSum + rightSum;

      nodeSum.push(currentRootTreeValue);

      return currentRootTreeValue;
    };
    sum = dfs(root);

    //nodeSum= [ 4, 5, 11, 6, 9, 21 ] sum= 21
    console.log('nodeSum=', nodeSum, 'sum=', sum);

    for (let p1 of nodeSum) {// array not using for (...in...)
      res = Math.max(res, p1 * (sum - p1));
    }
    return res % (Math.pow(10, 9) + 7);
  };
}
