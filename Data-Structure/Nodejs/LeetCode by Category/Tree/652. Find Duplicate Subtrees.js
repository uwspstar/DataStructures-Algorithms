/*
652. Find Duplicate Subtrees

Given the root of a binary tree, return all duplicate subtrees.

For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with the same node values.

Example 1:
Input: root = [1,2,3,4,null,2,4,null,null,4] Output: [[2,4],[4]]

Example 2:
Input: root = [2,1,1] Output: [[1]]

Example 3:
Input: root = [2,2,2,3,null,3,null] Output: [[2,3],[3]]

输入是一棵二叉树的根节点root，返回的是一个列表，里面装着若干个二叉树节点，这些节点对应的子树在原二叉树中是存在重复的

https://mp.weixin.qq.com/s/LJbpo49qppIeRs-FbgjsSQ

本题要使用「后序遍历」框架. 我要知道以自己为根的子树长啥样，是不是得先知道我的左右子树长啥样，再加上自己，就构成了整棵子树的样子

借助一个外部数据结构，让每个节点把自己子树的序列化结果存进去，这样，对于每个节点，不就可以知道有没有其他节点的子树和自己重复了.

*/
{
    
}