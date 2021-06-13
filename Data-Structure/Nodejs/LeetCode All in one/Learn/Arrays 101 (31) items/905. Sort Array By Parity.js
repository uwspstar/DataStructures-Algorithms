//905. Sort Array By Parity
/*
Given an array nums of non-negative integers, return an array consisting of all the even elements of nums, followed by all the odd elements of nums.

You may return any answer array that satisfies this condition.
 
Input: nums = [3,1,2,4] Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/
{
    //two Pointers O(N)
    var sortArrayByParity = function (nums) {
        let left = 0;
        let right = nums.length - 1;

        const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

        while (left <= right) {
            if (nums[left] % 2 === 0) {
                left++;
            } else {
                swap(nums, left, right);
                right--;
            }
        }
        return nums;
    };
}
{   //O(nlogn)
    //nums.sort(a, b => a%2, b%2);
}
{   //brute force : > O(N), unshift function take time. but depend one the engine 
    var sortArrayByParity = function (nums) {
        let res = [];
        for (let n of nums) {
            n % 2 === 0 ? res.unshift(n) : res.push(n); //unshift take time
        }
        return res;
    };
    //Contains Duplicate II
    //Transpose Matrix
    //Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
}