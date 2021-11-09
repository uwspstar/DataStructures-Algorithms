```
Input: nums = [5,1,6]
Output: 28
Explanation: The 8 subsets of [5,1,6] are:
- The empty subset has an XOR total of 0.
- [5] has an XOR total of 5.
- [1] has an XOR total of 1.
- [6] has an XOR total of 6.
- [5,1] has an XOR total of 5 XOR 1 = 4.
- [5,6] has an XOR total of 5 XOR 6 = 3.
- [1,6] has an XOR total of 1 XOR 6 = 7.
- [5,1,6] has an XOR total of 5 XOR 1 XOR 6 = 2.
0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28

// 1 <= nums.length <= 12
// 1 <= nums[i] <= 20

```

# C++

```C++
class Solution {
public:
    int res;
    int n;

    void dfs(int val, int idx, vector<int>& nums){
        if (idx == n){
            // 终止递归
            res += val;
            return;
        }
        // 考虑选择当前数字
        dfs(val ^ nums[idx], idx + 1, nums);
        // 考虑不选择当前数字
        dfs(val, idx + 1, nums);
    }

    int subsetXORSum(vector<int>& nums) {
        res = 0;
        n = nums.size();
        dfs(0, 0, nums);
        return res;
    }
};


作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/sum-of-all-subset-xor-totals/solution/sum-of-all-subset-xor-totals-by-leetcode-o5aa/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

# JAVA

```java
public class SubsetXORSum {

    public int subsetXORSum (int[] nums) {
        int[] res = {0}; // using it as global variable
        int N = nums.length;
        if (N == 0) return 0;

        dfs(N, res, nums, 0, 0);
        return res[0];
    }

    public void dfs(int N, int[] res, int[] nums, int idx, int val) {
        if (idx == N) {
            res[0] += val;
            return;
        }

        // 考虑选择当前数字
        dfs(N, res, nums, idx + 1, val ^ nums[idx]);
        // 考虑不选择当前数字
        dfs(N, res, nums, idx + 1, val);

    }

    public static void main(String[] args) {
        SubsetXORSum test = new SubsetXORSum();
        int[] n1 = {5,1,6};
        int[] n2 = {3,4,5,6,7,8};
        int a = test.subsetXORSum(n1);
        int b = test.subsetXORSum(n2);
        System.out.println(a);
        System.out.println(b);
    }
}
```

# JS

```js
/*
Firstly, we need to generate all the possible subsets from the input array.
Then, for all calculated subsets, calculate the XOR of all elements in each subset.
Return the sum of all calculated XORs
*/
var subsetXORSum = function (nums) {
  let res = 0;
  const N = nums.length;
  if (N === 0) return res;

  const helper = (idx, val) => {
    if (idx === N) {
      res += val;
      return;
    }
    // calculate sum of xor with current element
    helper(idx + 1, val ^ nums[idx]);
    helper(idx + 1, val);
  };
  helper(0, 0);
  return res;
};
```
