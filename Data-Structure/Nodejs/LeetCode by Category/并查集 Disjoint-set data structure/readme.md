---
marp: true
theme: default
paginate: true
size: 16:9
---

# Disjoint-set

- https://zhuanlan.zhihu.com/p/93647900
- Disjoint-set is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non overlapping) subsets.
- 主要用于解决一些元素分组的问题。

---

# Disjoint-set union–find algorithm

- 它管理一系列不相交的集合，并支持两种操作：
  合并（Union）：把两个不相交的集合合并为一个集合。
  查询（Find）：查询两个元素是否在同一个集合中。

- Find: Determine which subset a particular element is in. This can be used for determining if two elements are in the same subset;
- Union: Join two subsets into a single subset.
  Use to solve network connectivity problem.

---

# 按秩合并

- 应该把简单的树往复杂的树上合并，而不是相反
