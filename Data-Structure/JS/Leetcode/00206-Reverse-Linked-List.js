//206. Reverse Linked List
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
//append // indexOf // remove // removeAt
class LinkedList {
    constructor(data) {
        this.head = new Node(data);
    }
    append(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let current = this.head;
            while (current) {
                current = current.next
            }
            current.next = new Node(data);
        }
        return this;
    }

    head() {
        return this.head === null ? null : this.head;
    }
}