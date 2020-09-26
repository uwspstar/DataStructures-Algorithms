//Given a linked list of integers, remove all consecutive nodes that sum up to 0.
/*
Input: 10 -> 5 -> -3 -> -3 -> 1 -> 4 -> -4 Output: 10
The consecutive nodes 5 -> -3 -> -3 -> 1 sums up to 0 so that sequence should be removed. 4 -> -4 also sums up to 0 too so that sequence should also be removed.
*/
/*
1) with a 2 pointer approach where both start and end pointers begin at the first element, and then the end pointer goes to the end of the list until it finds a sum of 0. If no sum of 0 is found, then the start pointer goes to the next node in the linked list and repeats the process. If a sum of 0 is found, then the start node can remove the items in the list by setting next to the end's next, which removes all the nodes in between.

This problem is mostly about careful pointer manipulation.

class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next

def removeConsecutiveSumTo0(node):
  dummy_head = Node(0, node)
  start = dummy_head
  while start:
    sum = 0
    end = start.next
    while end:
      sum += end.value
      if sum == 0:
        start.next = end.next
        sum = 0
      end = end.next
    start = start.next
  return dummy_head.next

# 10 -> 5 -> -3 -> -3 -> 1 -> 4 -> -4
node = Node(10)
node.next = Node(5)
node.next.next = Node(-3)
node.next.next.next = Node(-3)
node.next.next.next.next = Node(1)
node.next.next.next.next.next = Node(4)
node.next.next.next.next.next.next = Node(-4)
node = removeConsecutiveSumTo0(node)
while node:
  print node.value,
  node = node.next
# 10

The time complexity of this problem is O(n2), since we have 2 while loops that iterate through all n items in the list.

The space complexity is O(1), as no extra space is used.
*/

class Node {
  constructor(value) {
    this.value = val;
    this.next = null;
  }
}
class 