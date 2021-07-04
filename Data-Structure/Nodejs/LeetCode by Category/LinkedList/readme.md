---
marp: true
theme: default
header: 'leetcode'
footer: 'Code Interview'
paginate: true
size: 16:9
---

### 线性表

- 若线性表需要频繁查找，很少进行插入和删除操作时，宜采用顺序存储结构。
- 若需要频繁插入和删除时，宜采用单链表结构.
- 当线性表中的元素个数变化较大或者根本不知道有多大时，最好用单链表结构，这样可以不需要考虑存储空间的大小问题。
- 如果事先知道线性表的大致长度，用顺序存储结构效率会高很多.

# Linked list

- https://lucifer.ren/blog/2020/11/08/linked-list/
- https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/k-ge-yi-zu-fan-zhuan-lian-biao-by-leetcode-solutio/
- 链表的考点很单一
  - 指针的修改
  - 链表的拼接
- 绝大多数的题目都是单链表，而单链表只有一个后继指针。因此只有前序和后序，没有中序遍历。

---

- https://lucifer.ren/blog/2020/11/08/linked-list/
- 如果是前序遍历，那么你可以想象前面的链表都处理好了，怎么处理的不用管。相应地如果是后序遍历，那么你可以想象后面的链表都处理好了，怎么处理的不用管

---

### 四个技巧

- https://lucifer.ren/blog/2020/11/08/linked-list/
  - 虚拟头
  - 快慢指针
  - 穿针引线
  -

---

### 四个技巧 : 头结点

- `头结点` : 为了更加方便地对链表进行操作，会在单链表的第一个结点前附设一个结点，称为头结点
- 头结点的数据域可以不存储任何信息，也可以存储如线性表的长度等附加信息，头结点的指针域存储指向`第一个结点`的指针
- 若线性表为空表，则头结点的指针域为“空”

---

### 单链表插入和删除算法，都是由两部分组成：对于插入或删除数据越频繁的操作，单链表的效率优势就越是明显

- 第一部分就是遍历查找第个结点；
- 第二部分就是插入和删除结点

---

### 循环链表 
- 循环链表和单链表的主要差异就在于循环的判断条件上，原来是判断 p->next 是否为空，现在则是 `p->next 不等于头结点`，则循环未结束

---

- A Linked list is a recursive structure. A sub-list in itself is a linked list. So, if you think about it, reversing a list consisting of k nodes is simply a linked list reversal algorithm.

---

### linked list and array

- https://lucifer.ren/blog/2020/11/08/linked-list/
- 链表是一种物理存储单元上非连续、非顺序的存储结构.
- 数据元素的逻辑顺序是通过链表中的指针链接次序实现的。
- 链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成.
- 数组是一块连续的空间，数组的每一项都是紧密相连的,因此如果要执行插入和删除操作就很麻烦。

---

### 逆序遍历

- 如果是链表，通常需要借助于双向链表。而双向链表在力扣的题目很少，因此大多数你没有办法拿到前驱节点，这也是为啥很多时候会自己记录一个前驱节点 pre 的原因。

---

### linked list and tree

- 有没有想过为啥只有二叉树，而没有一叉树。实际上链表就是特殊的树，即一叉树。

---

# dummy head : when need to return a new list, merger list,

# fast slow pointer : reverse, looking kth element, middle index, circle

---

### 如何翻转一个分组内的子链表

- 翻转一个子链表，并且返回新的头与尾

```js
const myReverse = (head, tail) => {
  let prev = tail.next;
  let curr = head;
  let nex = null;
  while (prev !== tail) {
    nex = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nex;
  }
  return [tail, head];
};
```

---

```js
function reverse(head, k) {
  let prev = null;
  let curr = head;
  let next = null;
  while (curr && k > 0) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    k--;
  }
  return prev;
}
```

---

### linked list vs array

- 链表的优势在插入, 删除, 元素方面, 当需要在中间插入, 删除, 元素时，链表是更好的选择。

---

### In-place reversal of linked list : without using extra memory

- https://leetcode.com/problems/reverse-linked-list-ii/
- Reverse a Sub-list (medium)
- https://leetcode.com/problems/reverse-nodes-in-k-group/
- Reverse every K-element Sub-list (medium)

---

```js
const reverseLinkedList = (head) => {
  let cur = head;
  let pre = null;
  let next = null;
  while (cur) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
};
var reverseBetween = function (head, left, right) {
  const dummyNode = new ListNode();
  dummyNode.next = head;

  let pre = dummyNode;
  // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
  // 建议写在 for 循环里，语义清晰
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }

  // 第 3 步：切断出一个子链表（截取链表）
  let leftNode = pre.next;
  let curr = rightNode.next;

  // 注意：切断链接
  pre.next = null;
  rightNode.next = null;

  // 第 4 步：同第 206 题，反转链表的子区间
  reverseLinkedList(leftNode);

  // 第 5 步：接回到原来的链表中
  pre.next = rightNode;
  leftNode.next = curr;

  return dummyNode.next;
};
```

---

- Q1: 如下代码 ans.next 指向什么？

```js
ans = ListNode(1); //ans address 9527
ans.next = head; // head address 1234, ans.next point 1234
head = head.next; //if head.next point 2234, head point 2234
head = head.next; //if head.next point 3234, head point 3234
```

- A1: 最开始的 head。

---

- Q2：如下代码 ans.next 指向什么？

```js
ans = ListNode(1); //ans address 9527
head = ans; //head address 9527
head.next = ListNode(3); //if ListNode(3) address is 1234, head.next point 1234, ans.next same as head next 1234
head.next = ListNode(4); //ListNode(4) address is 2234, head.next point 2234, ans.next same as head next 2234
```

- A2: ListNode(4)

---

- Q3: 如下代码 ans.next 指向什么？

```js
ans = ListNode(1); // ListNode(1) address 9527; ans address 9527
head = ans; // head address 9527
head.next = ListNode(3); //ListNode(3) address 1234; head.next address 1234, ans.next address 1234
head = ListNode(2); //ListNode(2) address 2234, head address 2234
head.next = ListNode(4); // ListNode(4) address 3234,  head.next 3234
```

- A3: ListNode(3)
