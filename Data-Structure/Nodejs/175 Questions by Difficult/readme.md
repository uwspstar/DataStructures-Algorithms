---
marp: true
theme: default
header: 'java'
footer: 'https://seanprashad.com/leetcode-patterns/'
paginate: true
size: 16:9
---

- https://seanprashad.com/leetcode-patterns/
- https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed
- https://www.educative.io/courses/grokking-the-coding-interview -https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-100-LeetCode-Questions-to-Save-Your-Time-OaM1orEU

---

# Tips

---

### Array , sorted ? (BS, 2 Points, remove duplicate ) : iterate

- If input array is sorted then
  - Binary search
  - Two pointers
  - remove duplicate
  - hashMap
  - hashSet

---

### permutations, subsets ? Backtracking : dfs

- If asked for all permutations/subsets then
  - Backtracking (brute force) : slow 2^N

---

### tree ? DFS : BFS

- If given a tree then
  - DFS
  - BFS

---

### graph ? DFS : BFS

- If given a graph then
  - DFS
  - BFS

---

### LinkedList

- If given a linked list then
  - Two pointers
  - fast / slow : circle
  - reverse
  - merge

---

### Stack

- If recursion is banned then
  - Stack
  - BFS : queue
  - DFS : stock

---

### If must solve in-place then

- two pointers, one for loop, one for position
- Swap corresponding values
- Store one or more different values in the same pointer

---

### Dynamic programming

- If asked for maximum/minimum subarray/subset/options then
  - Dynamic programming

---

### Heap

- If asked for top/least K items then
  - Heap
  - dfs Inorder travel

---

### String, Words, Dictionary

- If asked for common strings then
  - Map
  - Trie

---

### Sort

- mergeSort
- quickSort
- heapSort

---

### BigO

- Map/Set for O(1) time & O(n) space
- Sort input for O(nlogn) time and O(1) space
  - chrome : quickSort
  - firefox : mergeSort
