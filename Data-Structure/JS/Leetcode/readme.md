---
marp: true
theme: default
header: 'leetcode'
footer: 'study note by Xing, source https://leetcode-cn.com/problemset/all/?topicSlugs=stack
'
paginate: true
size: 16:9
---

### leetcode

- LeetCode 热题 HOT 100 https://leetcode-cn.com/problemset/leetcode-hot-100/
- LeetCode 精选数据库 70 题 https://leetcode-cn.com/problemset/leetcode-70/
- LeetCode 精选算法 200 题 https://leetcode-cn.com/problemset/leetcode-200/

---

### 有效的括号

- https://leetcode-cn.com/problems/valid-parentheses/

```js
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  let map = { '[': ']', '(': ')', '{': '}' };
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    if (map[key]) {
      result.push(key);
    } else {
      let last = result.pop();
      if (map[last] !== key) return false;
    }
  }
  return result.length === 0;
};
```

---

### 两数之和

- https://leetcode-cn.com/problems/two-sum/

```js
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    if (map[temp] >= 0) {
      // obj, check value >=0
      return [map[temp], i];
    }
    map[nums[i]] = i;
  }
  return [];
};
```

---

### 无重复字符的最长子串

- https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

---

```js
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;

  let work = [];
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    const index = work.indexOf(s[i]);
    if (index < 0) {
      //not in the string
      work.push(s[i]);
      if (work.length >= len) {
        len = work.length;
      }
    } else {
      work.push(s[i]);
      work.splice(0, index + 1);
    }
  }
  return len;
};
```

---

```js
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  let maxLen = 0;
  let map = new Map();
  let fast = 0;
  let slow = 0;
  while (fast < s.length) {
    let key = s[fast];
    let value = map.get(key);
    if (value >= slow) {
      // not value >=0
      slow = value + 1;
    }
    map.set(key, fast);
    maxLen = Math.max(maxLen, fast - slow + 1);
    fast++;
  }
  return maxLen;
};
```

---

### 盛最多水的容器

- https://leetcode-cn.com/problems/container-with-most-water/

```js
var maxArea = function (arr) {
  if (arr.length < 2) return 0;
  let ai = 0;
  let bi = arr.length - 1;
  let maxArea = 0;
  while (ai < bi) {
    let width = bi - ai;
    let height = Math.min(arr[bi], arr[ai]);
    maxArea = Math.max(maxArea, width * height);
    arr[ai] < arr[bi] ? ai++ : bi--;
  }
  return maxArea;
};
```

---

### 三数之和

- https://leetcode-cn.com/problems/3sum/

```js
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  let size = nums.length;
  if (nums[0] > 0) return [];
  if (nums[size - 1] < 0) return [];
  let res = [];
  let i = 0;
  while (i < size - 2) {
    if (nums[i] > 0) break; // 最左侧大于0，无解
    let first = i + 1;
    let last = size - 1;
    while (first < last) {
      if (nums[i] * nums[last] > 0) break; // 三数同符号，无解
      let sum = nums[i] + nums[first] + nums[last];
      if (sum === 0) {
        res.push([nums[i], nums[first], nums[last]]);
      }
      if (sum <= 0) {
        // 负数过小，first右移
        while (nums[first] === nums[++first]) {} // 重复值跳过
      } else {
        while (nums[last] === nums[--last]) {} // 重复值跳过
      }
    }
    while (nums[i] === nums[++i]) {}
  }
  return res;
};
```

---

```js
console.log('threeSum : ', threeSum([-3, -1, 0, 1, 2, -1, -4]));
console.log('threeSum - 2 :', threeSum([0, 0, 0, 0])); //[0,0,0]
console.log('threeSum - 3 :', threeSum([1, -1])); //[]
console.log('threeSum - 4 :', threeSum([4, 1, 2, 3])); //[]
console.log('threeSum - 5 :', threeSum([-4, -1, -2, -3])); //[]
console.log('threeSum - 6 :', threeSum([])); //[]
```

---

### 删除链表中的节点

- https://leetcode-cn.com/problems/delete-node-in-a-linked-list/

```js
var deleteNode = function (node) {
  node.val = node.next.val; //变成下个倒霉蛋
  node.next = node.next.next; //把倒霉蛋干掉。
};
```
