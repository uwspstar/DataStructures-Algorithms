//[Medium] 129. Sum Root to Leaf Numbers
/*
You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
 
Input: root = [1,2,3] Output: 25
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
*/
{
    const sumNumbers = root => {
        let res = 0;

        const preOrder = (node, currSum) => {
            if (node === null) return 0;

            currSum = currSum * 10 + node.val;

            if (node.left == null && node.right == null) {
                res += currSum;
            }

            if (node.left !== null) {
                preOrder(node.left, currSum);
            }
            if (node.right !== null) {
                preOrder(node.right, currSum);
            }

        }

        preOrder(root, 0);

        return res;
    };
}