# C++

```C++
ListNode *detectCycle(ListNode *head) { ListNode *slow = head, *fast = head; // 判断是否存在环路
do {
       if (!fast || !fast->next) return nullptr;
       fast = fast->next->next;
       slow = slow->next;
} while (fast != slow); // 如果存在，查找环路节点 fast = head;
while (fast != slow){
       slow = slow->next;
       fast = fast->next;
    }
    return fast;
}
```

# JS

```js
var detectCycle = function (head) {
  if (head === null) return head;
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next; // move 2 steps
    slow = slow.next;

    if (slow === fast) {
      let curr = head;
      while (curr !== fast) {
        curr = curr.next;
        fast = fast.next; // move 1 step
      }
      return curr;
    }
  }
  return null;
};
```
