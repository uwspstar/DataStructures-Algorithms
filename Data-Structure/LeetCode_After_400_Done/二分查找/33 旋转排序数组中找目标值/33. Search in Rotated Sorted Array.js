// 33. Search in Rotated Sorted Array
var search = function (nums, target) {
    let N = nums.length;
    let left = 0;
    let right = N - 1;
    let res = -1;
    while (left <= right) {
        let mid = parseInt(left + (right - left) / 2);
        if (nums[mid] === target) {
            res = mid;
            break;
        }
        // 先根据 nums[mid] 与 nums[left] 的关系判断 mid 是在左段还是右段 
        if (nums[mid] >= nums[left]) { // mid 是在左段
            // 再判断 target 是在 mid 的左边还是右边，从而调整左右边界 left 和 right
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { //nums[mid] < nums[left] //mid 是在右段
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return res;
}
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));