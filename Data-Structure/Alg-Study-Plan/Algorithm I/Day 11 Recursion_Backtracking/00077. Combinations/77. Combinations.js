// 77. Combinations
// 这也是典型的回溯算法，k 限制了树的高度，n 限制了树的宽度，
/*
Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.

Example 1:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
Example 2:

Input: n = 1, k = 1
Output: [[1]]
*/
{
  var combine = function (n, k) {
    let res = [];
    let path = [];
    const backTracking = (idx) => {
      if (path.length === k) {
        //res.push(path); // shallow copy not working
        res.push([...path]); // need A deep copy;
        return;
      } else {
        for (let i = idx; i <= n; i++) {
          path.push(i);
          backTracking(i + 1);
          path.pop(i);
        }
      }
    }
    backTracking(1);
    return res;
  };
}