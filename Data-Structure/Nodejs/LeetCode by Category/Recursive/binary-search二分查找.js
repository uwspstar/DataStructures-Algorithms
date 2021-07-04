{
    const binarySearch =  (nums, target, left = 0, right = nums.length - 1) => {
        if (left > right) return -1;

        let mid = left + (right - left) / 2;
        mid = parseInt(mid); 
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            return binarySearch(nums, target,left, mid - 1) ;
        } else {
            return binarySearch(nums, target,mid + 1, right);
        }
    };

    console.log('recursive, binarySearch:', binarySearch([-1,0,3,5,9,12], 9));
}
{
    const binarySearch =  (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
    
        while (left <= right) {
            let mid = left + (right - left) / 2;
            mid = parseInt(mid);
    
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    };

    console.log('binarySearch:', binarySearch([-1,0,3,5,9,12], 9));
}