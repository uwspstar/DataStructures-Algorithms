// 454. 4Sum II
/*
Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 
Example 1:
Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
Output: 2
Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

Example 2:
Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
Output: 1
*/

var fourSumCount = (A, B, C, D) => {
    let map = new Map();
    let count = 0;

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            let key = A[i] + B[j];
            let value = map.get(key);
            value ? map.set(key, value + 1) : map.set(key, 1);
        }
    }

    for (let i = 0; i < C.length; i++) {
        for (let j = 0; j < C.length; j++) {
            let key = C[i] + D[j];
            let value = map.get(-1 * key);
            value ? count += value : {};
        }
    }

    return count;
};