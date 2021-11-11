// ### 模板 1
// isBlue means  <  target, return r;
/*
arr : BBBBBBBBRRRRR
B is blue;
R is red


l = -1, r = N
while (l + 1 != N) 
    m = (l + r) / 2
    if IsBlue(m)
        l = m
    else 
        r = m

return l or r
*/
{
    const findFirstNumberBiggerAndEqualThanTarget = (nums, target) => {
        if (nums.length === 0) return -1;
        let N = nums.length;
        let l = -1;
        let r = N;
        while (l + 1 != r) {
            let mid = parseInt((l + r) / 2);
            if (nums[mid] < target) {
                l = mid
            } else {
                r = mid
            }
        }

        return r
    }
    let nums = [1, 2, 3, 5, 5, 5, 8, 9];
    // Output : 3
    console.log(findFirstNumberBiggerAndEqualThanTarget(nums, 5))
}

{
    const findFirstNumberSmallerThanTarget = (nums, target) => {
        if (nums.length === 0) return -1
        let N = nums.length;
        let l = -1;
        let r = N;
        while (l + 1 != r) {
            let mid = parseInt((l + r) / 2);
            if (nums[mid] < target) {
                l = mid
            } else {
                r = mid
            }
        }
        return l
    }
    let nums = [1, 2, 3, 5, 5, 5, 8, 9];
    // Output : 2
    console.log(findFirstNumberSmallerThanTarget(nums, 5))
}
{
    const findFirstNumberBiggerThanTarget = (nums, target) => {
        if (nums.length === 0) return -1
        let N = nums.length;
        let l = -1;
        let r = N;
        while (l + 1 != r) {
            let mid = parseInt((l + r) / 2);
            if (nums[mid] <= target) {
                l = mid
            } else {
                r = mid
            }
        }
        return r
    }
    let nums = [1, 2, 3, 5, 5, 5, 8, 9];
    // Output : 6
    console.log(findFirstNumberBiggerThanTarget(nums, 5))
}
{
    const findLastNumberSmallerEqualThanTarget = (nums, target) => {
        if (nums.length === 0) return -1
        let N = nums.length;
        let l = -1;
        let r = N;
        while (l + 1 != r) {
            let mid = parseInt((l + r) / 2);
            if (nums[mid] <= target) {
                l = mid
            } else {
                r = mid
            }
        }
        return l
    }
    let nums = [1, 2, 3, 5, 5, 5, 8, 9];
    // Output : 5
    console.log(findLastNumberSmallerEqualThanTarget(nums, 5))
}