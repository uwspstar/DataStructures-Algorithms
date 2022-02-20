// By dealing with links (recursively):

// Time complexity: O(n)
// Space complexity: O(n)

class Node{
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  constructor(head = null){
    this.head = head;
  }
}

function reverseNodes(head){
  if(node == null || node.next == null)
    return node;
  let reversed = reverseNodes(node.next);
  node.next.next = node;
  node.next = null;
  return reversed;
}

function reverseList(list){
  list.head = reverseNodes(list.head);
}


