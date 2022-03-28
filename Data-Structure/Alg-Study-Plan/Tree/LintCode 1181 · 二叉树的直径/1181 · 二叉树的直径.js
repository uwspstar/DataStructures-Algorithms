// 1181 · 二叉树的直径
// leetcode 543. Diameter of Binary Tree
/*
给定一颗二叉树，您需要计算树的直径长度。 二叉树的直径是树中任意两个节点之间最长路径的长度。

两个节点之间的路径长度由它们之间的边数表示。

样例
样例 1:

给定一棵二叉树 
          1
         / \
        2   3
       / \     
      4   5    
返回3, 这是路径[4,2,1,3] 或者 [5,2,1,3]的长度.
样例 2:

输入:[2,3,#,1]
输出:2

解释:
      2
    /
   3
 /
1
*/
export class Solution {
  dfs(root, ans) {
    if (root === null) return 0
    let left = this.dfs(root.left, ans);
    let right = this.dfs(root.right, ans)
    ans[0] = Math.max(ans[0], left + right);
    return Math.max(left, right) + 1;
  }
  diameterOfBinaryTree(root) {
    // write your code here
    let ans = [0];
    this.dfs(root, ans);
    return ans[0]
  }
}