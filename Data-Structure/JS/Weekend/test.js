{
    var nextPermutation = function (nums) {
        if (nums.length <= 1) return;
        const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
        let pi = nums.length - 2; // need something to compare it
        // [4, 5, 6, 2, 1]
        //     pi
        while (pi >= 0 && nums[pi] > nums[pi + 1]) {
            pi--;
        }
        // Loop through the provided numbers from right to left
        for (let i = nums.length - 1; i > pi; i--) {
            if (nums[i] > nums[pi]) {
                swap(nums, i, pi);// Swap the numbers round
                // Reverse the rest of the array
                console.log('nums', nums);
                let chopped = nums.splice(pi + 1).sort((a, b) => a - b);
                console.log('chopped', chopped);
                nums.push(...chopped);
                return nums;
            }
        }

        // Right-hand swap not found, return lowest permutation instead
        return nums.sort((a, b) => a - b);
    };
    console.log(nextPermutation([4, 5, 8, 6, 2, 1])) // 4, 6, 1 , 2 , 5, 8
};
