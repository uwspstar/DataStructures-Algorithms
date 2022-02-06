const process = (nums, k) => {
    let p = 0;
    for (let x of nums) {
        if (p < k || nums[p - k] !== x) {
            nums[p] = x;
            p++;
        }  
    }
    return p;
};

var removeDuplicates = function (nums) {
    return process(nums, 2);
}