{
    var threeSum = function (nums) {
        if (nums.length < 3) return [];

        nums.sort((a, b) => a - b); // in order first

        if (nums[0] > 0) return [];

        if (nums[nums.length - 1] < 0) return [];

        let res = [];

        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;

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
/*
Shortest Word Distance II
Minimum Length of String After Deleting Similar Ends
Watering Plants II
*/