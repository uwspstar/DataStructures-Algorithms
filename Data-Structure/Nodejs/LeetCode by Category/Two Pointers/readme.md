---
marp: true
theme: default
header: 'leetcode'
footer: 'Code Interview'
paginate: true
size: 16:9
---

# Two Pointers

- https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed
- often useful when searching pairs in a sorted array or linked list
- 只要数组有序，就应该想到双指针技巧。
---

### Ways to identify when to use the Two Pointer method:

- It will feature problems where you deal with sorted arrays (or Linked Lists) and need to find a set of elements that fulfill certain constraints
- The set of elements in the array is a pair, a triplet, or even a subarray

---

### Some problems that feature the Two Pointer pattern:

- Squaring a sorted array (easy)
- Triplets that sum to zero (medium)
- Comparing strings that contain backspaces (medium)

---

### left and right
- 左右指针」: 主要解决数组(或者字符串)中的问题，比如二分查找。
- 二分查找
- palindrome Array, String
- 只要数组有序，就应该想到双指针技巧。
- 反转数组
- 滑动窗口算法

---

### Fast and Slow pointers
- 「快慢指针」: 主要解决链表中的问题，比如典型的判定链表中是否包含环;
- This approach is quite useful when dealing with cyclic linked lists or arrays.
- Linked List Cycle (easy) : 判定链表中是否含有环
- Palindrome Linked List (medium)
- Cycle in a Circular Array (hard)
- 寻找链表的中点 : 寻找链表中点的一个重要作用是对链表进行归并排序
- 寻找链表的倒数第 k 个元素

---
# 双指针技巧再分为两类，
- 一类是「快慢指针」: 主要解决链表中的问题，比如典型的判定链表中是否包含环;
- 一类是「左右指针」: 主要解决数组(或者字符串)中的问题，比如二分查找。

