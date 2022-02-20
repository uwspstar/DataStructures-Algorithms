// By dealing with values:

// Time complexity: O(n�)
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
  let length = 0;
  let temp = list.head;
  while (temp) {
    length++;
    temp = temp.next;
  }
  let left = list.head;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    let right = list.head;
    for (let j = 0; j < length - i - 1; j++) right = right.next;
    [left.data, right.data] = [right.data, left.data];
    left = left.next;
  }
}


