---
marp: true
---

- https://labuladong.gitee.io/algo/4/32/139/
- https://docs.google.com/presentation/d/1TEGC2enyTGPUmTgUjtOmWZ9ij18nXrcP5cXjyPFw3-Q/edit#slide=id.p

- https://www.youtube.com/watch?v=jCQB63e17ww
- Rolling state 的思路，类似扫描线数飞机，我们遇到左括号+1，右括号减 1，来判断是否平衡。中间任意时候平衡被破坏都 invalid。
- backtracking 类似 subset，生成括号

```js
const isBalancedParentheses = s => {
    let balance = 0;
    for (let ch of s) {
        if (ch === '(') {
            balance = balance + 1
        }
        if (ch === ')') {
            balance = balance - 1)
        }
        if (balance < 0) return false;
    }
    return balance === 0;
}

```
