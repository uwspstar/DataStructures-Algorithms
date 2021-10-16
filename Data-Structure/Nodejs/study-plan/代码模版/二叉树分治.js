/*
本文作者:九章算法令狐冲
官方网站:www.jiuzhang.com/?utm_source=lhc-cheatsheet-v4.0
*/

/*
二叉树分治 Binary Tree Divide & Conquer
使用条件
    - 二叉树相关的问题 (99%)
    - 可以一分为二去分别处理之后再合并结果 (100%) 
    - 数组相关的问题 (10%)
复杂度
    - 时间复杂度 O(n)
    - 空间复杂度 O(n) (含递归调用的栈空间最大耗费)
*/
{
    const divideConquer = node => {
        //递归出口, 一般处理 node == null 就够了, 大部分情况不需要处理 node == leaf
        if (node === null) {
            return 情况;
        }

        // 处理左子树
        leftResult = divideConquer(node.left);
        // 处理右子树
        rightResult = divideConquer(node.right);

        //合并答案
        result = merge_leftResult_and_rightResult

        return result;
    }
}