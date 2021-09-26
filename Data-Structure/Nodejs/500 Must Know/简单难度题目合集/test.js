const twoSum = (nums, target) => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let key = target - nums[i];
        if (!map.has(key)) {
            map.set(nums[i], i);
        } else {
            return [map.get(key), i];
        }
    }
};
{
    let nums = [2, 7, 11, 15], target = 9;
    console.log(twoSum(nums, target));
}
{
    let nums = [3, 2, 4], target = 6;
    console.log(twoSum(nums, target));
}
{
    let nums = [3, 3], target = 6;
    console.log(twoSum(nums, target));
}
