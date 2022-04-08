/*
基本思路
这道题常规的解法就是把二叉树变成一幅「图」，然后在图中用 BFS 算法求距离 target 节点 k 步的所有节点。

关于 BFS 算法的原理，见 BFS 算法核心框架套路。

标签：二叉树，BFS 算法

解法代码
*/

class Solution {
    // 记录父节点：node.val -> parentNode
    // 题目说了树中所有节点值都是唯一的，所以可以用 node.val 代表 TreeNode
    HashMap<Integer, TreeNode> parent = new HashMap<>();

    public List<Integer> distanceK(TreeNode root, TreeNode target, int k) {
        // 遍历所有节点，记录每个节点的父节点
        traverse(root, null);

        // 开始从 target 节点施放 BFS 算法，找到距离为 k 的节点
        Queue<TreeNode> q = new LinkedList<>();
        HashSet<Integer> visited = new HashSet<>();
        q.offer(target);
        visited.add(target.val);
        // 记录离 target 的距离
        int dist = 0;
        List<Integer> res = new LinkedList<>();

        while (!q.isEmpty()) {
            int sz = q.size();
            for (int i = 0; i < sz; i++) {
                TreeNode cur = q.poll();
                if (dist == k) {
                    // 找到距离起点 target 距离为 k 的节点
                    res.add(cur.val);
                }
                // 向父节点、左右子节点扩散
                TreeNode parentNode = parent.get(cur.val);
                if (parentNode != null && !visited.contains(parentNode.val)) {
                    visited.add(parentNode.val);
                    q.offer(parentNode);
                }
                if (cur.left != null && !visited.contains(cur.left.val)) {
                    visited.add(cur.left.val);
                    q.offer(cur.left);
                }
                if (cur.right != null && !visited.contains(cur.right.val)) {
                    visited.add(cur.right.val);
                    q.offer(cur.right);
                }
            }
            // 向外扩展一圈
            dist++;
        }

        return res;
    }

    private void traverse(TreeNode root, TreeNode parentNode) {
        if (root == null) {
            return;
        }
        parent.put(root.val, parentNode);
        // 二叉树递归框架
        traverse(root.left, root);
        traverse(root.right, root);
    }
}
