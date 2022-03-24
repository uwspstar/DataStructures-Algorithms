// PreSum 模版
// A subarray is a contiguous subsequence of the array.
 
var NumArray = function (nums) {
  const getPreSum = (arr) => {
    let N = nums.length;
    let preSum = new Array(N + 1).fill(0);
    for (let i = 0; i < N; i++) {
      preSum[i + 1] = preSum[i] + nums[i];
    }
    return preSum;
  };
  this.preSum = getPreSum(nums);
};

NumArray.prototype.sumRange = function (i, j) {
  return this.preSum[j + 1] - this.preSum[i];
};
