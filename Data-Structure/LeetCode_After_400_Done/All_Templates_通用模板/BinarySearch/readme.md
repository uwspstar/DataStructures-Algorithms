---
marp: true
theme: default
header: 'Binary Search'
footer: ''
paginate: true
size: 16:9
---

### Binary Search

- https://www.youtube.com/watch?v=JuDAqNyTG4g
- https://www.youtube.com/watch?v=jB23XIQUSbI&t=783s

### 时间复杂度

- 数据规模为 n:
- `T(n) = T(n/2)+O(1)`
- 其中 O(1)为比较的时间复杂度，T(n/2)为比较之后
- 时间复杂度是:O(logn)

---

### 模板 1

arr : BBBBBBBBRRRRR
B is blue;
R is red


l = -1, r = N
while (l + 1 != N) 
    m = (l + r) / 2
    if IsBlue(m)
        l = m
    else 
        r = m

return l or r
---

### 模板 2
N = Nums.length

l =  0, r = N - 1
res = -1;
while (l <= r) {
    mid = l + (r - l) / 2
    if (Nums[mid] == target) {
        res = mid
        return Nums[mid]
    }

    if (Nums[mid] < target) {
        l = mid + 1
    } else {
        r = mid - 1;
    }
}

return res;