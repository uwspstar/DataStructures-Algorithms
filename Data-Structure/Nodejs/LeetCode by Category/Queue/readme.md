---
marp: true
theme: default
header: 'leetcode'
footer: 'Code Interview'
paginate: true
size: 16:9
---

# Queue : FIFO
- only care the most recently operation, and be able to search pre with O(1)
- think to use a single linked list (array is slow, when array size frequently changes)

# Deque
- think to use a double linked list, head and tail O(1) search, add, delete