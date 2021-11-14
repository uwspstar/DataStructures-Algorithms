// 658. Find K Closest Elements
/*
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
 
Input: arr = [1,2,3,4,5], k = 4, x = 3 Output: [1,2,3,4]
Input: arr = [1,2,3,4,5], k = 4, x = -1 Output: [1,2,3,4]
*/
{
    // brute force
    // O(NlogN + KLogK)
    var findClosestElements = function (arr, k, x) {
        let N = arr.length;
        let sortArr = [];
        // O(N)
        for (let i = 0; i < N; i++) {
            sortArr.push([Math.abs(x - arr[i]), i]);
        }
        // O(NlogN)
        sortArr.sort((a, b) => {
            return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
        })

        let ans = [];

        for (let i = 0; i < k; i++) {
            ans[i] = arr[sortArr[i][1]];
        }

        console.log('res = ', sortArr, 'ans = ', sortArr);
        // O(KlogK)
        return ans.sort((a, b) => a - b);
    };

    console.log(findClosestElements([1,2,3,4,5], 4, 3)) // [ 1, 2, 3, 4 ]
    console.log(findClosestElements([1,2,3,4,5], 4, -1)) // [ 1, 2, 3, 4 ]
}