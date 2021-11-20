//540. Single Element in a Sorted Array
/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.
*/
{
    var singleNonDuplicate = function (nums) {
        let N = nums.length;
        if (N === 1) return nums[0];
        let left = 0;
        let right = N - 1;
        while (left <= right) {
            let mid = parseInt(left + (right - left) / 2);

            if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
                return nums[mid];
            } else if (nums[mid] === nums[mid - 1]) {
                if ((mid - 2 - left + 1) % 2 == 0) {
                    left = mid + 1;
                } else {
                    right = mid - 2;
                }
            } else if (nums[mid] === nums[mid + 1]) {
                if ((mid - 1 - left + 1) % 2 == 0) {
                    left = mid + 2;
                } else {
                    right = mid - 1;
                }
            }
        }

        return nums[left];
    };
}