---
marp: true
theme: default
header: ''
footer: 'Code Interview'
paginate: true
size: 16:9
---

# Heaps

- It is commonly used in Dijkstra’s Algorithm, Huffman Coding.

- https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65
---

# A `heap` is an important data structure that returns the `highest` or `lowest` element in O(1) time.

- think about array

---

# A heap is a type of `tree-like` data structure in which the parent is bigger than its children (if max-heap) or smaller than its children (if min-heap).

---

- `heap use an array to store data`
- A heap node’s children’s positions (indices) in the array can be calculated easily. This is because the parent-child relationship is easily defined with a heap.

---

### A binary heap can be built by placing the first array element as the root and then filling each left and right element in order.

---

---

# max-heap and min-heap

```js
Node        (itself)  Parent      Left Child    Right Child
Index          N      (N-1) / 2   (N*2) + 1     (N*2) + 2
```

```
if we let array start index = 1;
itself : i;
Parent : parseInt(i / 2) -> ((N-1) / 2) + 1 = N/2 - 1/2 + 1 = (N+1) /2
Left Child : 2*i -> (N * 2) + 1 + 1 = 2 * (N + 1)
Right Child: 2*i +1 -> (N * 2) + 2 + 1 = 2 * (N + 1) + 1
```

---

# A Heap is a special Tree-based data structure in which the tree is a complete binary tree. Generally, Heaps can be of two types:

- https://www.geeksforgeeks.org/heap-data-structure/

---

- `Max-Heap:` In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.
- `Min-Heap`: In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.

---

# Bubbling Up and Down

# Heap Operations

```js
Deletion  (leads to“bubble down”)    O(log2(n))
Insertion (leads to “bubble up”)     O(log2(n))
Heap sort                            O(n log2(n))
```

---

# Heap - Heap Sort - Heapify - Priority Queues

- https://www.youtube.com/watch?v=HqPJF2L5h9U&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=32

---

# A binary heap is a heap data structure that takes the form of a binary tree. Binary heaps are a common way of implementing priority queues

- https://www.geeksforgeeks.org/binary-heap/
