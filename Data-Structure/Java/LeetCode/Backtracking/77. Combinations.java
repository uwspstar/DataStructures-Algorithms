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



//https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0077.%E7%BB%84%E5%90%88.md

class Solution {
  List<List<Integer>> result = new ArrayList<>();
  LinkedList<Integer> path = new LinkedList<>();

  public List<List<Integer>> combine(int n, int k) {
    combineHelper(n, k, 1);
    return result;
  }

  /**
   * 每次从集合中选取元素，可选择的范围随着选择的进行而收缩，调整可选择的范围，就是要靠startIndex
   * 
   * @param startIndex 用来记录本层递归的中，集合从哪里开始遍历（集合就是[1,...,n] ）。
   */
  private void combineHelper(int n, int k, int startIndex) {
    // 终止条件
    if (path.size() == k) {
      result.add(new ArrayList<>(path));
      return;
    }
    //for (int i = startIndex; i <= n - (k - path.size()) + 1; i++) 
    for (int i = startIndex; i <= n; i++) {
      path.add(i);
      combineHelper(n, k, i + 1);
      path.removeLast();
    }
  }
}
/*
 * Combination Sum
 */