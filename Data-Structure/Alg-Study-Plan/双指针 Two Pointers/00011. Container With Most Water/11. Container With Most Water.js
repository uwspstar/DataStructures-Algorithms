// 11. Container With Most Water
/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
*/
{
    // Return the maximum amount of water a container can store.
    var maxArea = function (arr) {
        const N = arr.length;
        let area = 0;
        let left = 0, right = N - 1;
        while (left < right) {
            let h = Math.min(arr[left], arr[right]);
            let w = right - left;
            area = Math.max(area, h * w);
            if (arr[left] < arr[right]) {
                left++
            } else {
                right--;
            }
        }
        return area;
    };
    // Longest Word in Dictionary through Deleting (M)
    // Subarrays with K Different Integers (H)
    // Find the Longest Valid Obstacle Course at Each Position (H)
}