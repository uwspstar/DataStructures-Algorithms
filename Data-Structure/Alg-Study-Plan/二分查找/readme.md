---
marp: true
---

# LeetCode 101

- LeetCode 101:和你一起你轻松刷题(C++) LeetCode 101: A LeetCode Grinding Guide (C++ Version) 作者:高畅 Chang Gao
- github.com/changgyhub/leetcode_101

# 二分查找

- 也常被称为二分法或者折半查找，每次查找时通过将待查找区间分成两部分并只取 一部分继续查找，将查找的复杂度大大减少。对于一个长度为 O(n) 的数组，二分查找的时间复 杂度为 O(log n)

- 二分查找也可以看作双指针的一种特殊情况，但我们一般会将二者区分。双指针类型的题， 指针通常是一步一步移动的，而在二分查找里，指针每次移动半个区间长度

# 代码模版

```js
const binarySearch = (nums, target) => {
  // corner case 处理
  if (nums === null || nums.length === 0) return -1;

  let start = 0,
    end = nums.length - 1;

  // 要点1: start + 1 < end
  while (start + 1 < end) {
    // 要点 2: start + (end - start) / 2
    let mid = parseInt(start + (end - start) / 2);
    // 要点3:=, <, > 分开讨论，mid 不 +1 也不 -1
    if (nums[mid] === target) {
      return nums[mid];
    } else if (nums[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }
  // 要点 4: 循环结束后，单独处理 start 和 end
  if (nums[start] === target) return start;
  if (nums[end] === target) return end;

  return -1;
};
```
