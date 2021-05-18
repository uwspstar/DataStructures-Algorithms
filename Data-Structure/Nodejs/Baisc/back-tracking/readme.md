---
marp: true
theme: default
header: 'https://github.com/youngyangyang04/leetcode-master'
footer: 'https://github.com/youngyangyang04/leetcode-master'
paginate: true
size: 16:9
---

# back tracking

- (Highly Recommend) https://github.com/youngyangyang04/leetcode-master
- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.md
- 回溯是递归的副产品，只要有递归就会有回溯。
- 回溯法解决的问题都可以抽象为树形结构，是的，我指的是所有回溯法的问题都可以抽象为树形结构！
---
### 回溯算法模板框架如下：做回溯法的题目都靠它了
```
void backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }

    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }
}
```
---

### 回溯法，一般可以解决如下几种问题：

- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.md
- 组合问题：N 个数里面按一定规则找出 k 个数的集合
- 切割问题：一个字符串按一定规则有几种切割方式
- 子集问题：一个 N 个数的集合里有多少符合条件的子集
- 排列问题：N 个数按一定规则全排列，有几种排列方式
- 棋盘问题：N 皇后，解数独等等

---

### 什么是组合，什么是排列？

- 组合是不强调元素顺序的，排列是强调元素顺序。
- 例如：{1, 2} 和 {2, 1} 在组合上，就是一个集合，因为不强调顺序，而要是排列的话，{1, 2} 和 {2, 1} 就是两个集合了。
- 记住组合无序，排列有序，就可以了。

---

### 回溯法解决的问题都可以抽象为树形结构, 一颗高度有限的树（N 叉树）

- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.md#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3%E5%9B%9E%E6%BA%AF%E6%B3%95
- 回溯法解决的都是在集合中递归查找子集，集合的大小就构成了树的宽度，递归的深度，都构成的树的深度。
- 递归就要有终止条件，所以必然是一颗高度有限的树（N 叉树）

### 回溯函数终止条件如下：
```
if (终止条件) {
    存放结果;
    return;
}
```