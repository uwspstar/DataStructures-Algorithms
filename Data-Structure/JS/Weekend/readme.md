---
marp: true
theme: default
header: 'leetcode'
footer: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript
'
paginate: true
size: 16:9
---

# Code Interview

- https://adrianmejia.com/blog/
- https://www.byte-by-byte.com/
- https://github.com/youngyangyang04/leetcode-master
- 数组-> 链表-> 哈希表 -> 字符串 -> 栈与队列 -> 树 -> 回溯 -> 贪心 -> 动态规划 -> 图论 -> 高级数据结构

---

- string, reverser, sliding window, two pointers, math
- array, sorting, bubble sort, selection sort, insertion sort, merge sort, quick sort, reverse, binary search (arr in order)
- hash table, dictionary, Set, Map
- stack, LIFO
- queue, FIFO
- linkList, double linklist, circle linklist, delete, reverse
- tree, binary tree
- graph

---

# JavaScript Bitwise Operators

- https://wangdoc.com/javascript/operators/bit.html
- https://www.runoob.com/w3cnote/bit-operation.html
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6

---

### & 与运算的用途：

- 3）判断奇偶 : 只要根据最未位是 0 还是 1 来决定，为 0 就是偶数，为 1 就是奇数。因此可以用 if ((a & 1) === 0)代替 if (a % 2 == 0)来判断 a 是不是偶数

```js
if ((a & 1) === 0)
```

- 1）清零 : 如果想将一个单元清零，即使其全部二进制位为 0，只要与一个各位都为零的数值相与，结果为零。
- 2）取一个数的指定位 : 比如取数 X=1010 1110 的低 4 位，只需要另找一个数 Y，令 Y 的低 4 位为 1，其余位为 0，即 Y=0000 1111，然后将 X 与 Y 进行按位与运算（X&Y=0000 1110）即可得到 X 的指定位.

---

### | 或运算符

- 1）常用来对一个数据的某些位设置为 1 : 比如将数 X=1010 1110 的低 4 位设置为 1，只需要另找一个数 Y，令 Y 的低 4 位为 1，其余位为 0，即 Y=0000 1111，然后将 X 与 Y 进行按位或运算（X|Y=1010 1111）即可得到

---

### ^ 异或运算符

- 1、交换律
- 2、结合律 (a^b)^c == a^(b^c)
- 3、对于任何数 x，都有 x^x=0，x^0=x
- 4、自反性: a^b^b=a^0=a;

---

### ^ 异或运算符 : 参加运算的两个对象，如果两个相应位相同为 0，相异为 1

- 1）翻转指定位 : 比如将数 X=1010 1110 的低 4 位进行翻转，只需要另找一个数 Y，令 Y 的低 4 位为 1，其余位为 0，即 Y=0000 1111，然后将 X 与 Y 进行异或运算（X^Y=1010 0001）即可得到。
- 2）与 0 相异或值不变 : 例如：1010 1110 ^ 0000 0000 = 1010 1110
- 3）交换两个数

```js
const Swap = (a, b) => {
  if (a !== b) {
    a ^= b; // a =  a ^ b
    b ^= a; // b = b ^ (a ^ b) -> b = a
    a ^= b; // a = (a ^ b ) ^ a -> a = b
  }
};
```

---

### ~ 取反运算符 : " ~"运算符的优先级比算术运算符、关系运算符、逻辑运算符和其他运算符都高。

---

# Stack & Queue

- https://mp.weixin.qq.com/s/VZRjOccyE09aE-MgLbCMjQ
- Stack 栈提供 `push` 和 `pop` 等等接口，所有元素必须符合先进后出规则，所以栈`不提供`走访功能，也`不提供`迭代器(iterator)。不像是 `set` 或者 `map` 提供迭代器 `iterator` 来遍历所有元素。

---

# Array , String

- Array : ASCII code, such as `let arr = Array(26).fill(0)`;
- String : `let code = str.charCodeAt(index)`
- `arr[code-97]++`
- 首先`扩充数组`到每个空格替换成"%20"之后的大小, 从后向前填充. 从前向后填充就是 O(n^2)的算法了，因为每次添加元素都要将添加元素之后的所有元素向后移动。
- 其实很多数组填充类的问题，都可以先预先给数组扩容带填充后的大小，然后在从后向前进行操作

---

# String 反转好多次字符串

- https://mp.weixin.qq.com/s/PmcdiWSmmccHAONzU0ScgQ
- 双指针法
- 反转加上了一些条件
- 先整体反转再局部反转
- 先局部反转再 整体反转

---

# KMP

- KMP 主要应用在字符串匹配上
- https://mp.weixin.qq.com/s?__biz=MzUxNjY5NTYxNA==&mid=2247484428&idx=1&sn=c0e5573f5fe3b438dbe75f93f3f164fa&scene=21#wechat_redirect
- https://mp.weixin.qq.com/s/Gk9FKZ9_FSWLEkdGrkecyg
- `KMP` 的经典思想就是: 当出现字符串不匹配时，可以记录一部分之前已经匹配的文本内容，利用这些信息避免从头再去做匹配.

---

# 唯一, 重复, 无限循环, max. min

- 唯一 : `Set`, `HashMap`
- 当我们遇到了要快速判断一个元素是否出现集合里的时候，就要考虑`哈希法`了
- 数组的大小是受限制的，而且如果元素很少，而哈希值太大会造成内存空间的浪费
- 其实需要哈希的地方都能找到 `map` 的身影

---

### 双指针法 : 很多考察数组和链表操作的面试题，都使用双指针法

- 1: 快慢指针法 ：通过一个`快指针`和`慢指针`在一个 for 循环下完成两个 for 循环的工作。`fast`, and `slow` pointers
  - array : remove repeat item (sort first)
  - array : remove target value from array (arr address is continuous)
  - linked list : remove kth element (address is NOT continuous)
  - linked list : find mid node value
- 2: left and right
  - reverse array
- 双指针法将时间复杂度`O(n^2)`的解法优化为 `O(n)`的解法。也就是降一个数量级

---

### 谓滑动窗口，sliding window

- https://mp.weixin.qq.com/s/UrZynlqi4QpyLlLhBPglyg
- 谓滑动窗口 : 就是不断的调节子序列的起始位置和终止位置，从而得出我们要想的结果
- 实现滑动窗口，主要确定如下三点：
  - `窗口内是什么`？
  - `如何移动窗口的起始位置`？
  - `如何移动窗口的结束位置`？

### find middle `防止溢出`

```js
let middle = left + (right - left) / 2;
```

```js
let mid = arr.length >> 1;
```

---

### 去重

```js
if (k > 0 && nums[k] == nums[k - 1]) {
  // cannot use nums[k] == nums[k + 1]
  continue;
}
```

---

### 二分查找 Binary Search

- `Binary Search` : 二分查找法是数组里的常用方法，彻底掌握它是十分必要的.
- 使用二分查找的基础条件 : 数组是有序数组
- `一旦有重复元素，使用二分查找法返回的元素下表可能不是唯一的`
- 循环不变量（loop invariant）

---

- 如果题目关键的部分直接用库函数就可以解决，`建议不要使用库函数`。

---

# JavaScript 数据类型和数据结构

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference

---

# 9 种数据类型 `2SB NUB` + `nof`

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
- `6` 种原始类型，使用 `typeof` 运算符检查 : `2SB NUB`
- null
- Object
- Function

---

# typeof vs instanceof

## `typeof` 操作符的唯一目的就是检查数据类型

## 如果我们希望检查任何从 `Object` 派生出来的结构类型，使用 `typeof` 是不起作用的，因为总是会得到 `"object"`。

## 检查 `Object` 种类的合适方式是使用 `instanceof` 关键字。

## 但即使这样也存在误差。

---

# 原始值( primitive values )

- 除 `Object` 以外的所有类型都是不可变的（值本身无法被改变）。
- 例如，与 C 语言不同，`JavaScript 中字符串 string 是不可变的`
- `JavaScript` 中对 `string` 字符串的操作一定返回了一个 `new string` 新字符串，原始字符串并没有被改变。我们称这些类型的值为`“原始值”`

---

# Object

- 在计算机科学中, 对象 `Object` 是指`内存中的可以被标识符引用的一块区域`.
- 在 `Javascript` 里，对象 `Object` 可以被看作是一组属性的集合。
- 一个 `Javascript`, 对象 `Object` 就是键和值之间的映射。
- `key` 键是一个`字符串`（或者 `Symbol`） ，`value` 值可以是`任意类型的值`。 这使得对象非常符合 `哈希表`。

- `函数是一个附带可被调用功能的常规对象`。

---

# Dictionary / Map

- https://www.youtube.com/watch?v=djcOVCrg5yM&list=PL9nxfq1tlKKmgTh_FSRzSIChwOsv7qr7v&index=16

---

# 散列表（Hash table，也叫哈希表）

- https://www.youtube.com/watch?v=Yaf7bxiJNqg&list=PL9nxfq1tlKKmgTh_FSRzSIChwOsv7qr7v&index=18
- 一般哈希表都是用来快速判断一个元素是否出现集合里
- 是根据键（`Key`）而直接访问在`記憶體儲存位置`的`数据结构`。
- 它通过计算一个关于键值的函数，将所需查询的数据映射到表中一个位置来访问记录，`这加快了查找速度`。这个映射函数称做`散列函数`，存放记录的数组称做`散列表`。

---

# hash function ，也就是哈希函数

- 通过 `hashCode` 把名字转化为数值，一般 `hashcode` 是通过特定编码方式，可以将其他数据格式转化为不同的数值
- 当我们想使用哈希法来解决问题的时候，我们一般会选择如下三种数据结构。
  - `Array` 数组
  - `Set` （集合）
  - `Map` (映射)
- 如果哈希值比较少、特别分散、跨度非常大，使用数组就造成空间的极大浪费。此时就要使用另一种结构体了，set

---

# 无限循环 重复 唯一 Set hashtable

- hashtable
- Set

---

# 键控集: Maps, Sets, WeakMaps, WeakSets

- 这些数据结构把`对象`的`引用`当作`键`
- `Map` 和 `WeakMap` 把一个值和对象关联起来的时候，键的比较是基于 `sameValueZero` 算法. 一个 `Map`的键可以是任意值，包括`函数`、`对象`或任意`基本类型`。
- `Set`和`WeakSet` 表示一组对象。
- https://es6.ruanyifeng.com/#docs/set-map
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map

---

# Map

- `Map.length` , 属性 length 的值为 0 。
- 想要计算一个 Map 中的条目数量， 使用 `Map.prototype.size`.

---

### 构造函数

- http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function

---

# Set

- 类似于数组，但是成员的值都是唯一的，`没有重复的值`。
- `Set`本身是一个`构造函数`，用来生成 `Set` 数据结构
- `Set` 函数可以接受一个数组（或者具有 `iterable` 接口的其他数据结构, `Array`, `Map`, `Set`, `String`, `TypedArray`, `函数的 arguments 对象`, `NodeList 对象`）作为参数，用来初始化

---

### 具有 `iterable` 接口的其他数据结构 :

- https://blog.csdn.net/ixygj197875/article/details/79188222
- ES6 具有 `iterable` 接口的数据结构, `Array`, `Map`, `Set`, `String`, `TypedArray`, `函数的 arguments 对象`, `NodeList 对象`
- 扩展运算符（`...`）内部使用 `for...of` 循环，所以也可以用于 `Set` 结构

---

- 去除数组的重复成员 `[...Set()]`, `Array.from(new Set(array))`

```js
[...new Set(array)];
```

```js
function removeDuplicate(array) {
  return Array.from(new Set(array));
}
```

---

- 去除字符串里面的重复字符 : arr first, then join as str, (new arr)

```js
[...new Set('ababbc')].join('');
```

```js
let str = 'ababbc';
let newStr = [...new Set(str)].join('');
console.log('str', str, 'newStr', newStr);
```

---

# 向 `Set` 加入值的时候，`不会发生类型转换`，所以 5 和"5"是两个不同的值。

- 在 `Set` 内部，两个`NaN`是`相等`的.
- 在 `Set` 内部，两个`对象`总是`不相等`的.
- `Set` 内部判断两个值是否不同，使用的算法叫做`“Same-value-zero equality”`，它类似于精确相等运算符（===），主要的区别是向 `Set` 加入值时认为 `NaN` 等于自身，而精确相等运算符认为 `NaN` 不等于自身。

---

# 精确相等运算符（===）

- 精确相等运算符认为 `NaN` 不等于自身, but Set NaN equal

```js
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
```

---

# 需要特别指出的是，Set 的遍历顺序就是插入顺序。

- 这个特性有时非常有用，比如使用 `Set` 保存一个回调函数列表，调用时就能`保证按照添加顺序`调用。
- 由于 `Se`t 结构没有键名，只有键值（或者说`键名和键值是同一个值`）
- Set 结构的实例默认可遍历，它的`默认`遍历器生成函数就是它的`values`方法
- 扩展运算符（`...`）内部使用 `for...of` 循环，所以也可以用于 `Set` 结构

---

# 扩展运算符（...）内部使用 for...of 循环，所以也可以用于 Set 结构

---

# Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）

```js
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]); // Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter((x) => b.has(x))); // set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter((x) => !b.has(x))); // Set {1}
```

---

# WeakSet vs Set

- WeakSet 结构与 Set 类似，也是不重复的值的集合。
- WeakSet 与 Set 有两个区别 :
  - 首先，`WeakSet` 的成员只能是`对象`，而不能是其他类型的值。
  - 垃圾回收机制不考虑 `WeakSet` 对该对象的引用

---

# 垃圾回收机制不考虑 WeakSet 对该对象的引用

- `WeakSet` 中的对象都是`弱引用`，即垃圾回收机制`不考虑` `WeakSet` 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，`不考虑`该对象还存在于 `WeakSet` 之中。
- Even, when the obj has a refer by WeakSet, the garbage collection clearer still clean it

---

# 垃圾回收机制依赖`引用计数`，and 内存泄漏

- 如果一个值的引用次数`不为 0`，垃圾回收机制就不会释放这块内存。(except this one refer by WeakSet, WeakMap)
- 结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发`内存泄漏`。

---

## `WeakSet` 里面的引用，都`不计入垃圾回收机制`，所以就不存在这个问题。因此，`WeakSet` 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。

## 由于上面这个特点，`WeakSet` 的成员是不适合引用的，因为它会随时消失。另外，由于 `WeakSet` 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 `ES6 规定 WeakSet 不可遍历`

## ES6 规定 WeakSet 不可遍历

---

# Map 和 WeakMaps 之间的差别

- `Map`，对象键是`可枚举的`。这允许垃圾收集器优化后面的枚举(`This allows garbage collection optimizations in the latter case`)。
- `WeakMap` and `WeakSet` 没有`size`属性，没有办法遍历它的成员
- ES6 具有 `iterable` 接口的数据结构, `Array`, `Map`, `Set`, `String`, `TypedArray`, `函数的 arguments 对象`, `NodeList 对象` -- NOT `WeakSet`, and `WeakMap`

```js
const arr = [
  [1, 2],
  [3, 4],
];
const ws = new WeakSet(arr); // WeakSet {[1, 2], [3, 4]}
```

- `注意`，是 arr 数组的成员成为 WeakSet 的成员，而不是 arr 数组本身。这意味着，数组的成员只能是`对象`

---

# WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。

- `WeakSet` 里面的引用，都`不计入垃圾回收机制`，所以就不存在内存泄漏这个问题。
- `WeakSet` 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 `WeakSet` 里面的引用就会自动消失。

---

# 对象并不能进行比较 : 查询必定是线性的

- 在纯 `ECMAScript 5` 下可以实现`Maps`和`Sets`。
- 因为对象并不能进行比较（就对象“小于”示例来讲），所以`查询必定是线性的`。他们本地实现（包括 `WeakMaps`）查询所花费的时间可能是`对数增长 (logarithmic to constant time)`。

- 通常，可以通过直接在对象上设置属性或着使用 `data-*`属性，来绑定数据到 `DOM` 节点。然而缺陷是在任何的脚本里，数据都运行在同样的上下文中。`Maps` 和 `WeakMaps` 方便将`数据私密的绑定到一个对象`。

---

# 内存管理 : 这个“自动”是混乱的根源

- `JavaScript` 是在`创建变量`（`对象`，`字符串`等）时`自动进行了分配内存`，并且在不使用它们时“`自动`”释放。
- 释放的过程称为`垃圾回收`。这个“自动”是混乱的根源，并让 `JavaScript`（和其他高级语言）开发者错误的感觉他们可以不关心内存管理。

---

# JavaScript 内存泄漏教程 memory leak

- http://www.ruanyifeng.com/blog/2017/04/memory-leak.html

# 不再用到的内存，没有及时释放，就叫做内存泄漏（memory leak）

- 程序的运行需要内存。只要程序提出要求，操作系统或者运行时（`runtime`）就必须供给内存。对于持续运行的服务进程（`daemon`），必须及时释放不再用到的内存。否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃。

---

# JavaScript 的内存分配

- 为了不让程序员费心分配内存，`JavaScript` 在定义变量时就完成了内存分配。
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management#javascript_%E7%9A%84%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D
- http://www.ruanyifeng.com/blog/2017/04/memory-leak.html

---

```js
var n = 123; // 给数值变量分配内存
var s = 'this is a string'; // 给字符串分配内存
var o = {
  a: 1,
  b: null,
}; // 给对象及其包含的值分配内存

var a = [1, null, 'abcd']; // 给数组及其包含的值分配内存（就像对象一样）

function f(a) {
  return a + 2;
} // 给函数（可调用的对象）分配内存

someElement.addEventListener(
  'click',
  function () {
    someElement.style.backgroundColor = 'blue';
  },
  false
); // 函数表达式也能分配一个对象
```

---

# 有些函数调用结果是分配对象内存：

```js
var d = new Date(); // 分配一个 Date 对象

var e = document.createElement('div'); // 分配一个 DOM 元素
```

---

# 垃圾回收算法和它们的局限性

- 1. `引用计数算法`
- 2. 标记-清除垃圾回收算法 : “对象是否不再需要”

- `垃圾回收算法`主要依赖于`引用`的概念。
- 在内存管理的环境中，一个对象如果有访问另一个对象的权限（`隐式`或者`显式`），叫做一个对象引用另一个对象。
- `Javascript` 对象具有对它`原型的引用（隐式引用` 和对它`属性的引用（显式引用` 。
- For instance, a JavaScript object has a reference to `its prototype` (`implicit reference`) and to `its properties` values (`explicit reference`).

---

# 最初级的垃圾收集算法 : 引用计数算法

```js
var o = {
  a: {
    b: 2,
  },
}; // 两个对象被创建，一个{b ..}作为另一个a的属性被引用，另一个{..} 被分配给变量o  很显然，没有一个可以被垃圾收集
var o2 = o; // o2变量是第二个对“这个对象”的引用
o = 1; // 现在，reassign a new value ,“这个对象”只有一个o2变量的引用了，“这个对象”的原始引用o已经没有

var oa = o2.a; // 引用“这个对象”的a属性 // 现在，“这个对象”有两个引用了，一个是o2，一个是oa
o2 = 'yo'; // 虽然最初的对象现在已经是零引用了，可以被垃圾回收了, 但是它的属性a的对象还在被oa引用，所以还不能回收
oa = null; // a属性的那个对象现在也是零引用了, 它可以被垃圾回收了
```

---

### 引用计数算法 : 限制

- `IE 6, 7` 使用引用计数方式对 `DOM` 对象进行垃圾回收。该方式常常造成对象被循环引用时`内存发生泄漏`：
- 此算法把“对象是否不再需要”简化定义为`“对象有没有其他对象引用到它”`。如果没有引用指向该对象（`零引用`），对象将被垃圾回收机制回收。
- 该算法有个限制：`无法处理循环引用的事例`。在下面的例子中，两个对象被创建，并互相引用，形成了一个循环。它们被调用之后会离开函数作用域，所以它们已经没有用了，可以被回收了。然而，`引用计数算法`考虑到它们互相都有至少一次引用，所以它们不会被回收。

---

### 标记-清除垃圾回收算法 : “对象是否不再需要”

- 从 2012 年起，所有现代浏览器都使用了`标记-清除垃圾回收算法`。
- 所有对 `JavaScript` 垃圾回收算法的改进都是基于`标记-清除算法`的改进，并没有改进标记-清除算法本身和它对`“对象是否不再需要”`的简化定义

---

# 基本上，如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。

- 以 `WeakMap` 为例，看看它是怎么解决内存泄漏的。

```js
const wm = new WeakMap();

const element = document.getElementById('example');

wm.set(element, 'some information');
wm.get(element); // "some information"
```

---

- 上面代码中，先新建一个 `Weakmap` 实例。然后，将一个 `DOM` 节点作为`键名`存入该实例，并将一些附加信息作为`键值`，一起存放在 WeakMap 里面。这时，WeakMap 里面对 element 的引用就是弱引用，不会被计入垃圾回收机制。

- 也就是说，`DOM` 节点对象的`引用计数是 1`，而不是 `2`。这时，一旦消除对该节点的引用，它占用的内存就会被垃圾回收机制释放。Weakmap 保存的这个键值对，也会自动消失。

---

# Map : 如果你需要“键值对”的数据结构，Map 比 Object 更合适

- `ES6 提供了 Map 数据结构`。
- `key` can be `Object`
- 它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（`包括对象`）都可以当作`键`。
- 也就是说，`Object` 结构提供了“字符串—值”的对应，`Map` 结构提供了“值—值”的对应，是一种更完善的 `Hash` 结构实现。
- `Map` 的遍历顺序就是插入顺序。

---

# 注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。

- one interview question

```js
const map = new Map();

map.set(['a'], 555);
map.get(['a']); // undefined
```

- 上面代码的 set 和 get 方法，表面是针对同一个键，但实际上这是两个不同的数组实例，内存地址是不一样的，因此 get 方法无法读取该键，返回 undefined。

---

# Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题.

---

# 如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键

### 0 和-0 就是一个键

### 布尔值 true 和字符串 true 则是两个不同的键。

### undefined 和 null 也是两个不同的键。

### 虽然 NaN 不严格相等于自身，但 Map 将其视为同一个键

---

# Map 结构转为数组结构，比较快速的方法是使用`扩展运算符（...）`(Spread syntax)。

```js
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()]// [1, 2, 3]

[...map.values()]// ['one', 'two', 'three']

[...map.entries()]// [[1,'one'], [2, 'two'], [3, 'three']]

[...map]// [[1,'one'], [2, 'two'], [3, 'three']]
```

---

# prototype vs properties

---

# 字符编码 : 通常在 HTML 里声明 UTF-8 字符编码

- 一套编码系统定义字节与文本间的映射。
- https://developer.mozilla.org/zh-CN/docs/Glossary/character_encoding
- `通常在 HTML 里声明 UTF-8 字符编码`

```html
<meta charset="utf-8" />
```

- https://stackoverflow.com/questions/19212306/whats-the-difference-between-ascii-and-unicode

---

# UTF-8

- 每个字符由 `1` 到 `4` 个字节表示。`UTF-8` 与 `ASCII` 向后兼容，可以表示任何标准的 `Unicode` 字符。

- 前 `128` 个 `UTF-8` 字符与前 `128` 个 `ASCII` 字符(编号为 `0-127`) 精确匹配，这意味着现有的 `ASCII` 文本已经是有效的 `UTF-8`。
- 所有其他字符都使用 `2` 到 `4` 个字节。每个字节都有一些用于编码目的的保留位。由于非 `ASCII` 字符需要一个以上的字节来存储，如果字节被分隔而不重组，那么它们就会有损坏的风险。

---

# ASCII and ASCII Extended

- `ASCII was meant for English only`.
- `ASCII` 是计算机中最常用的编码方式，用于将`字母，数字，标点符号和控制字符`转换为计算机可以理解的数字形式。 从 2007 年开始逐渐被 `UTF-8` 代替。`look at your keyboard`
- ASCII uses `7 bits` to represent a character. By using 7 bits, we can have a maximum of `2^7 (= 128), 0~ 127` distinct combinations. Which means that we can represent `128` characters maximum. `(0 ~ 127)`
- using the `8th bit` (the bit used for parity) to encode more characters to support their language
- `ASCII Extended` solves the problem for languages that are based on the Latin alphabet

---

# what about the others needing a completely different alphabet? Greek? Russian? Chinese and the likes?

- `Unicode` doesn't contain every character from every language, but it sure contains a gigantic amount of characters

---

# Encodings: UTF-8 vs UTF-16 vs UTF-32

- https://stackoverflow.com/questions/22404493/is-there-a-drastic-difference-between-utf-8-and-utf-16/22404874#22404874

---

# 正则表达式 RegExp Basic

- https://es6.ruanyifeng.com/#docs/regex
- https://wangdoc.com/javascript/stdlib/regexp.html
- 正则表达式是用于匹配字符串中字符组合的模式。
- 在 `JavaScript` 中，`正则表达式也是对象`.
- 这些模式被用于 `RegExp` 的 `exec` 和 `test` 方法, 以及 `String` 的 `match`、`matchAll`、`replace`、`search` 和 `split` 方法
- https://betterprogramming.pub/working-with-regular-expressions-regex-in-javascript-6c7dd951574a

---

- `\`
- `^`
- `$`
- `-`
- `*`
- `+`
- `?`
- `.`

---

# Which algorithm does the JavaScript Array#sort() function use?

- https://www.tutorialspoint.com/which-algorithm-does-the-javascript-arrayhashsort-function-use
- `Mozilla(Spider Monkey JS engine)` uses `mergeSort`.
- `WebKit(Chrome, Safari, etc)`
  - `Numeric arrays` use C++ Std library's `quick sort` function
  - `Non-numeric arrays` use `merge sort`.

---

### DOM

- operate xml => xhtml => html => html 2.0
- DOM cannot operate css

### javascript not use "-"

- `div.style.backgroundColor` not `div.style.background-color`
- css file can use `-`, emp : `background-color`

---

### xml => xhtml => html => html 2.0

- xml element can be any

---

# Big O

- https://adrianmejia.com/how-to-find-time-complexity-of-an-algorithm-code-big-o-notation/
- https://mp.weixin.qq.com/s/LWBfehW1gMuEnXtQjJo-sw
- https://adrianmejia.com/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/
- https://www.bigocheatsheet.com/

---

# O(1)常数阶 < O(logn)对数阶 < O(n)线性阶 < O(n^2)平方阶 < O(n^3)(立方阶) < O(2^n) (指数阶)

---

### O(1) Constant

- Odd or Even number
- Look-up table (on average) O(log n)

### Logarithmic

- Finding element on sorted array with binary search

### O(n) Linear

- Find max element in unsorted array
- Duplicate elements in array with Hash Map

---

### O(n log n) Linearithmic

- Sorting elements in array with merge sort

### O(n^2) Quadratic

- Duplicate elements in array **(naive)**, - Sorting array with bubble sort

### O(n^3) Cubic

- 3 variables equation solver

---

### O(2^n) Exponential

- Find all subsets

### O(n!) Factorial

- Find all permutations of a given set/string

---

# sort

- `quick sort` : `getPivotIndex`
- `merge sort` : `mid`
- `bubble sort` : `i < arr.length; i--; arr[j] > arr[j + 1]`
- `select sort` : `smallIndex = i;`
- `insertion sort` : `current = arr[i];`

---

# quick sort :

- 快速排序是 O(nlogn)，但是当数据已经有序情况下，快速排序的时间复杂度是 O(n^2) 的，所以严格从大 O 的定义来讲，快速排序的时间复杂度应该是 O(n^2). 但是我们依然说快速排序是 O(nlogn)的时间复杂度，这个就是业内的一个默认规定，这里说的 O 代表的就是一般情况，而不是严格的上界

---

### 在决定使用哪些算法的时候，不是时间复杂越低的越好（因为简化后的时间复杂度忽略了常数项等等），要考虑数据规模，如果数据规模很小甚至可以用 O(n^2)的算法比 O(n)的更合适（在有常数项的时候）

### 大 O 就是数据量级突破一个点且数据量级非常大的情况下所表现出的时间复杂度，这个数据量也就是常数项系数已经不起决定性作用的数据量

---

# O(logn)中的 log 是以什么为底？

- 平时说这个算法的时间复杂度是 logn 的，那么一定是 log 以 2 为底 n 的对数么？

- 其实不然，也可以是以 10 为底 n 的对数，也可以是以 20 为底 n 的对数，但我们统一说 logn，也就是忽略底数的描述

---

# JavaScript Bitwise Operations

- https://www.w3schools.com/js/js_bitwise.asp

---

# 一般哈希表都是用来快速判断一个元素是否出现集合里

- 如果哈希值比较少、特别分散、跨度非常大，使用数组就造成空间的极大浪费。此时就要使用另一种结构体了，set

---

# string

---

# Array

- 数组是表示`列表`或`集合`的`最优选择`
- 数组`不适合`做频繁的增删操作 : 数组的在内存空间的地址是连续的，所以我们在删除或者增添元素的时候，就难免要移动其他元素的地址
- 数组的元素在内存地址中是连续的，不能单独删除数组中的某个元素，只能覆盖
- 数组在内存中是连续的地址空间，不能释放单一元素，如果要释放，就是全释放（程序运行结束，回收内存栈空间）。

---

### 二维数组在内存的空间地址是连续的么？

- `不是一个连续地址空间`
- 二位数组中其实是`一个线性数组存放着其他数组的首地址`。

---

# Array.from 方法可以将 Set 结构转为数组。

```js
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
```

- 去除数组重复成员的另一种方法

```js
function removeDuplicate(array) {
  return Array.from(new Set(array));
}
```

---

### Array.from(obj, mapFn, thisArg)

- `let result = Array.from({length:n}, ()=>new Array(n));`

```js
// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
```

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from

---

### arr.splice() && Array(26).fill(0) && str.charCodeAt(i)

- `let arrDeletedItems = arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])`
- `let result = Array(26).fill(0);`
- `str.charCodeAt(i)`

---

# Linked List

- 数组是在内存中是连续分布的，但是链表在内存中可不是连续分布的
- 数组在定义的时候，长度就是固定的，如果想改动数组的长度，就需要重新定义一个新的数组。
- 链表的长度可以是不固定的，并且可以动态增删， 适合数据量不固定，频繁增删，较少查询的场景。

---

# stack

---

# queue

---

# linked List

- 虚拟头结点 dummy head
- reverse linked list, `迭代法`和`递归法`
- circular linked list, fast and slow (如果 fast 是一次走三个节点，那么可能会跳过 slow，因为相对于 slow 来说，fast 是两个节点移动的。)
- find index, append, delete,

---

# tree

---

# map

---

```js
// Whole-script strict mode syntax
'use strict';

//swap function
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
```

---

### Dynamic Programming

- https://leetcode-cn.com/problems/fibonacci-number/solution/dong-tai-gui-hua-tao-lu-xiang-jie-by-labuladong/

---

### longestPalindrome

- https://leetcode-cn.com/problems/longest-palindromic-substring/

```js
const longestPalindrome = function (str) {
  if (str.length < 2) return str;
  let result = '';
  let max = 0;
  let len = str.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      let test = str.slice(i, j);
      if (isPalindrome(test) && test.length > max) {
        result = str.slice(i, j);
        max = Math.max(max, result.length);
      }
    }
  }
  return result;
};
```

---

```js
//a b c b a
const isPalindrome = (str) => {
  if (str.length < 2) return true;
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
};

console.log(longestPalindrome('cbbd')); //bb
console.log(longestPalindrome('racecar')); //racecar
console.log(longestPalindrome('babad')); //bab
console.log(longestPalindrome('babab')); //babab
console.log(longestPalindrome('ababbad')); //abba
```

---

### repeatStrNTimes

```js
{
  const repeatStrNTimes = (str, num) => {
    let array = new Array(num + 1); //empty arr
    return array.join(str);
  };
  console.log('repeatStrNTimes', repeatStrNTimes('abc', 3));
}
```

---

### maxWaterContainer

```js
{
  const maxWaterContainer = (arr) => {
    if (arr.length < 2) return 0;
    let ai = 0;
    let bi = arr.length - 1;
    let maxArea = 0;
    while (ai < bi) {
      let height = Math.min(arr[ai], arr[bi]);
      let width = bi - ai;
      maxArea = Math.max(maxArea, height * width);
      arr[ai] < arr[bi] ? ai++ : bi--;
    }
    return maxArea;
  };

  // area = height x width
  // height = min (a, b)
  // width = bi - ai

  console.log('9-1: maxArea = ', maxWaterContainer([7])); //0
  console.log('9-2: maxArea = ', maxWaterContainer([7, 1])); // 1
  console.log(
    '9-3: maxWaterContainer',
    JSON.stringify(maxWaterContainer([7, 1, 2, 3, 9]))
  ); //28
}
```

---

### longestSubString

```js
{
  const longestSubString = (str) => {
    if (str.length === 0) return 0;
    if (str.length === 1) return 1;
    let maxLen = 0;
    let map = new Map();
    let fast = 0;
    let slow = 0;
    while (fast < str.length) {
      let key = str[fast];
      let value = map.get(key);
      if (value >= 0) {
        slow = value + 1;
        maxLen = Math.max(maxLen, fast - slow);
      }
      map.set(key, fast);
      fast++;
    }
    return maxLen;
  };
  console.log(
    '10-1: longestSubString',
    JSON.stringify(longestSubString('asdfadsfasavcbdferes'))
  ); // 9
  console.log(
    '10-2: longestSubString',
    JSON.stringify(longestSubString('asdfads'))
  ); // 4
}
```

---

### passingFlowerWithQueue

```js
{
  const passingFlowerWithQueue = (num) => {
    let queue = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    while (queue.length > 1) {
      for (let i = 0; i < num - 1; i++) {
        queue.push(queue.shift());
      }
      let removed = queue.shift();
    }
    return queue;
  };
  //let queue = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  console.log('passingFlowerWithQueue 3:', passingFlowerWithQueue(3)); // passFlower 3: [ 'd' ]
  console.log('passingFlowerWithQueue 2:', passingFlowerWithQueue(2)); // passFlower 2: [ 'g' ]
}
```

---

### ToBinary

```js
{
  // 10 / 2 = 5 --- 0
  // 5 / 2 = 2 --- 1
  // 2 / 2 = 1 --- 0
  const ToBinary = (num) => {
    let str = '';
    while (num) {
      str = (num % 2) + str;
      num = parseInt(num / 2);
    }
    return str;
  };
  console.log('ToBinary 10 ->:', ToBinary(10)); // ToBinary 10 ->: 1010
  console.log('ToBinary 8 ->:', ToBinary(8)); // ToBinary 10 ->: 1000
  console.log('ToBinary 5 ->:', ToBinary(5)); // ToBinary 5 ->: 101
  console.log('ToBinary 10 ->:', (10).toString(2)); // ToBinary 10 ->: 1010
  console.log('ToBinary 5 ->:', (5).toString(2)); // ToBinary 5 ->: 101
}
```

---

### reverseInteger

```js
{
// -321 -> - 123
const reverseInteger = num => {
if (num < 10 && num > -10) return num;
let isNegative = -1;
num > 0 ? isNegative = 1 : num = isNegative _ num;
let result = 0;
while (num) {
result = result _ 10 + num % 10;
num = parseInt(num / 10);
}
return result \* isNegative;
}
console.log('1 - 1: reverseInteger', JSON.stringify(reverseInteger(-321))); // -123
console.log('1 - 2: reverseInteger', JSON.stringify(reverseInteger(0))); // 0
console.log('1 - 3: reverseInteger', JSON.stringify(reverseInteger(10))); // 0

}
```

---

### buySellStock

```js
{
  const buySellStock = (arr) => {
    if (arr.length < 2) return arr;
    let maxProfit = 0;
    let maxCurrentPrice = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      let currentPrice = arr[i];
      maxCurrentPrice = Math.max(maxCurrentPrice, currentPrice);
      maxProfit = Math.max(maxProfit, maxCurrentPrice - currentPrice);
    }
    return maxProfit;
  };
  console.log(
    '2: buySellStock',
    JSON.stringify(buySellStock([9, 11, 8, 5, 7, 10]))
  ); // 5
}
```

---

### fibEndCall - tail call

```js
{
  const fibEndCall = (n, f1 = 1, f2 = 1) => {
    if (n < 3) return f2;
    return fibEndCall(n - 1, f2, f2 + f1);
  };
  console.log('3: fibEndCall', JSON.stringify(fibEndCall(45))); //1, 1, 2, 3, 5,..., 1134903170
}
```

---

### fibonacci - memo

```js
{
  const fibonacci = (n) => {
    if (n < 3) return 1;
    let memo = {};
    const fib = (n) => {
      if (n < 3) return 1;
      if (memo[n]) return memo[n];
      return (memo[n] = fib(n - 1) + fib(n - 2));
    };
    return fib(n);
  };
  console.log('4: fibonacci', JSON.stringify(fibonacci(45))); //1, 1, 2, 3, 5,..., 1134903170
}
```

---

### isBalance

```js
{
  const isBalance = (arr) => {
    if (arr.length % 2 !== 0) return false;
    const map = { '(': ')', '{': '}', '[': ']' };
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let key = arr[i];
      if (map[key]) {
        result.push(key);
      } else {
        let last = result.pop();
        if (map[last] !== key) return false;
      }
    }
    return result.length === 0;
  };
  console.log('5: isBalance: ', JSON.stringify(isBalance('[{()()}]'))); //true
  console.log('5: isBalance: ', JSON.stringify(isBalance('[[[]'))); //false
}
```

---

### isPalindrome

```js
{
  const isPalindrome = (arr) => {
    if (arr.length < 2) return true;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] !== arr[right]) return false;
      left++;
      right--;
    }
    return true;
  };
  console.log(
    '6 - 1: isPalindrome',
    JSON.stringify(isPalindrome('amanaplanacanalpanama'))
  ); // true
  console.log('6 - 2: isPalindrome', JSON.stringify(isPalindrome('a'))); // true
  console.log('6 - 3: isPalindrome', JSON.stringify(isPalindrome(''))); // true
  console.log('6 - 4: isPalindrome', JSON.stringify(isPalindrome('abcdc'))); // false
}
```

---

### sortColor

```js
{
  const sortColor = (arr) => {
    if (arr.length < 2) return arr;
    let p0 = 0;
    let current = 0;
    let p2 = arr.length - 1;
    while (current <= p2) {
      if (arr[current] === 2) {
        swap(arr, current, p2);
        p2--;
      } else if (arr[current] === 0) {
        swap(arr, current, p0);
        p0++;
        current++;
      } else current++;
    }
    return arr;
  };

  console.log(
    '7 - 1: sortColor',
    JSON.stringify(sortColor([0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]))
  ); // [0,0,0,0,0,1,1,1,1,2,2,2,2,2]
  console.log('7 - 2: sortColor', JSON.stringify(sortColor([0, 1, 2]))); // [0,1,2]
  console.log('7 - 3: sortColor', JSON.stringify(sortColor([0, 0, 2, 1]))); // [0,0,1,2]
  console.log('7 - 4: sortColor', JSON.stringify(sortColor([2, 0]))); // [0,2]
  console.log('7 - 5: sortColor', JSON.stringify(sortColor([2]))); // [2]
}
```

---

### matrixSpiral

```js
{
  const arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ];
  const matrixSpiral = (arr) => {
    if (arr.length === 0) return arr;
    if (arr.length === 1) return arr[0];
    let colStart = 0;
    let colEnd = arr[0].length - 1;
    let rowStart = 0;
    let rowEnd = arr.length - 1;
    let result = [];
    while (rowStart <= rowEnd && colStart <= colEnd) {
      for (let i = colStart; i <= colEnd; i++) {
        result.push(arr[rowStart][i]);
      }
      rowStart++;

      for (let i = rowStart; i <= rowEnd; i++) {
        result.push(arr[i][colEnd]);
      }
      colEnd--;

      for (let i = colEnd; i >= colStart; i--) {
        result.push(arr[rowEnd][i]);
      }
      rowEnd--;

      for (let i = rowEnd; i >= rowStart; i--) {
        result.push(arr[i][colStart]);
      }
      colStart++;
    }
    return result;
  };
  console.log('8: matrixSpiral', JSON.stringify(matrixSpiral(arr)));
  // [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
}
```

---

```js
### bubbleSort
{
const bubbleSort = arr => {
if (arr.length < 2) return arr;
for (let i = arr.length - 1; i >= 0; i--) {
let isSwap = false;
for (let j = 0; j < i; j++) {
if (arr[j] > arr[j + 1]) {
swap(arr, j, j + 1);
isSwap = true;
}
}
if (!isSwap) break;
}
return arr;
}
console.log('1 - 1: bubbleSort ', JSON.stringify(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])));//[1,2,3,4,5,6,7,8]
console.log('1 - 2: bubbleSort ', JSON.stringify(bubbleSort([8, 2, 1, 3, 5])));//[1,2,3,5,8]
console.log('1 - 3: bubbleSort ', JSON.stringify(bubbleSort([0])));//[0]
console.log('1 - 4: bubbleSort ', JSON.stringify(bubbleSort([8, 1])));//[1,8]
}
```

---

### selectionSort

```js
{
  const selectionSort = (arr) => {
    if (arr.length < 2) return arr;
    for (let i = 0; i < arr.length; i++) {
      let smallIndex = i;
      for (let j = smallIndex; j < arr.length; j++) {
        if (arr[j] < arr[smallIndex]) {
          smallIndex = j;
        }
      }
      if (smallIndex !== i) swap(arr, smallIndex, i);
    }
    return arr;
  };
  console.log(
    '2: selectionSort',
    JSON.stringify(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]))
  );
}
```

---

### insertionSort

```js
{
  const insertionSort = (arr) => {
    if (arr.length < 2) return arr;
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
      for (; j >= 0; j--) {
        if (arr[j] > current) {
          arr[j + 1] = arr[j];
        } else break;
      }
      arr[j + 1] = current;
    }
    return arr;
  };
  console.log(
    '3: insertionSort',
    JSON.stringify(insertionSort([8, 1, 2, 3, 4, 5, 6, 7]))
  );
}
```

---

### mergeSort

```js
{
  const mergeSortHelp = (arr) => {
    if (arr.length < 2) return arr;
    const merge = (left, right) => {
      if (left.length === 0) return right;
      if (right.length === 0) return left;
      let result = [];
      while (left.length && right.length) {
        left[0] < right[0]
          ? result.push(left.shift())
          : result.push(right.shift());
      }
      return result.concat(left, right);
    };
    const mergeSort = (arr) => {
      if (arr.length < 2) return arr;
      let mid = arr.length >> 1;
      let left = mergeSort(arr.slice(0, mid));
      let right = mergeSort(arr.slice(mid));
      return merge(left, right);
    };
    return mergeSort(arr);
  };
  console.log(
    '4: mergeSortHelp',
    JSON.stringify(mergeSortHelp([8, 1, 2, 3, 4, 5, 6, 7]))
  );
}
```

---

### quickSort

```js
{
  const quickSortHelp = (arr) => {
    if (arr.length < 2) return arr;
    const getPivotIndex = (arr, low = 0, high = arr.length - 1) => {
      let pi = low;
      let pivot = arr[high];
      for (let i = low; i <= high; i++) {
        if (arr[i] < pivot) {
          swap(arr, i, pi);
          pi++;
        }
      }
      swap(arr, high, pi);
      return pi;
    };
    const quickSort = (arr, low = 0, high = arr.length - 1) => {
      if (arr.length < 2) return arr;
      if (low < high) {
        let pi = getPivotIndex(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
      }
      return arr;
    };
    return quickSort(arr);
  };
  console.log(
    '5: quickSortHelp',
    JSON.stringify(quickSortHelp([8, 1, 2, 3, 4, 5, 6, 7]))
  );
}
```

---

### LinkList

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

---

```js
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    // cannot use if (this.head === null) this.head = new Node(value);
    // the new create a empty obj with constructor
  }
  append(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    return this;
  }
  reverse() {
    if (this.head === null) return null;
    let current = this.head;
    let pre = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = pre;
      pre = current;
      current = next;
    }
    this.head = pre;
    return this;
  }
  findMid() {
    if (this.head === null) return null;
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow.value;
  }
  findLastKth(k) {
    if (this.head === null) return null;
    let fast = this.head;
    let slow = this.head;
    while (fast && k) {
      fast = fast.next;
      k--;
    }
    if (k > 0) return null;
    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }
    return slow.value;
  }
  isCircularFastSlow() {
    if (this.head === null) return false;
    let fast = this.head;
    let slow = this.head;
    if (this.head.next) fast = fast.next; //at the beginning, fast one step ahead

    while (fast && fast.next) {
      if (fast.next === slow) return true;
      if (fast.next.next === slow) return true;
      fast = fast.next.next;
      slow = slow.next;
    }
    return false;
  }
}
```

---

```js
let linkedList = new LinkedList(5);
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.append(50);
console.log('linkedList = ', JSON.stringify(linkedList));
console.log('findMid = ', JSON.stringify(linkedList.findMid())); //30
console.log('findLastKth(4) = ', JSON.stringify(linkedList.findLastKth(4))); //20
console.log('reverse = ', JSON.stringify(linkedList.reverse()));
console.log(
  'isCircularFastSlow',
  JSON.stringify(linkedList.isCircularFastSlow())
);
console.log('linkedList = ', JSON.stringify(linkedList));
```

---

### Tree

```js
{
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  class Tree {
    constructor() {
      this.root = null;
    }
    insertNewNode(newNode, node) {
      if (node.value < newNode.value) {
        node.left === null
          ? (node.left = newNode)
          : this.insertNewNode(node.left, newNode);
      } else {
        node.right === null
          ? (node.right = newNode)
          : this.insertNewNode(node.right, newNode);
      }
    }
    insert(value) {
      let newNode = new TreeNode(value);
      return this.root === null
        ? (this.root = newNode)
        : this.insertNewNode(newNode, this.root);
    }
    traversal() {} // 3 ways
    search(value) {}
    delete(value) {}
  }
  let t = new Tree();
  t.insert(8);
  t.insert(2);
  t.insert(3);
  t.insert(9);
  console.log('tree : ', JSON.stringify(t));
}
```
