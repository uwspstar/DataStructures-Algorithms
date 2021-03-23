---
marp: true
theme: default
header: '树的常用操作'
footer: 'https://www.jianshu.com/p/4d02a090e26c
'
paginate: true
size: 16:9
---

# Tree 树

- https://www.jianshu.com/p/4d02a090e26c
- 一种分层数据的抽象模型
- 前端工作中常见的数包括：DOM 树、级联选择、树形控件…
- 树的常用操作：深度/广度优先遍历、先中后序遍历

---

### 树的深度优先遍历

- https://www.jianshu.com/p/4d02a090e26c
- 访问根节点
- 对根节点的 children 挨个进行深度优先遍历

---

```js
const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        { val: 'd', children: [] },
        { val: 'e', children: [] },
      ],
    },
    {
      val: 'c',
      children: [
        { val: 'f', children: [] },
        { val: 'g', children: [] },
      ],
    },
  ],
};
```

---

```js
const dfs = (root) => {
  console.log(root.val);
  root.children && root.children.forEach(dfs);
  // 相当于 root.children.forEach(child => dfs(child))
};

dfs(tree); // a b d e c f g
```

---

```js
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Notice that index 2 is skipped, since there is no item at
// that position in the array...
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

---

### 树的广度优先遍历

- https://www.jianshu.com/p/4d02a090e26c
- 1. 新建一个队列，把根节点入队
- 2. 把队头出队并访问
- 3. 把对头的 children 挨个入队
- 4. 重复第二、三步，直到队列为空

---

```js
const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        { val: 'd', children: [] },
        { val: 'e', children: [] },
      ],
    },
    {
      val: 'c',
      children: [
        { val: 'f', children: [] },
        { val: 'g', children: [] },
      ],
    },
  ],
};
```

---

```js
const bfs = (root) => {
  const q = [root];
  while (q.length > 0) {
    const n = q.shift();
    console.log(n.val);
    n.children.forEach((child) => q.push(child));
  }
};

bfs(tree); // a b c d e f g
```
