/*abstract基本思路
前文 手把手刷二叉树总结篇 说过二叉树的递归算法可以分两类，一类是遍历二叉树的类型，一类是分解子问题的类型。

前者较简单，只要运用二叉树的递归遍历框架即可；后者的关键在于明确递归函数的定义，然后利用这个定义。

这题是后者，函数 build 的定义是根据输入的数组构造最大二叉树，那么只要我先要找到根节点，然后让 build 函数递归生成左右子树即可。

详细题解：东哥手把手帮你刷通二叉树|第二期

标签：数据结构，二叉树

解法代码
*/
class Solution {
    /* 主函数 */
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        return build(nums, 0, nums.length - 1);
    }

    /* 定义：将 nums[lo..hi] 构造成符合条件的树，返回根节点 */
    TreeNode build(int[] nums, int lo, int hi) {
        // base case
        if (lo > hi) {
            return null;
        }

        // 找到数组中的最大值和对应的索引
        int index = -1, maxVal = Integer.MIN_VALUE;
        for (int i = lo; i <= hi; i++) {
            if (maxVal < nums[i]) {
                index = i;
                maxVal = nums[i];
            }
        }

        TreeNode root = new TreeNode(maxVal);
        // 递归调用构造左右子树
        root.left = build(nums, lo, index - 1);
        root.right = build(nums, index + 1, hi);

        return root;
    }
}
