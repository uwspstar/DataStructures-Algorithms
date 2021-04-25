---
marp: true
theme: default
header: 'leetcode'
footer: 'https://leetcode.com/problemset/all/'

paginate: true
size: 16:9
---

# 1041. Robot Bounded In Circle

- https://leetcode.com/problems/robot-bounded-in-circle/

```
- Input: instructions = "GGLLGG" Output: true
- Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
  When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
```

```
- Input: instructions = "GG" Output: false
- Explanation: The robot moves north indefinitely.
```

```
- Input: instructions = "GL" Output: true
- Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
```

---

```js
var isRobotBounded = function (instructions) {
  let dir = 'N'; // start
  let x = 0;
  let y = 0;
  for (let c of instructions) {
    if (c === 'G') {
      if (dir === 'N') y++;
      else if (dir === 'S') y--;
      else if (dir === 'E') x++;
      else x--;
    } // change direction
    else if (c === 'L') {
      if (dir === 'N') dir = 'W';
      else if (dir === 'S') dir = 'E';
      else if (dir === 'W') dir = 'S';
      else dir = 'N';
    } else {
      //if(instructions.charAt(i) === 'R')
      if (dir === 'N') dir = 'E';
      else if (dir === 'S') dir = 'W';
      else if (dir === 'W') dir = 'N';
      else dir = 'S';
    }
  }
  return (x === 0 && y === 0) || dir !== 'N';
};
```

---

# 146. LRU Cache

- https://leetcode.com/problems/lru-cache/

```
- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
```

```
- int get(int key) Return the value of the key if the key exists, otherwise return -1
```

```
- void put(int key, int value) Update the value of the key if the key exists.
- Otherwise, add the key-value pair to the cache.
- If the number of keys exceeds the capacity from this operation, evict the least recently used key.
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys

---

```js
// Map is perfect data structure for key value
// to keep the most recently, 1) delete, then, 2) add

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map(); // Map is perfect data structure for key value
};

LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    // *** very important ***, to keeo the most rececently used as a new key into map iterated
    let val = this.map.get(key);
    this.map.delete(key); // remove the key pair
    this.map.set(key, val); // the new entry will be the most recently used
    return val;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  } else if (this.map.size === this.capacity) {
    //before add new key, check the capacity
    // Map cannot be sorted, the order will be the order when the key added
    let key1 = this.map.keys().next().value; // the earlest added
    this.map.delete(key1);
  }

  this.map.set(key, value);
};
```

---

# 56. Merge Intervals

- https://leetcode.com/problems/merge-intervals/

```
- Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
- Output: [[1,6],[8,10],[15,18]]
- Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
```

```
- Input: intervals = [[1,4],[4,5]]
- Output: [[1,5]]
- Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

---

```js
var merge = function (arr) {
  //sort by o index
  arr.sort((a, b) => a[0] - b[0]);
  console.log(arr);
  let res = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (res[res.length - 1][1] >= arr[i][0]) {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], arr[i][1]);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};
```
