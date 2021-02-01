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

### 2001.01

- 有效的括号 https://leetcode-cn.com/problems/valid-parentheses/

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

- 两数之和 https://leetcode-cn.com/problems/two-sum/

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
