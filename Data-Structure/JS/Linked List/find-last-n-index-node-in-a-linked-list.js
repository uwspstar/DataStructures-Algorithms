/*

Fast & Slow strategy

Program for nth node from the end of a Linked List
Given a Linked List and a number n, write a function that returns the value at the n’th node from the end of the Linked List.
For example, if the input is below list and n = 3, then output is “B”

*/
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class LinkedList {
    constructor(val) {
        this.head = new Node(val);
    }
    getLastGivenIndexNode1(n) {
        if (this.head === null) return null;
        let fast = this.head;
        let slow = this.head;
        while (n > 0) {
            fast = fast.next
            if (fast === null) return undefined;
            n--;
        }
        while (fast.next !== null) {
            fast = fast.next;
            slow = slow.next;
        }
        return slow;
    } // 5 -> 10 -> 20 -> 30 -> 40 (remove 3)
    removeKthLastNode(k) {
        if (this.head === null) return null;
        let fast = this.head;
        let slow = this.head;
        while (k > 0) {
            fast = fast.next
            if (fast === null) return undefined;
            k--;
        }
        let Pre = this.head;;
        while (fast.next !== null) {
            Pre = slow;
            fast = fast.next;
            slow = slow.next; // this is the Kth;
        }
        Pre.next = slow.next; // NOT Pre.next = slow
        return this;
    }
    isCircularFastSlow() {
        if (this.head === null) return true;
        // if it is circular in part of nodes
        let slow = this.head;
        let fast = this.head;
        // not need to check slow.next !== null && ...
        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast === slow) return true;
        }
        return false;
    }
    append(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        return this;
    }
    // 1-->2-->3-->4
    // c   n   
    reverse() {
        let current = this.head;
        let pre = null;
        let next = null;
        while (current !== null) {
            next = current.next;
            current.next = pre;
            pre = current;
            current = next;
        }
        this.head = pre; // very important
        return this;
    }
    findMid() {
        if (this.head === null) return undefined;
        let fast = this.head;
        let slow = fast;
        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow.value;
    }
    isCircular() {
        if (this.head === null) return true;
        let current = this.head;
        while (current.next !== null && current.next !== this.head) {
            current = current.next;
        }
        return current.next === this.head
    }
}

let linkedList = new LinkedList(5);
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);

console.log('getLastGivenIndexNode', JSON.stringify(linkedList.getLastGivenIndexNode(3)));
/*
console.log('removeKthLastNode', JSON.stringify(linkedList.removeKthLastNode(3)));
console.log('isCircularFastSlow', JSON.stringify(linkedList.isCircularFastSlow()));
console.log('isCircular', JSON.stringify(linkedList.isCircular()));
console.log(JSON.stringify(linkedList));
console.log(JSON.stringify(linkedList.findMid()));
console.log(JSON.stringify(linkedList.reverse()));
console.log(JSON.stringify(linkedList.findMid()));
*/

