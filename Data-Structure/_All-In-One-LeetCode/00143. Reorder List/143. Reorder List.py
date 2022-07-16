# 143. Reorder List
'''
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

'''


from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverse(self, head):
        if head is None:
            return head
        if head.next is None:
            return head
        
        curr = head
        pre, nxt = None, None
        while curr:
            nxt = curr.next
            curr.next = pre
            pre = curr
            curr = nxt
        
        return pre



    def reorder_list(self, head: Optional[ListNode]) -> None:
        if head is None:
            return head
        if head.next is None:
            return head

        slow, fast = head, head
        # revert second half

        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next

        second = slow.next
        slow.next = None

        second = self.reverse(second)

        # merge tow half
        first = head
        while second:
            tmp1, tmp2 = first.next, second.next
            first.next = second
            second.next = tmp1
            first, second = tmp1, tmp2





