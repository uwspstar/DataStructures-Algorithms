//95. Unique Binary Search Trees II
/*Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.
 
Input: n = 3
Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
*/
{
    //二叉搜索树关键的性质是根节点的值大于左子树所有节点的值，小于右子树所有节点的值，且左子树和右子树也同样为二叉搜索树
    //因此在生成所有可行的二叉搜索树的时候，假设当前序列长度为 nn，如果我们枚举根节点的值为 ii，那么根据二叉搜索树的性质我们可以知道左子树的节点值的集合为 [1…i−1]，右子树的节点值的集合为 [i+1…n]。而左子树和右子树的生成相较于原问题是一个序列长度缩小的子问题，因此我们可以想到用回溯的方法来解决这道题目。

    var generateTrees = function(n) {
        if (n === 0) return [];

        function buildTree(start, end) {
            let result = [];

            if (start > end) return [null]; 

            for (let i = start; i <= end; i++) { 

              let left = buildTree(start, i - 1);  
              let right = buildTree(i + 1, end);
              
              for (const leftNode of left) {  
                for (const rightNode of right) {
                  let node = new TreeNode(i)
                  node.left = leftNode;
                  node.right = rightNode;
                  result.push(node);
                }
              }
            }
            return result;
          }
          
          return buildTree(1, n);
    };
}
{
  function getTreesWithRoot(rootVal, lo, hi) {
    const results = [];
    const resLeft = [];
    for (let i = lo; i <= rootVal - 1; i++) {
      resLeft.push(...getTreesWithRoot(i, lo, rootVal - 1));
    }
    const resRight = [];
    for (let i = rootVal + 1; i <= hi; i++) {
      resRight.push(...getTreesWithRoot(i, rootVal + 1, hi));
    }
    for (let i = 0; i < Math.max(1, resLeft.length); i++) {
      for (let j = 0; j < Math.max(resRight.length, 1); j++) {
        const newNode = new TreeNode(rootVal);
        newNode.left = resLeft[i] ?? null;
        newNode.right = resRight[j] ?? null;
        results.push(newNode);
      }
    }
    return results;
  }
}