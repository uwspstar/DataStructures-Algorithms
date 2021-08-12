/*
77. Combinations (Medium)

Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.

Example 1: Input: n = 4, k = 2 Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
Example 2: Input: n = 1, k = 1 Output: [[1]]
*/
{
  /**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
  var combine = function (n, k) {
    let res = [];
    let path = [];

    const backTracking = (n, k, idx) => {
      if (path.length === k) {
        //res.push(path); // shallow copy not working
        res.push([...path]); // need A deep copy (see tips: 6 + 1 ways copy)
        return;
      } else { // i <= n - (k - path.length) + 1; 
        for (let i = idx; i <= n; i++) {
          path.push(i);
          backTracking(n, k, i + 1);
          path.pop(i);
        }
      }
    }

    backTracking(n, k, 1);
    
    return res;
  };
  //39. Combination Sum
  //46. Permutations
}