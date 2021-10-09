//653. Two Sum IV - Input is a BST

/*
Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

Input: root = [5,3,6,2,4,null,7], k = 9
Output: true

Input: root = [5,3,6,2,4,null,7], k = 28
Output: false
*/
{
    // BFS + hashSet
    //T: O(N)
    //S: O(N)
    var findTarget = function (root, k) {
        if (root === null) return false;
        let set = new Set();
        let q = [root];
        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                const n = q.shift();
                if (set.has(n.val)) return true;
                set.add(k - n.val);

                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
        }
        return false;
    };
}
{
    //BST + inOrder
    //T : O(N)
    //S : O(N)
    var findTarget = function (root, k) {

        let arr = [];
        //O(N)
        const buildArr = root => {
            if (root === null) return;
            buildArr(root.left);
            arr.push(root.val); // inOrder
            buildArr(root.right);
        }

        buildArr(root);

        if (arr.length < 2) return false;

        let left = 0;
        let right = arr.length - 1;

        // O(N)
        while (left < right) { // Two Pointers
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
    // DFS + HashMap
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

// follow up , can we use less S:O(h) instead of S:O(N) 
//173. Binary Search Tree Iterator