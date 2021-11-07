# JAVA

```java
class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> ans = new ArrayList<String>();
        backtrack(ans, new StringBuilder(), 0, 0, n);
        return ans;
    }

    public void backtrack(List<String> ans, StringBuilder cur, int open, int close, int max) {
        if (cur.length() == max * 2) {
            ans.add(cur.toString());
            return;
        }
        if (open < max) {
            cur.append('(');
            backtrack(ans, cur, open + 1, close, max);
            cur.deleteCharAt(cur.length() - 1);
        }
        if (close < open) {
            cur.append(')');
            backtrack(ans, cur, open, close + 1, max);
            cur.deleteCharAt(cur.length() - 1);
        }
    }
}

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/generate-parentheses/solution/gua-hao-sheng-cheng-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

# JS

```js
var generateParenthesis = function (n) {
  if (n === 1) return ['()'];
  let res = [];
  const dfs = (curStr, left, right) => {
    // 因为每一次尝试，都使用新的字符串变量，所以无需回溯
    // 在递归终止的时候，直接把它添加到结果集即可，注意与「力扣」第 46 题、第 39 题区分

    if (left === 0 && right === 0) {
      res.push(curStr);
      return;
    }

    if (left > 0) {
      dfs(curStr + '(', left - 1, right);
    }

    if (right > left) {
      dfs(curStr + ')', left, right - 1);
    }
  };

  dfs('', n, n);

  return res;
};
```
