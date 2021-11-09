# JS
```js
const permute = (arr) => {
  let res = [];
  let path = [];

  let N = arr.length;
  if (N < 1) return res.push(arr);

  let visit = new Set();

  const backTracking = (N, arr) => {
    if (path.length === N) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (visit.has(arr[i])) continue;

      visit.add(arr[i]);
      path.push(arr[i]);
      backTracking(N, arr);
      path.pop();
      visit.delete(arr[i]);
    }
  };

  backTracking(N, arr);

  return res;
};
```
# C++
```C++
// 主函数
vector<vector<int>> permute(vector<int>& nums) {
    vector<vector<int>> ans;
    backtracking(nums, 0, ans);
    return ans;
}
// 辅函数
void backtracking(vector<int> &nums, int level, vector<vector<int>> &ans) {
    if (level == nums.size() - 1) {
       ans.push_back(nums);
       return;
    }
    for (int i = level; i < nums.size(); i++) {
swap(nums[i], nums[level]); // 修改当前节点状态 backtracking(nums, level+1, ans); // 递归子节点 swap(nums[i], nums[level]); // 回改当前节点状态
} }
```
