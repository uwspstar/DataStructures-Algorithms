//662. 二叉树最大宽度
/*
给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空。

每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的null节点也计入长度）之间的长度。

示例 1:

输入: 

           1
         /   \
        3     2
       / \     \  
      5   3     9 

输出: 4
解释: 最大值出现在树的第 3 层，宽度为 4 (5,3,null,9)。

示例 2:
输入: 

          1
         /  
        3    
       / \       
      5   3     

输出: 2
解释: 最大值出现在树的第 3 层，宽度为 2 (5,3)。

示例 3:
输入: 

          1
         / \
        3   2 
       /        
      5      

输出: 2
解释: 最大值出现在树的第 2 层，宽度为 2 (3,2)。
示例 4:

输入: 

          1
         / \
        3   2
       /     \  
      5       9 
     /         \
    6           7
输出: 8
解释: 最大值出现在树的第 4 层，宽度为 8 (6,null,null,null,null,null,null,7)

链接：https://leetcode-cn.com/problems/maximum-width-of-binary-tree

这个问题中的主要想法是给每个节点一个 position 值，如果我们走向左子树，
那么 position -> position * 2，如果我们走向右子树，
那么 position -> position * 2 + 1。
当我们在看同一层深度的位置值 L 和 R 的时候，宽度就是 R - L + 1。

*/

/*approach: Using Level Order Traversal using the Queue.

Initially add the root and the root index 0 to the queue.

At each level, save the first and last index of the nodes and push the left and right child nodes along with their index.

If the parent node has index i, 
the left child index will be 2 * i + 1 
and of right child index will be 2 * i + 2.

At the end of each level, calculate the width by subtracting the first index from the last index of the level. If the width exceeds the maxWidth, assign that.

Note: Substituting the index in this solution since the solution needs to handle values over 32-bit integers. If we don't normalize, the value is overflowing and the width at the end of those levels is NaN. Basically, just subtracting the initial node index value with each node index, so after subtraction, the width will still be the same and we won't get NaN as a result.

Time Complexity = O(n) [level order traversal, add each node to queue]
Space Complexity = O(n) [queue]
*/
var widthOfBinaryTree = function (root) {
    if (!root) {
        return 0;
    }

    const q = [[root, 0]]; // node, level

    let maxWidth = 0, l = 0, r = 0; // l = 2 * 1 + 1, r = 2 * i + 2, i is the level

    while (q.length) {

        const size = q.length;

        const startIdx = q[0][1];

        for (let i = 0; i < size; ++i) {

            const [node, idx] = q.shift();

            if (i === 0) {
                l = idx;
            }

            if (i === size - 1) {
                r = idx;
            }

            const subIdx = idx - startIdx;

            if (node.left !== null) {
                q.push([node.left, 2 * subIdx + 1]);
            }
            if (node.right !== null) {
                q.push([node.right, 2 * subIdx + 2]);
            }
        }

        maxWidth = Math.max(maxWidth, r - l + 1);
    }

    return maxWidth;
};