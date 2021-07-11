---
marp: true
theme: default
header: 'java'
footer: ''
paginate: true
size: 16:9
---

```
start + 1 < end
mid = start +(end - start)/2;如果用(start + end)/2，如果start和end都很大相加就有可能溢出
A[mid] = < > 三种情况讨论
A[start] A[end]?target
```

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
