//653. Two Sum IV - Input is a BST

/*

Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

Input: root = [5,3,6,2,4,null,7], k = 9
Output: true

Input: root = [5,3,6,2,4,null,7], k = 28
Output: false
 
Input: root = [2,1,3], k = 4
Output: true

Input: root = [2,1,3], k = 1
Output: false

Input: root = [2,1,3], k = 3
Output: true

*/
{
    var findTarget = function (root, k) {

        let arr = [];

        const buildArr = root => {
            if (root === null) return;
            buildArr(root.left);
            arr.push(root.val);
            buildArr(root.right);
        }

        buildArr(root);

        if (arr.length < 2) return false;

        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            let sum = arr[left] + arr[right];
            if (sum === k) {
                return true;
            } else if (sum < k) {
                left++;
            } else {
                right--;
            }
        }
        return false;
    };
}
{
    var findTarget = function (root, k) {
        let stack = [root]
        let map = {}

        while (stack.length > 0) {
            let cur = stack.pop()

            if (map[k - cur.val] === true) return true
            map[cur.val] = true;

            if (cur.left) stack.push(cur.left)
            if (cur.right) stack.push(cur.right)
        }
        return false
    };
}