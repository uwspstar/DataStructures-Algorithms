---
marp: true
theme: default
header: 'Binary Search'
footer: 'https://marian5211.github.io/'
paginate: true
size: 16:9
---

### Binary Search

- https://marian5211.github.io/2017/12/07/%E3%80%90%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95%E5%9F%BA%E7%A1%80%E7%8F%AD%E3%80%91%E4%BA%8C%E5%88%86%E6%B3%95/
- https://www.youtube.com/watch?v=JuDAqNyTG4g

### 时间复杂度

- 数据规模为 n:
- `T(n) = T(n/2)+O(1)`
- 其中 O(1)为比较的时间复杂度，T(n/2)为比较之后
- 时间复杂度是:O(logn)

---

### 实现方式

- 递归：

  - 优点：代码简洁
  - 缺点：递归利用栈空间，递归层数过多会导致栈溢出

- while 循环
  - 优点：占用空间小
  - 缺点：代码可读性稍差，不够简洁

---

### 面试的时候用什么？

- 如果用递归的方式写会好理解很多，就用递归写，不然就不用递归，在工程上，递归很容易导致栈溢出。

---

```
start + 1 < end
mid = start +(end - start)/2;
如果用(start + end)/2，如果 start 和 end 都很大相加就有可能溢出
A[mid] = < > 三种情况讨论
A[start] A[end]?target

```

---

```java
public int findPosition(int[] nums, int target) {
    if (nums.length <= 0){
        return -1;
    }
    // write your code here
    int start = 0;
    int end = nums.length - 1;
    while (start + 1 < end) {
        //中值
        int mid = start + (end - start) / 2;
        //三种情况讨论
        if (nums[mid] == target) {
            end = mid;
        }
        if (nums[mid] < target) {
            start = mid;
        }
        if (nums[mid] > target) {
            end = mid;
        }
    }
    //结果
    if (nums[start] == target) {
        return start;
    }
    if (nums[end] == target) {
        return end;
    } else {
        return -1;
    }
}
```
