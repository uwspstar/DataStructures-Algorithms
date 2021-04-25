---
marp: true
theme: default
header: 'leetcode'
footer: 'https://leetcode.com/problemset/all/'

paginate: true
size: 16:9
---

### 1041. Robot Bounded In Circle

```js
Input: instructions = "GGLLGG" Output: true
Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.

Input: instructions = "GG" Output: false
Explanation: The robot moves north indefinitely.

Input: instructions = "GL" Output: true
Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...

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
