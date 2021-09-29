
/*
给定一个整数数组 nums  和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那   两个   整数，并返回它们的数组下标。

- 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

 
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。注明出处。
 
*/
//你可以想出一个时间复杂度小于 O(n2) 的算法吗？

const twoSum = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i];
    if (!map.has(key)) {
      map.set(nums[i], i);
    } else {
      return [i, map.get(key)];
    }
  }
};
// test ======================================
{
  let nums = [2, 7, 11, 15],
    target = 9;
  console.log(twoSum(nums, target)); //[ 0, 1 ]
}
{
  let nums = [3, 2, 4],
    target = 6;
  console.log(twoSum(nums, target)); //[ 1, 2 ]
}
{
  let nums = [3, 3],
    target = 6;
  console.log(twoSum(nums, target)); //[0, 1];
}

