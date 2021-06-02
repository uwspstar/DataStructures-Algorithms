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
- https://www.jianshu.com/p/e6e9b8d516b8
- https://www.jianshu.com/p/f6d3732e86fb
- https://github.com/azl397985856/leetcode/blob/master/thinkings/backtrack.md

---

### 回溯

- 回溯是递归的副产品，只要有递归就会有回溯。
- 回溯法解决的问题都可以抽象为树形结构，是的，我指的是所有回溯法的问题都可以抽象为树形结构！
- `回溯搜索算法`就是在这棵多叉树上做`深度优先遍历` (深度优先遍历由于有“回头”的过程，在“回头”以后，状态变量需要设置成为和之前刚来到这个结点的时候一样。具体的表现就是：在回到上一层结点的时候，需要撤销上一次选择，这个操作也称之为“状态重置”，这里“状态重置”就是“回溯算法”里“回溯”的本意)

---

### 回溯算法模板框架如下：做回溯法的题目都靠它了

- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.md

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

```js
const visited = {}
function dfs(i) {
	if (满足特定条件）{
		// 返回结果 or 退出搜索空间
	}

	visited[i] = true // 将当前状态标为已搜索
	dosomething(i) // 对i做一些操作
	for (根据i能到达的下个状态j) {
		if (!visited[j]) { // 如果状态j没有被搜索过
			dfs(j)
		}
	}
	undo(i) // 恢复i
}
```

---

### 递归的终止条件是：

- 数字的个数已经选够了。因此我们需要一个变量来表示当前已经选了几个数字，这个变量等价的含义是在这棵树上当前遍历到了这棵树的第几层，我们把这个变量叫做 `depth`；
- 当 `depth` == `len` （`len` 是序列中数字的个数）的时候，递归终止。

---

### 回溯法，一般可以解决如下几种问题：

- 回溯的本质是穷举, 虽然回溯法很难，很不好理解，但是回溯法并不是什么高效的算法。
- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.md
- 组合问题：N 个数里面按一定规则找出 k 个数的集合
- 切割问题：一个字符串按一定规则有几种切割方式
- 子集问题：一个 N 个数的集合里有多少符合条件的子集
- 排列问题：N 个数按一定规则全排列，有几种排列方式
- 棋盘问题：N 皇后，解数独等等

---

### 什么是组合，什么是排列？

- `组合`是不强调元素顺序的，`排列`是强调元素顺序。
- 例如：{1, 2} 和 {2, 1} 在组合上，就是`1个集合`，因为不强调顺序，而要是排列的话，{1, 2} 和 {2, 1} 就是`2个集合了`。
- 记住`组合无序，排列有序`，就可以了。
- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.md

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

- Typically, backtracking is used to enumerate all possible solutions for a problem, in a trial-fail-and-fallback strategy.
