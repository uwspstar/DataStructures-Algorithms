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
    const findClosestElements = (arr, k, x) => {
        let res = [];
        arr.sort((a, b) => Math.abs(a - x) - Math.abs(b - x));

        console.log('arr=', arr);

        for (let i = 0; i < k; i++) {
            res.push(arr[i]);
        }
        return res.sort((a, b) => a - b);
    }

    //console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)); // [ 1, 2, 3, 4 ]
    //console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1)); // [ 1, 2, 3, 4 ]
    console.log(findClosestElements([1, 1, 1, 10, 10, 10], 1, 9));
}