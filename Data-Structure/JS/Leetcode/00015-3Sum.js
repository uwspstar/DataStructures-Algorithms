/*
15. 3Sum : Medium

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

The solution set must "not" contain "duplicate triplets".

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

Keys of WeakMaps are of the type Object only. Primitive data types as keys are not allowed (e.g. a Symbol can't be a WeakMap key).
*/

// 1: naive solution 3 nest loop (N^3 * NlogN)
// 2: a + b = 0 - c = -c

// slow, how to remove duplicate ?
const threeSumZero = function (arr) {
    if (arr.length < 3) return undefined;
    let set = new Set();
    let setKeys = new Set(); // save keys
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let x = j + 1; x < arr.length; x++) {
                if (arr[i] + arr[j] + arr[x] === 0) {
                    let temp = [arr[i], arr[j], arr[x]].sort(); //O(nlogn)
                    let tempStr = temp[0].toString() + "-"
                        + temp[1].toString() + "-"
                        + temp[2].toString()
                    console.log('tempStr=', tempStr);
                    if (!setKeys.has(tempStr)) {
                        setKeys.add(tempStr)
                        set.add(temp);
                    }
                }
            }
        }
    }
    return set;
}

console.log(threeSumZero([-3, -1, 0, 1, 2, -1, -4]))
/*
算法流程：
特判，对于数组长度 nn，如果数组为 nullnull 或者数组长度小于 33，返回 [][]。
对数组进行排序。
遍历排序后数组：
若 nums[i]>0nums[i]>0：因为已经排序好，所以后面不可能有三个数加和等于 00，直接返回结果。
对于重复元素：跳过，避免出现重复解
令左指针 L=i+1L=i+1，右指针 R=n-1R=n−1，当 L<RL<R 时，执行循环：
当 nums[i]+nums[L]+nums[R]==0nums[i]+nums[L]+nums[R]==0，执行循环，判断左界和右界是否和下一位置重复，去除重复解。并同时将 L,RL,R 移到下一位置，寻找新的解
若和大于 00，说明 nums[R]nums[R] 太大，RR 左移
若和小于 00，说明 nums[L]nums[L] 太小，LL 右移
复杂度分析
时间复杂度：O\left(n^{2}\right)O(n 
2
 )，数组排序 O(N \log N)O(NlogN)，遍历数组 O\left(n\right)O(n)，双指针遍历 O\left(n\right)O(n)，总体 O(N \log N)+O\left(n\right)*O\left(n\right)O(NlogN)+O(n)∗O(n)，O\left(n^{2}\right)O(n 
2
 )
空间复杂度：O(1)O(1)

作者：wu_yan_zu
链接：https://leetcode-cn.com/problems/3sum/solution/pai-xu-shuang-zhi-zhen-zhu-xing-jie-shi-python3-by/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

/*
var threeSum = function(nums) {
  // 最左侧值为定值，右侧所有值进行两边推进计算
  let res = [];
  nums.sort((a, b) => a - b);
  let size = nums.length;
  if (nums[0] <= 0 && nums[size - 1] >= 0) {
    // 保证有正数负数
    let i = 0;
    while (i < size - 2) {
      if (nums[i] > 0) break; // 最左侧大于0，无解
      let first = i + 1;
      let last = size - 1;
      while (first < last) {
        if (nums[i] * nums[last] > 0) break; // 三数同符号，无解
        let sum = nums[i] + nums[first] + nums[last];
        if (sum === 0) {
          res.push([nums[i], nums[first], nums[last]]);
        }
        if (sum <= 0) {
          // 负数过小，first右移
          while (nums[first] === nums[++first]) {} // 重复值跳过
        } else {
          while (nums[last] === nums[--last]) {} // 重复值跳过
        }
      }
      while (nums[i] === nums[++i]) {}
    }
  }

  return res;
};

作者：githber
链接：https://leetcode-cn.com/problems/3sum/solution/three-sum-giftu-jie-by-githber/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

var threeSum = function (nums) {
    if (nums.length < 3) return [];

    nums.sort((a, b) => a - b);

    let size = nums.length;

    if (nums[0] > 0) return [];
    if (nums[size - 1] < 0) return [];

    
    let res = [];

    let i = 0;
    while (i < size - 2) {
        if (nums[i] > 0) break; // 最左侧大于0，无解
        let first = i + 1;
        let last = size - 1;
        while (first < last) {
            if (nums[i] * nums[last] > 0) break; // 三数同符号，无解
            let sum = nums[i] + nums[first] + nums[last];
            if (sum === 0) {
                res.push([nums[i], nums[first], nums[last]]);
            }
            if (sum <= 0) {
                // 负数过小，first右移
                while (nums[first] === nums[++first]) { } // 重复值跳过
            } else {
                while (nums[last] === nums[--last]) { } // 重复值跳过
            }
        }
        while (nums[i] === nums[++i]) { }
    }

    return res;
};

console.log('threeSum : ', threeSum([-3, -1, 0, 1, 2, -1, -4]));