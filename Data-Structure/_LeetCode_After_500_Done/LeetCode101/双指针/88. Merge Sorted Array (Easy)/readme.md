# C++

```C++

   void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
       int pos = m-- + n-- - 1;
       while (m >= 0 && n >= 0) {
          nums1[pos--] = nums1[m] > nums2[n]? nums1[m--]: nums2[n--];
       }
       while (n >= 0) {
          nums1[pos--] = nums2[n--];
} }
```

# JS

```js
var merge = function (nums1, m, nums2, n) {
  //Do not return anything, modify nums1 in-place instead.
  let p1 = m - 1;
  let p2 = n - 1;
  //backward
  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] >= nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
};
```
