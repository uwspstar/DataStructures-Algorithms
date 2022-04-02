// ### 模板 2
/*
N = Nums.length

l =  0, r = N - 1
res = -1;
while (l <= r) {
    mid = l + (r - l) / 2
    if (Nums[mid] == target) {
        res = mid
        return Nums[mid]
    }

    if (Nums[mid] < target) {
        l = mid + 1
    } else {
        r = mid - 1;
    }
}

return res;
*/
{
    //nums = [1, 2, 3, 5, 5, 5, 8, 9]; target = 5, output 3
    const findFirstNumberBiggerAndEqualThanTarget = (nums, target) => {
        if (nums.length === 0) return -1;
        let N = nums.length;
        let l = 0;
        let r = N - 1;
        let res = -1;
        while (l <= r) {
            let mid = parseInt((l + r) / 2);

            if (nums[mid] < target) {
                l = mid + 1
            } else { // nums[mid] >= target
                res = mid
                r = mid - 1
            }
        }

        return res
    }
    let nums = [1, 2, 3, 5, 5, 5, 8, 9];
    // Output : 3
    console.log(findFirstNumberBiggerAndEqualThanTarget(nums, 5))
}

{
    //nums = [1, 2, 3, 5, 5, 5, 8, 9]; target = 5, output 2
    const findFirstNumberSmallerThanTarget = (nums, target) => {
        if (nums.length === 0) return -1
        let N = nums.length;
        let l = 0;
        let r = N - 1;
        let res = -1;
        while (l <= r) {
            let mid = parseInt((l + r) / 2);

            if (nums[mid] < target) {
                res = mid
                l = mid + 1
            } else { // nums[mid] >= target
                r = mid - 1
            }
        }
        return res
    }
    let nums = [1, 2, 3, 5, 5, 5, 8, 9];
    // Output : 2
    console.log(findFirstNumberSmallerThanTarget(nums, 5))
}
{
    //nums = [1, 2, 3, 5, 5, 5, 8, 9]; target = 5, output 6
    const findFirstNumberBiggerThanTarget = (nums, target) => {
        if (nums.length === 0) return -1
        let N = nums.length;
        let l = 0;
        let r = N - 1;
        while (l <= r) {
            let mid = parseInt((l + r) / 2);

            if (nums[mid] <= target) {
                l = mid + 1
            } else {
                res = mid;
                r = mid - 1
            }
        }
        return res;
    }
    let nums = [1, 2, 3, 5, 5, 5, 8, 9];
    // Output : 6
    console.log(findFirstNumberBiggerThanTarget(nums, 5))
}
{
    //nums = [1, 2, 3, 5, 5, 5, 8, 9]; target = 5, output 5
    const findLastNumberSmallerEqualThanTarget = (nums, target) => {
        if (nums.length === 0) return -1
        let N = nums.length;
        let l = 0;
        let r = N - 1;
        while (l <= r) {
            let mid = parseInt((l + r) / 2);
            if (nums[mid] <= target) {
                res = mid;
                l = mid + 1
            } else { //nums[mid] > target
                r = mid - 1
            }
        }
        return res
    }
    let nums = [1, 2, 3, 5, 5, 5, 8, 9];
    // Output : 5
    console.log(findLastNumberSmallerEqualThanTarget(nums, 5))
}