# C++
```C++
int candy(vector<int>& ratings) {
    int size = ratings.size();
    if (size < 2) {
       return size;
    }
    vector<int> num(size, 1);
    for (int i = 1; i < size; ++i) {
       if (ratings[i] > ratings[i-1]) {
           num[i] = num[i-1] + 1;
} }
    for (int i = size - 1; i > 0; --i) {
       if (ratings[i] < ratings[i-1]) {
           num[i-1] = max(num[i-1], num[i] + 1);
       }
}

return accumulate(num.begin(), num.end(), 0);
```
# JS
```js
const candy = (ratings) => {
  let N = ratings.length;
  if (N < 2) return N;

  let res = [];
  for (let i = 0; i < N; i++) {
    res[i] = 1;
  }

  for (let i = 1; i < N; i++) {
    if (ratings[i - 1] < ratings[i]) {
      res[i] = res[i - 1] + 1;
    }
  }

  for (let i = N - 1; i > 0; i--) {
    if (ratings[i] < ratings[i - 1]) {
      res[i - 1] = Math.max(res[i - 1], res[i] + 1);
    }
  }
  let sum = 0;
  for (let r of res) {
    sum += r;
  }
  return sum;
};
```
