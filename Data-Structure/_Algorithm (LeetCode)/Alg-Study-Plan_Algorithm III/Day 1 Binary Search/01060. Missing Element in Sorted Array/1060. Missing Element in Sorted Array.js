// 1060. Missing Element in Sorted Array
/*
Given an integer array nums which is sorted in ascending order and all of its elements are unique and given also an integer k, return the kth missing number starting from the leftmost number of the array.

 

Example 1:

Input: nums = [4,7,9,10], k = 1
Output: 5
Explanation: The first missing number is 5.
Example 2:

Input: nums = [4,7,9,10], k = 3
Output: 8
Explanation: The missing numbers are [5,6,8,...], hence the third missing number is 8.
*/
{
    var missingElement = function (arr, k) {
        let l = 0;
        let r = arr.length;
        // Find right most value such that missing is smaller or equal to k
        while (l < r) {
            let mid = l + Math.floor((r - l) / 2) + 1;
            let missing = arr[mid] - arr[0] - mid;
            if (missing < k) l = mid;
            else r = mid - 1;
        }

        let missing = arr[r] - arr[0] - r;
        return arr[r] + (k - missing);
    };
}
{
    // https://leetcode.com/problems/missing-element-in-sorted-array/discuss/724449/JS-simple-solution
    // sorted in ascending order 
    // kth missing number starting from the leftmost number of the array.
    var missingElement = function (nums, k) {
        for (let i = 0; i < nums.length - 1; i++) {
            const diff = nums[i + 1] - nums[i] - 1;
            if (diff > 0 && k - diff <= 0) return nums[i] + k;
            if (diff > 0 && k - diff > 0) k -= diff;
        }
        return nums[nums.length - 1] + k;
    };
    // Count Primes (M)
    // Longest Harmonious Subsequence (E)
    // Jump Game VI (M)
}
{
    // https://leetcode.com/problems/missing-element-in-sorted-array/discuss/1230561/4-JS-Solutions


    // Fourth Solution
    // Binary Search  
    /*
    missing[i] = (nums[i] - nums[0] - 1) - (i - 1) =  nums[i] - nums[0] - i,
    where missing[i] is the number of missing elements from index 0 to index i in given array (See above for explanation)
    
    1. Use binary search to iterate through elements. 
    At each element, check the following:
    - if missing[i] >= k
        if missing[i-1] < k
            // k-th missing number is between previous element and current element
            return value (we know that k-th missing number is between previous element and current element)
        else
            // k-th missing number is even less than previous element
            move to left
    - else (if missing[i] < k)
        move to right
    
    */
    var missingElement = function (nums, k) {
        if (nums === null || nums.length === 0) {
            return null;
        }

        // k-th missing number is beyond the last element of array
        if (k > missing(nums, nums.length - 1)) {
            return nums[nums.length - 1] + (k - missing(nums, nums.length - 1));
        }

        let low = 0, high = nums.length - 1;
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            // k-th missing number is less than current element
            if (missing(nums, mid) >= k) {
                // k-th missing number is between previous element and current element
                if (missing(nums, mid - 1) < k) {
                    // take into account all previous missing numbers
                    // previous number + x = k-th missing number
                    let x = k - missing(nums, mid - 1);
                    return nums[mid - 1] + x;
                } else {
                    // k-th missing number is even less than previous element
                    high = mid - 1;
                }
            } else {
                // k-th missing number is greater than current element
                low = mid + 1;
            }
        }
        // T.C: O(log(N))
        // S.C: O(1)
    };

    function missing(nums, idx) {
        return nums[idx] - nums[0] - idx;
    }
}