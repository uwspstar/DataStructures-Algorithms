//34. Find First and Last Position of Element in Sorted Array
/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

*** You must write an algorithm with O(log n) runtime complexity.

Example 1: Input: nums = [5,7,7,8,8,10], target = 8 Output: [3,4]
Example 2: Input: nums = [5,7,7,8,8,10], target = 6 Output: [-1,-1]
Example 3: Input: nums = [], target = 0 Output: [-1,-1]
*/
//Two Binary Searches
//Normally, we compare nums[mid] == target 
//because we simply need to check if we found our target or not. 
//But now, apart from checking for equality, 
//we also need to check if mid is the first or the last index 
//where the target occurs
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int firstIndex = this.findBound(nums, target, true);
        if (firstIndex == -1) {
            return new int[]{-1, -1};
        }
        int lastIndex = this.findBound(nums, target, false);
        return new int[]{firstIndex, lastIndex};
    }
    private int findBound(int[] nums, int target, boolean isFirst) {
        int begin = 0;
        int end = nums.length - 1;
        
        while (begin <= end) {
            int mid = begin + (end - begin) / 2;
            
            if (nums[mid] == target) {
                if (isFirst) {//left side 2 cases:
                    if (mid == begin || nums[mid - 1] != target) {
                        return mid;//2 cases
                    } else {
                        end = mid - 1;
                    }
                } else { //right side
                    if (mid == end || nums[mid + 1] != target) {
                        return mid;//2 cases
                    } else {
                        begin = mid + 1;
                    }
                }
            } else if (nums[mid] > target) {
                end = mid - 1;
            } else {
                begin = mid + 1;
            }
        }        
        return -1;
    }
}
/*
Smallest Rectangle Enclosing Black Pixels
Maximum Average Subarray II
Distinct Numbers in Each Subarray
*/