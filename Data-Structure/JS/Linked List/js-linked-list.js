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
    getHead() {
        return this.head === null ? null : this.head;
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
    insert(data) {
        this.insertAt(data, 0);
    }
    insertAt(data, index) {
        const node = new Node(data);
        let current = this.head;
        if (index === 0) {
            this.head = node;
            node.next = current;
        } else {
            let count = 0;
            let prev = null;
            //insertAt(4, 1)
            // 5-->-->3-->2
            while (count < index && current.next) {
                count++;
                prev = current;
                current = current.next;
            }
            node.next = current;
            prev.next = node;
        }
        return this;

    }
    indexOf(data) {
        let count = 0
        if (this.head === null) return -1;
        let current = this.head;
        while (current.next) {
            if (current.value === data) return count;
            current = current.next;
            count++;
        }
        return -1;
    }
    pop() { // remove last one
        if (this.head === null) return null;
        let current = this.head;
        let prev = null;
        while (current.next) {
            prev = current;
            current = current.next
        }
        prev.next = null;
        return this;
    }
    removeAt(index) {
        if (this.head === null) return null;

        let current = this.head;
        let prev = null;
        let count = 0;
        // 5->4->3->2->1
        while (current.next) {
            if (count === index) {
                break;
            }
            count++;
            prev = current;
            current = current.next;
        }
        prev.next = current;

        return this;
    }
    remove(data) {
        return this.removeAt(this.indexOf(data));
    }
    reverse1() {
        if (this.head === null) return null;
        let current = this.head;
        let prev = null;
        let next = null
        // 5--> 4--> 3--> 2--> 1
        // p--> c--> n
        //      p--> c--> n
        //           p--> c--> n
        //                p--> c--> n
        //                     p--> c--> n
        while (current) {
            next = current.next; // last hold the current 
            current.next = prev;
            prev = current;
            current = next;
        }
        // after wile loop, pre = current, current next === null
        this.head = prev;
        return this;
    }

}

let list = new LinkedList(6);
list.append(5);
list.append(4);
//console.log(JSON.stringify(list));
list.insert('a');
list.insertAt('b', 3);
list.insertAt('c', 3);
console.log('reverse = ', JSON.stringify(list.reverse()));
console.log('pop = ', JSON.stringify(list.pop()));
console.log(list.indexOf('b'));
//console.log(JSON.stringify(list));
console.log(JSON.stringify(list.getHead()));