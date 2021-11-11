# JS

```js
const combine = (n, k) => {
  let res = [];
  let path = [];
  let visit = new Set();
  const backTracking = (idx) => {
    if (path.length === k) {
      res.push([...path]);
      return;
    }

    for (let i = idx; i <= n; i++) {
      if (visit.has(i)) continue;
      visit.add(i);
      path.push(i);
      backTracking(i);
      path.pop();
      visit.delete(i);
    }
  };

  backTracking(1);

  return res;
};
```

# C++

```C++
// 主函数
vector<vector<int>> combine(int n, int k) {
    vector<vector<int>> ans;
    vector<int> comb(k, 0);
    int count = 0;
    backtracking(ans, comb, count, 1, n, k);
    return ans;
}
// 辅函数
void backtracking(vector<vector<int>>& ans, vector<int>& comb, int& count, int
    pos, int n, int k) {
    if (count == k) {
       ans.push_back(comb);
        return; 
    }
    for (int i = pos; i <= n; ++i) {
        comb[count++] = i; // 修改当前节点状态
        backtracking(ans, comb, count, i + 1, n, k); // 递归子节点 --count; // 回改当前节点状态
    } 
}
```
