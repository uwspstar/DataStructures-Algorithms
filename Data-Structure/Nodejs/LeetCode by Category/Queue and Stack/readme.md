---
marp: true
theme: default
header: 'leetcode'
footer: 'Code Interview'
paginate: true
size: 16:9
---

# Queue

- https://leetcode.com/explore/learn/card/queue-stack/

- We may access a random element by index in Array. However, we might want to restrict the processing order in some cases.
- First-in-First-out and Last-in-First-out and its two corresponding linear data structures, Queue and Stack.

---

- Solve basic queue-related problems, especially BFS;
- Solve basic stack-related problems;
- Understand how system stack helps you when you solve problems using DFS and other recursion algorithms;

---

# Queue : FIFO

- only care the most recently operation, and be able to search pre with O(1)
- think to use a single linked list (array is slow, when array size frequently changes)

---

# Deque

- think to use a double linked list, head and tail O(1) search, add, delete

---

# circular queue

- A more efficient way is to use a circular queue. Specifically, we may use a fixed-size array and two pointers to indicate the starting position and the ending position. And the goal is to reuse the wasted storage we mentioned previously.
- 注意不应该直接 push
- 622. Design Circular Queue

---
