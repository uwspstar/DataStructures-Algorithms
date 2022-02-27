//977. Squares of a Sorted Array
{
    /*
For example, with [-3, -2, -1, 4, 5, 6], we have the negative part [-3, -2, -1] with squares [9, 4, 1], and the positive part [4, 5, 6] with squares [16, 25, 36]. Our strategy is to iterate over the negative part in reverse, and the positive part in the forward direction.
*/
    var sortedSquares = function (nums) {
        let n = nums.length;
        let res = Array(n); // O(N) space

        let left = 0;
        let right = n - 1;
        let square = 0;
        //back word
        for (let i = n - 1; i >= 0; i--) { // backward

            if (Math.abs(nums[left]) < Math.abs(nums[right])) {
                square = nums[right];
                right--;
            } else {
                square = nums[left];
                left++;
            }
            res[i] = square * square;
        }
        return res;
    };
}
{
    var sortedSquares = function (nums) {
        nums.sort((a, b) => a * a - b * b); // O(nlogn)
        let res = nums.map(x => x * x); // O(n)
        return res;
    }
}