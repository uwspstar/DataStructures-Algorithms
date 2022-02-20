// By dealing with links (iteratively):

// Time complexity: O(n)
// Space complexity: O(1)

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

function reverseList(list) {
  let previous = null;
  let current = list.head;
  while (current != null) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  list.head = previous;
}

function reverseList(head) {
  let previous = null;
  let current = head;
  let next = null;
  while (current != null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  head = previous;
  return head;
}

