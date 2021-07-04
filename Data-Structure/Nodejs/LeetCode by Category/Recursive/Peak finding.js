//Binary Search
/*
Given a non-empty array of integers arr, create a function that returns the index of a peak element. We consider an element as peak if it's greater than or equal to its neighbors, the next and previous element (assume that arr[-1] and arr[n] are equal to -∞). And if there are multiple peaks in arr, just return the index of one of them.

Example 1:
Input: arr = [4, 5, 8, 3] Output: 2
Explanation: arr[2] is a peak element because it's greater than or equal to arr[1], and greater than or equal to arr[3]

Example 2:
Input: arr = [1, 3, 4, 7, 8] Output: 4
Explanation: arr[4] is a peak element because it's greater than or equal to arr[3], which is it's only neighbor

Example 3:
Input: arr = [1, 5, 2, 6, 6, 3] Output: 3
Explanation: arr[3] is a peak element because it's greater than or equal to arr[2] and greater than or equal to arr[4] (other valid outputs would be 1 and 4, because arr[1] and arr[4] are also peak elements)
*/
{
    // By using divide and conquer (iteratively):

    // Time complexity: O(logn)
    // Space complexity: O(1)

    function findPeak(arr) {
        //[1, 5, 2, 6, 6, 3]
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < arr[mid + 1]) left = mid + 1;
            else right = mid;
        }
        return left;
    }


}
{
    // By using divide and conquer (recursively):

    // Time complexity: O(logn)
    // Space complexity: O(1)

    function findPeak(arr, left = 0, right = arr.length - 1) {
        if (left >= right) return left;
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < arr[mid + 1]) {
            return findPeak(arr, mid + 1, right);
        } else {
            return findPeak(arr, left, mid);
        }
    }
}
{
    //brute force
    const findPeak = arr => {
        if (arr.length < 2) return 0;
        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
        }
        return 0;
    }
}