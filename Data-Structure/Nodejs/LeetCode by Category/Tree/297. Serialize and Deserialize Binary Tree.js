//297. Serialize and Deserialize Binary Tree
/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself. 

Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5] 

Input: root = [] Output: [] 

Input: root = [1] Output: [1] 

Input: root = [1,2] Output: [1,2]
*/
{
    var serialize = function (root) {
        if (!root) return "";
        let queue = [root], arr = [];
        while (queue.length > 0) {
            let node = queue.shift();
            if (node == null) {
                arr.push("null");
                continue;
            }
            else arr.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == "null") arr.pop();
            else break;
        }
        return arr.join(",");
    };

    var deserialize = function (data) {
        if (data.length === 0) return null;
        let arr = data.split(",");
        let root = new TreeNode(arr.shift());
        let queue = [root];

        while (arr.length > 0) {
            let val1 = arr.shift(), val2 = arr.shift();
            let left = val1 == "null" || val1 == undefined ? null : new TreeNode(val1);
            let right = val2 == "null" || val2 == undefined ? null : new TreeNode(val2);
            let root = queue.shift();
            root.left = left;
            root.right = right;
            if (left) queue.push(left);
            if (right) queue.push(right);
        }
        return root;
    };
}