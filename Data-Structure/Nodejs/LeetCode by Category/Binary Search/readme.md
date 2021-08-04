---
marp: true
theme: default
header: 'leetcode'
footer: 'Code Interview'
paginate: true
size: 16:9
---

### 二分查找法主要是解决在“一堆数中找出指定的数”这类问题。O(logn), Sorted

- https://labuladong.github.io/algo/
- https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%90%9C%E5%B0%8B%E6%BC%94%E7%AE%97%E6%B3%95
- https://www.youtube.com/channel/UCYkHDxA4LCZ7XSluTtfDgYQ
- https://www.youtube.com/watch?v=jB23XIQUSbI
- 存储在数组中
- 有序排列 : 是一种在有序数组中查找某一特定元素的搜索算法
- 所以如果是用链表存储的，就`无法`在其上应用二分查找法了。
- Binary search is a search algorithm that find the position of a target value within a `sorted array.` `O(logn)`

---

- 分析二分查找的一个技巧是:不要出现 else，而是把所有情况用 else if 写清 楚，这样可以清楚地展现所有细节

---

# 二分查找框架

```js
const  binarySearch(nums, target) {
    let left = 0;
    let right = ...;
    while(...) {
        let mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            ...
        } else if (nums[mid] < target) {
            left = ...
        } else if (nums[mid] > target) {
            right = ...
        }
    }
    return ...;
}
```

---

# 二分查找算法有许多种变种

- 比如`分散层叠`可以提升在多个数组中对同一个数值的搜索的速度。分散层叠有效的解决了计算几何学和其他领域的许多搜索问题。
- `指数搜索`将二分查找算法拓宽到无边界的列表。
- ## `二叉搜索树`和`B树数据结构`就是基于二分查找算法的。

### Basic

- find target (single one)
- find target (duplicate, start index, end index)

---

# 二分查找寻找一个数

```js
var arr = [1, 3, 5, 7, 9, 10, 11, 12, 14, 15, 19, 20];
function binarySearch(arr, val) {
  var low = 0,
    high = arr.length - 1;
  while (low <= high) {
    var mid = left - parseInt((high - left) / 2);
    if (val === arr[mid]) {
      return mid;
    } else if (val > arr[mid]) {
      low = mid + 1;
    } else if (val < arr[mid]) {
      high = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch(arr, 14));
```

---

### 为什么 while 循环的条件中是 <=，而不是 <

- 区别是: `<=` 相当于两端都闭区 间 `[left, right]`，`<` 相当于左闭右开区间 `[left, right)`，因为索引大小为 nums.length 是越界的。
- `while(left <= right)` 的终止条件是 `left == right + 1`，写成区间的形式就是 `[right + 1, right]`，或者带个具体的数字进去 `[3, 2]`，可⻅这时候区间为空
- `while(left < right)` 的终止条件是 `left == right`，写成区间的形式就是 `[left, right]`，或者带个具体的数字进去 `[2, 2]`，这时候区间非空，还有一个数 `2`

---

- 如果你非要用 `while(left < right)` 也可以

```js
while (left < right) {
  // ...
}
return nums[left] == target ? left : -1;
```

---

# 寻找左侧边界的二分搜索

```js
const leftBoundarySearch = (nums, target) => {
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length; // 注意
  while (left < right) {
    // 注意 [left, right)
    let mid = left + parseInt((right - left) / 2);
    if (nums[mid] === target) {
      right = mid; // 注意
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid; // 注意
    }
  }
  return left;
};
var nums = [1, 1, 2, 2, 2, 2, 10, 11];
console.log(leftBoundarySearch(nums, 2));
```

---

### 为什么 while(left < right) 而不是 <=

- 因为 right = nums.length 而不是 nums.length - 1 。 因此每次循环的「搜索区间」是 [left, right) 左闭右开

---

### 为什么 left = mid + 1，right = mid ?和之前的算法不一样?

- 「搜索区间」是 `[left, right)` 左闭右开，所以 当 `nums[mid]` 被检测之后，下一步的搜索区间应该去掉 mid 分割成两个区 间，即 `[left, mid)` 或 `[mid + 1, right)`。

---

### 「左侧边界」有什么特殊含义

- 对于这个数组，算法会返回 1。这个 1 的含义可以这样解读:nums 中`小于` 2 的元素有 1 个。
- 比如对于有序数组 nums = [2,3,5,7], target = 1，算法会返回 0，含义是: nums 中小于 1 的元素有 0 个。 再比如说 nums 不变，target = 8，算法会返回 4，含义是:nums 中小于 8 的 元素有 4 个。

---

### 为什么该算法能够搜索左侧边界? 找到 `target` 时不要立即返回

- 关键在于对于 `nums[mid] == target` 这种情况的处理: 可⻅，找到 `target` 时`不要立即返回`，而是缩小「搜索区间」的上界 `right`，在 区间 `[left, mid)` 中继续搜索，即`不断向左收缩`，达到锁定左侧边界的目的。

---

### 为什么返回 left 而不是 right?

- 都是一样的，因为 while 终止的条件是 left === right

---

- 函数的返回值(即 `left` 变量的值)取值区间是闭区间 `[0, nums.length]`，所以我们简单添加两行代码就能在正确的时候 `return -1`:

```js
while (left < right) {
  //...
}

if (left === nums.length) return -1; // target 比所有数都大

return nums[left] === target ? left : -1; // 类似之前算法的处理方式
```

---

# 寻找右侧边界的二分查找

- 搜索区间」是 [left, right) 左闭右开，所以 当 `nums[mid]` 被检测之后，下一步的搜索区间应该去掉 `mid` 分割成两个区 间，即 `[left, mid)` 或 `[mid + 1, right)`。

---

```js
const rightBoundarySearch = (nums, target) => {
  if (nums.length == 0) return -1;
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = left + parseInt((right - left) / 2);
    if (nums[mid] === target) {
      left = mid + 1; // 注意 mid = left - 1
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    }
  }
  return left - 1; // 注意 mid = left - 1
};
var nums = [1, 1, 2, 2, 2, 2, 10, 11];
```

---

- 可以添加两行代码，正确地返回 -1:

```js
while (left < right) {
  // ...
}
if (left == 0) return -1;
return nums[left - 1] == target ? left - 1 : -1;
```

---

### Binary Search Recursive Method

- https://www.youtube.com/watch?v=uEUXGcc2VXM&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=31

---

### 二分查找 : 二分查找是一种算法，其输入是一个`有序的元素列表`

- Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People
- 二分查找最多需要 logN 步
- 对数运算是幂运算的逆运算

### 练习

- 假设有一个包含 128 个名字的有序列表，你要使用二分查找在其中
  查找一个名字，请 问最多需要几步才能找到? (log128 = 7)
- 面列表的长度翻倍后，最多需要几步? (8)
