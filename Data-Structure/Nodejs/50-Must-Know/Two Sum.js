//1. Two Sum
//Two Sum II - Input array is sorted
//Two Sum III - Data structure design
//Two Sum IV - Input is a BST
//Max Number of K-Sum Pairs
//Count Good Meals

// Two Sum 系列问题就是想教我们如何使用哈希表处理问题
/*
对于 TwoSum 问题，一个难点就是给的数组无序。对于一个无序的数组， 我们似乎什么技巧也没有，只能暴力穷举所有可能。一般情况下，我们会首先把数组排序再考虑双指针技巧。
TwoSum 启发我们，HashMap 或者 HashSet 也可以帮助我们处理无序数组相关的简单问题。
另外，设计的核心在于权衡，利用不同的数据结构，可以得到一些针对性的加强。
*/

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 

Input: nums = [2,7,11,15], target = 9 Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1]. 

Input: nums = [3,2,4], target = 6 Output: [1,2] 
Input: nums = [3,3], target = 6 Output: [0,1]
*/
{
    // Hash Table :  If the complement exists, we need to look up its index
    // Time complexity : O(n)
    // Space complexity : O(n)
    var twoSum = function (arr, target) {
        if (arr.length < 2) return [];
        let map = new Map();
        for (let i = 0; i < arr.length; i++) {
            let key = target - arr[i];
            if (map.has(key)) {
                return [map.get(key), i];
            } else {
                map.set(arr[i], i)
            }
        }
        return [];
    };

    console.log(twoSum([1, 8, 1, 8, 1, 8, 1, 8, 12], 21));
}
/*
Two Sum uses a hashmap to find complement values, and therefore achieves O(N) time complexity.
Two Sum II uses the two pointers pattern and also has O(N) time complexity for a sorted array. 

**** We can use this approach for any array if we sort it first, which bumps the time complexity to O(nlogn).
*/




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
    // T: O(N)
    // S: O(N)
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