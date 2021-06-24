/*
Solve the problem [JavaScript]
Given a binary tree of integers root, create a function that returns an array where each element represents an array that contains the elements at the level i.

Example 1:
Input: root = [5, 10, 3, 4, 6, null, 7, null, 8, 9, 1, 2]
Output: [[5], [10, 3], [4, 6, 7], [8, 9, 1, 2]]

Explanation:
*/
{
    // Time complexity: O(n)
    // Space complexity: O(n)

    class Tree {
        constructor(data, left = null, right = null) {
            this.data = data;
            this.left = left;
            this.right = right;
        }
    }

    function getValuesByLevel(root) {
        let output = [];
        let queue = [[root, 0]];
        let i = 0;
        while (i < queue.length) {
            let node = queue[i][0];
            let level = queue[i][1];
            i++;
            if (node === null) {
                continue;
            } else {
                if (output.length <= level) output.push([]);
                output[level].push(node.data);
                queue.push([node.left, level + 1]);
                queue.push([node.right, level + 1]);
            }
        }
        return output;
    }
}