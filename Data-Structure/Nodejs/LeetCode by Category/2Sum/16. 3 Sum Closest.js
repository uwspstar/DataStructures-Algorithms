{
    // T : O(N^2)
    var threeSumClosest = function (nums, target) {
        nums.sort((a, b) => a - b); //N(logN)

        let res = -Infinity;
        let closeValue = Infinity;

        //O(N^2)
        for (let i = 0; i < nums.length; i++) {//O(N)

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {//O(N)
                let sum = nums[i] + nums[left] + nums[right];

                let tmp = Math.abs(target - sum);

                if (tmp < closeValue) {
                    closeValue = tmp;
                    res = sum;
                }

                if (sum === target) return sum;

                if (sum > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
        return res;
    }
}