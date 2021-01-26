/*
You are given an array of k sorted singly linked lists. Merge the linked lists into a single sorted linked list and return it.

Here's your starting point:

class Node(object):
  def __init__(self, val, next=None):
    self.val = val
    self.next = next

  def __str__(self):
    c = self
    answer = ""
    while c:
      answer += str(c.val) if c.val else ""
      c = c.next
    return answer

def merge(lists):
  # Fill this in.

a = Node(1, Node(3, Node(5)))
b = Node(2, Node(4, Node(6)))
print merge([a, b])
# 123456
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(val) {
        this.head = new Node(val);
    }
    append(value) {
        let newNode = new Node(value)
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        return this;
    }
    merge(nodeList1, nodeList2) {
        let newNodeList = new SinglyLinkedList();
        let current1 = nodeList1.head;
        let current2 = nodeList2.head;
        let current = newNodeList.head;

        while (current1.next && current2.next) {
            // console.log('current1.value :', current1.value, 'current2.value :', current2.value);

            if (current1.value < current2.value) {
                newNodeList.append(current1.value);
                current1 = current1.next;
            } else {
                newNodeList.append(current2.value);
                current2 = current2.next;
            }
            current = current.next;
        }

        console.log('current1.next : ', current1.next, 'current2.next :', current2.next);
        if (current1.next === null) {
            current.next = current2;
        } else {
            current.next = current1;
        }

        let newCurrent = newNodeList.head;
        console.log('newCurrent.next:', JSON.stringify(newCurrent.next));

        return newCurrent.next;
    }
}

let nodeList1 = new SinglyLinkedList(1);
nodeList1.append(3);
nodeList1.append(4);
nodeList1.append(7);
nodeList1.append(11);
let nodeList2 = new SinglyLinkedList(0);
nodeList2.append(1);
nodeList2.append(2);
nodeList2.append(4);
nodeList2.append(5);
nodeList2.append(6);
nodeList2.append(8);
let nodeList = new SinglyLinkedList(null);

//console.log('nodeList1', { nodeList1 }, JSON.stringify(nodeList1));
//console.log('nodeList2', { nodeList2 }, JSON.stringify(nodeList2));
console.log('nodeList merge', JSON.stringify(nodeList.merge(nodeList1, nodeList2)));