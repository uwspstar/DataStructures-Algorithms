// By reversing the right half then comparing:

// Time complexity: O(n)
// Space complexity: O(1)

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

function reverseList(head){
  let previous = null;
  let current = head;
  while(current){
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}

function isPalindromeList(list){
  let slow = list.head;
  let fast = list.head;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  slow = reverseList(slow);
  head = list.head;
  while(slow){
    if(slow.data != head.data) return false;
    slow = slow.next;
    head = head.next;
  }
  return true;
}

//1. Copy into Array List and then Use Two Pointer Technique
//2. reverse Linkedlist, compare two linkedlist
//3. reverse seconde half to compare


