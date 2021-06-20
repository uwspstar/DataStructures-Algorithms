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
# 二分查找算法有许多种变种
- 比如`分散层叠`可以提升在多个数组中对同一个数值的搜索的速度。分散层叠有效的解决了计算几何学和其他领域的许多搜索问题。
- `指数搜索`将二分查找算法拓宽到无边界的列表。
- `二叉搜索树`和`B树数据结构`就是基于二分查找算法的。
--
### Basic

- find target (single one)
- find target (duplicate, start index, end index)

---

### Binary Search Recursive Method

- https://www.youtube.com/watch?v=uEUXGcc2VXM&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=31
