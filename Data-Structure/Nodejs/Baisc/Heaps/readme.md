---
marp: true
theme: default
header: ''
footer: 'Code Interview'
paginate: true
size: 16:9
---

# Heaps

- JavaScript Data Structures and Algorithms: An Introduction to Understanding and Implementing Core Data Structure and Algorithm Fundamentals : Sammie Bae

---

- A heap is an important data structure that returns the highest or lowest element in O(1) time.
- A heap is a type of tree-like data structure in which the parent is bigger than its children (if max-heap) or smaller than its children (if min-heap).
- heap use an array to store data
- A heap node’s children’s positions (indices) in the array can be calculated easily. This is because the parent-child relationship is easily defined with a heap.
- A binary heap can be built by placing the first array element as the root and then filling each left and right element in order.

---

# max-heap and min-heap

```js
Node        (itself)  Parent      Left Child    Right Child
Index          N      (N-1) / 2   (N*2) + 1     (N*2) + 2
```
---

# Bubbling Up and Down
# Heap Operations
```js
Deletion  (leads to“bubble down”)    O(log2(n)) 
Insertion (leads to “bubble up”)     O(log2(n)) 
Heap sort                            O(n log2(n))
```