---
marp: true
---

# https://labuladong.gitee.io/algo/2/22/61/

# LeetCode 101

- LeetCode 101:和你一起你轻松刷题(C++) LeetCode 101: A LeetCode Grinding Guide (C++ Version) 作者:高畅 Chang Gao
- github.com/changgyhub/leetcode_101

# 二分查找

- 也常被称为二分法或者折半查找，每次查找时通过将待查找区间分成两部分并只取 一部分继续查找，将查找的复杂度大大减少。对于一个长度为 O(n) 的数组，二分查找的时间复 杂度为 O(log n)

- 二分查找也可以看作双指针的一种特殊情况，但我们一般会将二者区分。双指针类型的题， 指针通常是一步一步移动的，而在二分查找里，指针每次移动半个区间长度

```js
function binarySearch(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] == target) {
      // 直接返回
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  // 直接返回
  return -1;
}

// left 
function leftBoundSearch(nums, target) {
  if (nums.length == 0) return -1;
  let left = 0;
  let right = nums.length - 1; // 注意

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      right = mid - 1; // 注意
    } else if (nums[mid] < target) {
      left = mid + 1; // 注意
    } else {
      right = mid - 1; // 注意
    }
  }
  // target 比所有数都大
  if (left >= nums.length) return -1;
  // 类似之前算法的处理方式
  return nums[left] === target ? left : -1;
}

// right
function rightBoundSearch(nums, target) {
  if (nums.length == 0) return -1;
  let left = 0;
  let right = nums.length - 1; // 注意

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      left = mid + 1; // 注意
    } else if (nums[mid] < target) {
      left = mid + 1; // 注意
    } else {
      right = mid - 1; // 注意
    }
  }
  // target 比所有元素都小
  if (right < 0) return -1;
  // 类似之前算法的处理方式
  return nums[right] === target ? right : -1;
}

console.log(binarySearch([5, 8, 8, 8, 8, 10], 8));
console.log(leftBoundSearch([5, 8, 8, 8, 8, 10], 8));
console.log(rightBoundSearch([5, 8, 8, 8, 8, 10], 8));
```
