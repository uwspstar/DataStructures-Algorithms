// 314. Binary Tree Vertical Order Traversal (M)
/*
Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]

*/
/*
BFS queue
 
Time Complexity: O(NlogN) where N is the number of nodes in the tree.

In the first part of the algorithm, we do the BFS traversal, 
whose time complexity is  O(N) since we traversed each node once and only once.
*/
{
    var verticalOrder = function (root) {
        if (root === null) return [];
        let ans = [];

        let q = [[root, 0]];
        let map = new Map();
        let start = Infinity;
        let end = -Infinity;

        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let [node, level] = q.shift();
                let key = level;

                start = Math.min(start, level);
                end = Math.max(end, level);
                
                if (map.has(key)) {
                    let tmp = map.get(key);
                    tmp.push(node.val);
                    map.set(key, tmp);
                } else {
                    map.set(key, [node.val]);
                }

                if (node.left) {
                    q.push([node.left, level - 1]);
                }
                if (node.right) {
                    q.push([node.right, level + 1])
                }
            }

        }


        for (let key = start; key <= end; key++) {
            ans.push(map.get(key));
        }

        return ans;
    }
}
/*
Smallest String Starting From Leaf
Sum of Nodes with Even-Valued Grandparent
Find Nearest Right Node in Binary Tree
*/
