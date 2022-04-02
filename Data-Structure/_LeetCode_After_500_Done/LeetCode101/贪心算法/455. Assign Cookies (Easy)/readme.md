# C++

```C++
int findContentChildren(vector<int>& children, vector<int>& cookies) {
       sort(children.begin(), children.end());
       sort(cookies.begin(), cookies.end());
       int child = 0, cookie = 0;
       while (child < children.size() && cookie < cookies.size()) {
          if (children[child] <= cookies[cookie]) ++child;
          ++cookie;
        }
       return child;
}
```

# JS

```js
const findContentChildren = (children, cookie) => {
  children.sort();
  cookie.sort();
  let i = 0;
  let j = 0;
  let N1 = children.length;
  let N2 = cookie.length;
  while (i < N1 && j < N2) {
    if (children[i] < cookie[j]) {
      i++;
    }
    j++;
  }
  return i;
};
```
