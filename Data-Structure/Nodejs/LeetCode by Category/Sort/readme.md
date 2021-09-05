---
marp: true
theme: default
header: 'leetcode'
footer: 'Code Interview'
paginate: true
size: 16:9
---

# Sort

```js
Sort Fun          Time        Space     Stable
----------------------------------------------
Bubble Sort       O(N^2)      O(1)      Y
----------------------------------------------
Selection Sort    O(N^2)      O(1)      N
----------------------------------------------
Insertion Sort    O(N^2)      O(1)      Y
----------------------------------------------
Merge Sort        O(NLogN)    O(N)      Y
----------------------------------------------
Quick Sort        O(NLogN)    O(LogN)   N
----------------------------------------------
Heap Sort         O(NLogN)    O(1)      N
-----------------------------------------------
```

---

# swap function

```js
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
```

---

# Bubble Sort

```js
const bubbleSort = (arr) => {
  if (arr.length < 2) return arr;

  for (let i = arr.length - 1; i > 0; i--) {
    let isSwap = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return arr;
};
```

---

# Selection Sort : 选择排序 O (n^2)

```js
const selectionSort = (arr) => {
  if (arr.length < 2) return arr;
  for (let i = 0; i < arr.length; i++) {
    let smallIndex = i;
    for (let j = smallIndex; j < arr.length; j++) {
      if (arr[j] < arr[smallIndex]) {
        smallIndex = j;
      }
    }
    if (smallIndex !== i) swap(arr, smallIndex, i);
  }
  return arr;
};
```

---

# Insertion Sort

```js
const insertionSort = (arr) => {
  if (arr.length < 2) return arr;
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > curr) {
        arr[j + 1] = arr[j];
      } else break;
    }
    arr[j + 1] = curr;
  }
  return arr;
};
```

---

# Merge Sort

- https://www.youtube.com/watch?v=mB5HXBb_HY8&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=34
- two Way MergeSort
- https://www.youtube.com/watch?v=6pV2IF0fgKY&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=33

# Merge Sort Pros vs Cons

- https://www.youtube.com/watch?v=ak-pz7tS5DE&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=35
- Pros
  - large size list
  - linked list
  - external sorting
  - stable
- Cons
  - Extra space
  - no small problem
  - recursive (stack size)

---

# Merge Sort

```js
const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const merge = (left, right) => {
    if (left.length === 0) return right;
    if (right.length === 0) return left;
    let res = [];
    while (left.length && right.length) {
      left[0] < right[0] ? res.push(left.shift()) : res.push(right.shift());
    }

    return res.concat(left, right);
  };

  const mSort = (arr) => {
    if (arr.length < 2) return arr;
    let mid = arr.length >> 1;
    let left = mSort(arr.slice(0, mid));
    let right = mSort(arr.slice(mid));
    return merge(left, right);
  };

  return mSort(arr);
};
```

---

# QuickSort : O (n log n )

- 快速排序就是个二叉树的前序遍历，归并排序就是个二叉树的后序遍历.
- https://www.youtube.com/watch?v=7h1s2SojIRw&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=36

---

# QuickSort

```js

```

---

# Heap Sort

---

# Bucket sort

- https://www.cnblogs.com/kkun/archive/2011/11/23/bucket_sort.html

---

# divide and conquer

- Strassens Matrix Multiplication
- https://www.youtube.com/watch?v=0oJyNmEbS4w&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=38
- Strassens Matrix Multiplication
- Merge Sort
