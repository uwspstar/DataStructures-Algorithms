---
marp: true
---

- https://labuladong.gitee.io/algo/1/7/
- 倒序打印一条单链表上所有节点的值

```java
/* 递归遍历单链表，倒序打印链表元素 */
void traverse(ListNode head) {
    if (head == null) {
        return;
    }
    traverse(head.next);
    // 后序位置
    print(head.val);
}
```
