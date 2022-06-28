class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

    def __repr__(self):
        return str(self.__dict__)

class Solution:
    def merge_two_list(self, l1, l2):
        if l1 is None:
            return l2
        if l2 is None:
            return l1

        dummy = ListNode() # not moving, return dummy.next
        p = dummy # p is moving

        while l1 and l2:
            if l1.val < l2.val:
                p.next = l1
                l1 = l1.next
                p = p.next
            else:
                p.next = l2
                l2 = l2.next
                p = p.next

        p.next = l1 if l1 is not None else l2

        return dummy.next


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