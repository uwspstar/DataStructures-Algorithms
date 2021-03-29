var moveZeroes = nums => {
    // nums = [0,1,0,3,12] == 4
    // [1,3,12,0,0]  

    let totalZero = 0;

    for (let i = 0,  p = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            totalZero++;
        } else {
            nums[p] = nums[i];
            p++;
        }
    }

    for (let i = nums.length - 1; i >= nums.length - totalZero; i--) {
        nums[i] = 0;
    }
}

