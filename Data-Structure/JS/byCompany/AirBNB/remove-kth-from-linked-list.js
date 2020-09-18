/*

You are given a singly linked list and an integer k. Return the linked list, removing the k-th last element from the list.

Try to do it in a single pass and using constant space.
*/

// see linked list find-last-n-index-node-in-a-linked-list.js

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
    // 5 -> 10 -> 20 -> 30 -> 40 (remove 3)
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
}
let linkedList = new LinkedList(5);
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
console.log('linkedList', JSON.stringify(linkedList));
console.log('removeKthLastNode', JSON.stringify(linkedList.removeKthLastNode(3)));