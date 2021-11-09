# C++
```C++
vector<int> twoSum(vector<int>& numbers, int target) {
    int l = 0, r = numbers.size() - 1, sum;
    while (l < r) {
       sum = numbers[l] + numbers[r];
       if (sum == target) break;
       if (sum < target) ++l;
       else --r;
}
    return vector<int>{l + 1, r + 1};
}
```
# JS
```js
var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum > target) right--;
    else left++;
  }

  return [];
};
```
