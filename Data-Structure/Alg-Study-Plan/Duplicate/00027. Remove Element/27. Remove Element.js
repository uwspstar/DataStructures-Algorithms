// 27. Remove Element
/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
*/
{
    var removeElement = function (nums, val) {
        if (nums.length === 0) return 0;

        let j = 0;
        let i = 0
        let len = nums.length;

        while (j < len) {
            nums[i] === val ? nums.splice(i, 1) : i++;
            j++;
        }

        return i;
    };
    /*
    Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
    Matrix Diagonal Sum
    Count Good Meals
    */
}
{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    //nums = [2,2,3,3], val = 3
    //              f
    //            s
    var removeElement = function (nums, val) {
        let fast = 0, slow = 0;
        while (fast < nums.length) {
            if (nums[fast] !== val) {
                swap(nums, fast, slow);
                slow++;
            }
            fast++;
        }
        return slow;
    };
    // Find Minimum in Rotated Sorted Array II (H)
    // Minimum Cost to Cut a Stick (H)
    // Maximum Number of Removable Characters (M)
}