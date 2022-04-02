# Binary Search

- https://leetcode.com/explore/learn/card/binary-search/

- Binary Search can take many alternate forms and might not always be as straight forward as searching for a specific value. Sometimes you will have to apply a specific condition or rule to determine which side (left or right) to search next.
- If the collection is `unordered`, we can always `sort` it first before applying Binary Search.

---

# 3 Parts of a Successful Binary Search

- Binary Search is generally composed of 3 main sections:
  - `Pre-processing` - Sort if collection is unsorted.
  - `Binary Search` - Using a loop or recursion to divide search space in half after each comparison.
  - `Post-processing` - Determine viable candidates in the remaining space.

---

# my template

```js
var search = function (nums, target) {
  // [-1,0,3,5,9,12], target = 9
  if (nums.length === 0) return -1;

  let N = nums.length;
  let left = 0;
  let right = N - 1;
  let res = -1; // always hold the res

  while (left <= right) {
    let mid = left + parseInt((right - left) / 2);
    if (nums[mid] === target) {
      res = mid; // found the target, update the res;
      break;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return res;
};
```
