//1110. Delete Nodes And Return Forest
/*
Given the root of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest. You may return the result in any order.

Example 1:

Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]
Example 2:

Input: root = [1,2,4,null,3], to_delete = [3]
Output: [[1,2,4]]
*/
/*
对于队列中的所有根
如果它被删除了，就检查是否有左右节点，有就放入队列中
没有被删除，说明这是一个合法的根，我们利用dfs函数对这个根进行截枝
截枝过程很简单，就是深度优先搜索的时候检测左右是否被截断
截断的时候有两件事
把截断的节点放入队列中
把目前这个指针置为空，相当于截枝了

作者：lchaok
链接：https://leetcode-cn.com/problems/delete-nodes-and-return-forest/solution/shu-duan-cheng-lin-c-by-lchaok-n5bx/

*/
{
    var delNodes = function (root, to_delete) {
        let res = [];
        let set = new Set(to_delete);

        const dfs = (n) => {
            if (n == null) return n;
            n.left = dfs(n.left);
            n.right = dfs(n.right);

            if (set.has(n.val)) {
                if (n.left != null) res.push(n.left);  // 零散的非空子树
                if (n.right != null) res.push(n.right);
                n = null;
            }
            return n;  // 本级递归返回值：移除掉特定节点后的二叉树
        }

        let node = dfs(root);

        if (node !== null) {
            res.push(node);
        }

        return res;
    };
    //Binary Search Tree Iterator
    //Employee Importance
    //Find Distance in a Binary Tree
}
{
    function delNodes(root, to_delete) {

        let set = new Set(to_delete);
        const res = new Set([root]);

        const dfs = (node, parent) => {
            if (set.has(node.val)) {
                node.left && res.add(node.left);
                node.right && res.add(node.right);
                if (!parent) {
                    return res.delete(node);
                }
                parent[parent.left === node ? 'left' : 'right'] = null;
            }
            node.left && dfs(node.left, node);
            node.right && dfs(node.right, node);
        }

        for (const r of res) {
            dfs(r, null);
        }

        return Array.from(res);
    }

    //Binary Search Tree Iterator
    //Employee Importance
    //Find Distance in a Binary Tree
}