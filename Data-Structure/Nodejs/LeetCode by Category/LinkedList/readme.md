---
marp: true
theme: default
header: 'leetcode'
footer: 'Code Interview'
paginate: true
size: 16:9
---

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

### In-place reversal of linked list : without using extra memory

- https://leetcode.com/problems/reverse-linked-list-ii/
- Reverse a Sub-list (medium)
- https://leetcode.com/problems/reverse-nodes-in-k-group/
- Reverse every K-element Sub-list (medium)

---
