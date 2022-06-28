from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def __repr__(self):
        return str(self.__dict__)

class Solution:
    def merge_two_list(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        if l1 is None:
            return l2
        if l2 is None:
            return l1
        
        if l1.val < l2.val:
            l1.next =  self.merge_two_list(l1.next, l2)
            return l1
        else:
            l2.next = self.merge_two_list(l1, l2.next)
            return l2


l1 = ListNode()
l1.val = 1
a = ListNode()
a.val = 2
b = ListNode()
b.val = 3

l1.next = a
a.next = b

l2 = ListNode()
l2.val = 1
c =  ListNode()
c.val = 3
d =  ListNode()
d.val = 4

l2.next =  c
c.next  = d

# print(l1)
# print(l2)

sl = Solution()
print(sl.merge_two_list(l1, l2))