---
marp: true
theme: default
header: 'leetcode'
footer: 'Code Interview'
paginate: true
size: 16:9
---

### 二分查找法主要是解决在“一堆数中找出指定的数”这类问题。O(logn), Sorted

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

# 寻找一个数

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
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 10));
```

---

# 为什么 while 循环的条件中是 <=，而不是 <

- 区别是: `<=` 相当于两端都闭区 间 `[left, right]`，`<` 相当于左闭右开区间 `[left, right)`，因为索引大小为 nums.length 是越界的。
- `while(left <= right)` 的终止条件是 `left == right + 1`，写成区间的形式就是 `[right + 1, right]`，或者带个具体的数字进去 `[3, 2]`，可⻅这时候区间为空
- `while(left < right)` 的终止条件是 `left == right`，写成区间的形式就是 `[left, right]`，或者带个具体的数字进去 `[2, 2]`，这时候区间非空，还有一个数 `2`

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
int left_bound(int[] nums, int target) { if (nums.length == 0) return -1;
int left = 0;
int right = nums.length; // 注意
while (left < right) { // 注意
int mid = (left + right) / 2; if (nums[mid] == target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
right = mid; // 注意 }
}
    return left;
}
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
