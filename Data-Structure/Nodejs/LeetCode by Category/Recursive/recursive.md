---
marp: true
theme: default
header: 'https://github.com/youngyangyang04/leetcode-master'
footer: 'https://github.com/youngyangyang04/leetcode-master'
paginate: true
size: 16:9
---

# basic

- 递归记录了状态
- 递归只是让 解决方案更清晰，并没有性能上的优势。实际上，在有些情况下，使用 循环的性能更好
- 调用另一个函数时，当前函数暂停并处于未完成状态 。该函数的所有变量的值都还在内存中。
- Haskell 等函数式编程语言 没有循环，因此你只能使用递归来编写这样的函数

---

# Recursive 三要素

- https://www.youtube.com/watch?v=GOs07Kn2W1E&t=1641s (2:0810)
- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86.md#%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86

---

### 基线条件

- 编写涉及`数组的递归函数时`，`基线条件`通常是`数组为空`或`只包含一个元素`。陷入困境时，请检查基线条件是不是这样的。

---

- 确定终止条件： 写完了递归算法, 运行的时候，经常会遇到栈溢出的错误，就是没写终止条件或者终止条件写的不对

- `确定递归函数的参数和返回值`： 确定哪些参数是递归的过程中需要处理的，那么就在递归函数里加上这个参数， 并且还要明确每次递归的返回值是什么进而确定递归函数的返回类型。

- 确定单层递归的逻辑： 确定每一层递归需要处理的信息。在这里也就会重复调用自己来实现递归的过程。

---

# 二叉树的算法思想的运用广泛，甚至可以说，只要涉及递归，都可以抽象成二叉树的问题

---
