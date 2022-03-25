// 1850 · 捡苹果
/*
描述
Alice 和 Bob 在一个漂亮的果园里面工作，果园里面有N棵苹果树排成了一排，这些苹果树被标记成1 - N号。
Alice 计划收集连续的K棵苹果树上面的所有苹果，Bob 计划收集连续的L棵苹果树上面的所有苹果。
他们希望选择不相交的部分（一个由 Alice 的K树组成，另一个由鲍勃 Bob 的L树组成），以免相互干扰。你应该返回他们可以收集的最大数量的苹果。

N 是整数且在以下范围内：[2，600]
K 和 L 都是整数且在以下范围内：[1，N-1]
数组A的每个元素都是以下范围内的整数：[1，500]

输入:
A = [6, 1, 4, 6, 3, 2, 7, 4]
K = 3
L = 2
输出: 
24
解释：
因为Alice 可以选择3-5颗树然后摘到4 + 6 + 3 = 13 个苹果， Bob可以选择7-8棵树然后摘到7 + 4 = 11个苹果，因此他们可以收集到13 + 11 = 24。
示例 2:

输入:
A = [10, 19, 15]
K = 2
L = 2
输出: 
-1
解释：
因为对于 Alice 和 Bob 不能选择两个互不重合的区间。
*/

export class Solution {
    /**
     * @param A: a list of integer
     * @param K: a integer
     * @param L: a integer
     * @return: return the maximum number of apples that they can collect.
     */
     findMax(A, k, start, end) {
        if ( k > end - start) {
            return -1;
        }
        let apples = 0, maxApples = 0;
        for (let i = start; i < start + k; i++) {
            apples += A[i];
        }
        maxApples = apples;
        let left = start, right = start + k; // keep a k size windows
        while (right < end) {
            apples -= A[left]
            apples += A[right]
            maxApples = Math.max(maxApples, apples);
            left++;
            right++;
        }
        return maxApples;
     }

    PickApples(A, K, L) {
      // write your code here
      let N = A.length;
      let ans = -Infinity;
      for (let i = 0; i < N; i++) {
        let leftMaxL = this.findMax(A, L, 0, i);
        let rightMaxK = this.findMax(A, K, i, N);
        let leftMaxK = this.findMax(A, K, 0, i);
        let rightMaxL = this.findMax(A, L, i, N);

        if (leftMaxL !== -1 && rightMaxK !== -1) {
            ans = Math.max(ans, leftMaxL + rightMaxK);
        }

        if (leftMaxK !== -1 && rightMaxL !== -1) {
            ans = Math.max(ans, leftMaxK + rightMaxL);
        } 
      }
      return ans === -Infinity ? -1 : ans;
    }
  }