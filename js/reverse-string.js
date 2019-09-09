```javascript

const reverse = function (str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
}

console.dir(reverse("abc"));

```

```
consle.log vs console.dir
```
