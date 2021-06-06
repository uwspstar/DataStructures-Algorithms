---
marp: true
theme: default
header: 'leetcode'
footer: 'Code Interview'
paginate: true
size: 16:9
---

# Linked list

- A Linked list is a recursive structure. A sub-list in itself is a linked list. So, if you think about it, reversing a list consisting of k nodes is simply a linked list reversal algorithm.

---

# dummy head : when need to return a new list, merger list,

# fast slow pointer : reverse, looking kth element, middle index, circle

---

# 如何翻转一个分组内的子链表

- https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/k-ge-yi-zu-fan-zhuan-lian-biao-by-leetcode-solutio/

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
