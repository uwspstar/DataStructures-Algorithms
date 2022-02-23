//153. Find Minimum in Rotated Sorted Array
{
    var findMin = function (nums) {
        if (nums.length === 1) return nums[0];
        let left = 0, right = nums.length - 1, res = -1;
        // no rotation.Already sorted array.
        if (nums[right] > nums[0]) return nums[0];
        while (left <= right) {
            let mid = parseInt(left + (right - left) / 2);

            // if the mid element is greater than its next element then mid+1 element is the smallest
            if (nums[mid] > nums[mid + 1]) {
                res = mid + 1;
                break;
            }
            // if the mid element is lesser than its previous element then mid element is the smallest
            if (nums[mid - 1] > nums[mid]) {
                res = mid;
                break;
            }
            // nums[mid] > nums[0], the least value is still to the right
            if (nums[mid] > nums[0]) {
                left = mid + 1;
            } else {// nums[mid] < nums[0]value is somewhere to the left
                right = mid - 1;
            }
        }

        return nums[res];
    };
}
{
    var findMin = function (nums) {

        if (nums.length == 1) return nums[0];

        let res = nums[0];
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {

            if (nums[left] < nums[right]) {
                res = Math.min(res, nums[left]);
                break;
            }

            let mid = (left + right) // 2;
            res = Math.min(res, nums[mid]);

            if (nums[mid] >= nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return res;

    };
}