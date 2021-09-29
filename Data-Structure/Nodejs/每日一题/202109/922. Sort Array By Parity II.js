//922. Sort Array By Parity II
/*
Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.

Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
 
Input: nums = [2,3]
Output: [2,3]
*/
{
    //对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    var sortArrayByParityII = function (A) {
        let oddIndex = 1;
        for (let i = 0; i < A.length; i += 2) {
            if (A[i] % 2 === 1) { // 在偶数位遇到了奇数
                while (A[oddIndex] % 2 !== 0) {
                    oddIndex += 2; // 在奇数位找一个偶数
                }
                swap(A, i, oddIndex); // 替换
            }
        }
        return A
    };
}