// 3 sum use two pointers
// 2 sum use hashmap

{
    // T: (N^2) S:O(1)
    var threeSum = function (nums) {
        if (nums.length < 3) return [];
        nums.sort((a, b) => a - b);
        //T(NlogN)
        if (nums[0] > 0) return [];
        if (nums[nums.length - 1] < 0) return [];
        let res = [];

        //N * O(N) 
        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {//O(N) 
                let sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }

                } else if (sum > 0) {
                    right--;

                } else {
                    left++;
                }
            }
        }
        return res;
    };
}