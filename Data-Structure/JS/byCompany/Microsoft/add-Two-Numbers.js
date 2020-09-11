/*
You are given two linked-lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class ListNode {
    constructor(value) {
        this.head = new Node(value);
    }
    append(value) {
        if (this.head === null) {
            this.head = new Node(value);
            return this;
        }

        let current = this.head;
        // cannot use while (current)
        while (current.next) {
            console.log('current', current);
            current = current.next;
        }
        current.next = new Node(value);
        return this;
    }
}
let l1 = new ListNode(2);
l1.append(4);
l1.append(3);
let l2 = new ListNode(5);
l2.append(6);
l2.append(4);
console.log(JSON.stringify(l1));


