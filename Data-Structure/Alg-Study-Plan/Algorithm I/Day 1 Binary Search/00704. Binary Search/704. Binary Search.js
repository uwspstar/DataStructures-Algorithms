//704. Binary Search
var search = function(nums, target) {
    // [-1,0,3,5,9,12], target = 9
    if (nums.length === 0) return -1;
    
    let N =  nums.length
    let left = 0;
    let right = N - 1;
    let res = -1;
    
    while (left <= right) {
        let mid = left + parseInt ((right - left) / 2); 
        if (nums[mid] === target) {
            res = mid;
            break;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return res;
}