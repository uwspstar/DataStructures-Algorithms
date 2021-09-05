//565. Array Nesting
/*
You are given an integer array nums of length n where nums is a permutation of the numbers in the range [0, n - 1].

You should build a set s[k] = {nums[k], nums[nums[k]], nums[nums[nums[k]]], ... } subjected to the following rule:

The first element in s[k] starts with the selection of the element nums[k] of index = k.
The next element in s[k] should be nums[nums[k]], and then nums[nums[nums[k]]], and so on.
We stop adding right before a duplicate element occurs in s[k].
Return the longest length of a set s[k].

Input: nums = [5,4,0,3,1,6,2]
Output: 4
Explanation: 
nums[0] = 5, nums[1] = 4, nums[2] = 0, nums[3] = 3, nums[4] = 1, nums[5] = 6, nums[6] = 2.
One of the longest sets s[k]:
s[0] = {nums[0], nums[5], nums[6], nums[2]} = {5, 6, 2, 0}

Input: nums = [0,1,2]
Output: 1
*/
{   // T: O(N)
    // S: O(N)
    var arrayNesting = function (nums) {
        let res = 0;
        let visited = [];

        for (let i = 0; i < nums.length; i++) {
            if (!visited[i]) {
                let start = nums[i];
                let count = 0;
                do {
                    start = nums[start];
                    count++;
                    visited[start] = true;
                }
                while (start != nums[i]);

                res = Math.max(res, count);
            }

        }
        return res;
    };
}
{
    // T: O(N^2)
    // S: O(1)
    var arrayNesting = function (nums) {
        let res = 0;

        for (let i = 0; i < nums.length; i++) {
            let start = nums[i];
            let count = 0;
            do {
                start = nums[start];
                count++;
            }
            while (start != nums[i]);

            res = Math.max(res, count);
        }

        return res;
    };
}