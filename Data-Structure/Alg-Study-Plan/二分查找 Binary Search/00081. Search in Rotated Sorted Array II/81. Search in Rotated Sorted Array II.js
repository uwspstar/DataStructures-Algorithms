//81. Search in Rotated Sorted Array II
var search = function (nums, target) {
    //[4,5,6,0,1,2,4]. 0
    //[4,0,1,2,4,4,4]. 0
    //[4,5,6,6,7,8,0,1,2,4]. 0
    if (nums.length === 1) return nums[0] === target;
    let left = 0, right = nums.length - 1;
    if (nums[left] === target) return true;
    if (nums[right] === target) return true;

    while (nums[0] === nums[right]) {
        right--;
    }
    while (nums[0] === nums[left]) {
        left++;
    }

    while (left <= right) {
        let mid = left + parseInt((right - left) / 2);
        if (nums[mid] === target) return true;
        // think deep to understand it
        if (nums[left] == nums[mid] && nums[mid] == nums[right]) {
            left++;
            right--;
        }
        else {
            if (nums[left] <= nums[mid]) { // left <= right
                if (target < nums[mid] && target >= nums[left]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }

            }
        }
    }
    return false;
};
{
    var search = function (nums, target) {
        const n = nums.length;
        if (n === 0) {
            return false;
        }
        if (n === 1) {
            return nums[0] === target;
        }
        let l = 0, r = n - 1;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (nums[mid] === target) {
                return true;
            }
            if (nums[l] === nums[mid] && nums[mid] === nums[r]) {
                ++l;
                --r;
            } else if (nums[l] <= nums[mid]) {
                if (nums[l] <= target && target < nums[mid]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else {
                if (nums[mid] < target && target <= nums[n - 1]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }
        return false;
    };

    // https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/solution/sou-suo-xuan-zhuan-pai-xu-shu-zu-ii-by-l-0nmp/
}