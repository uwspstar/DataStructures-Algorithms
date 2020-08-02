//206. Reverse Linked List
//append(data) // insert (data, index) // indexOf(data)// remove(data) // removeAt(index)

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class LinkedList {

    constructor(data) {
        this.head = new Node(data);
    }

    append(data) { // the tail :  the current.next === null;
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let current = this.head;
            while (current.next) {
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

let list = new LinkedList(5)
list.append(4)
list.append(3)
list.append(2)

console.log(JSON.stringify(list));