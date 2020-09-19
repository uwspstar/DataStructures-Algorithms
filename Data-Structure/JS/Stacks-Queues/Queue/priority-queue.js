class QueueItem {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
    }
}

class PriorityQueue {
    #result;
    constructor() {
        this.#result = [];
    }
    enqueue(data, priority) {
        const queueItem = new QueueItem(data, priority);
        let isAdd = false;
        for (let i = 0; i < this.#result.length; i++) {
            if (queueItem.priority > this.#result[i].priority) {
                this.#result.splice(i, 0, queueItem);
                isAdd = true;
                break;
            }
        }
        if (!isAdd) this.#result.push(queueItem)
        return this.#result;
    }
    dequeue() {
        return this.#result.shift();
    }
    head() {
        return this.#result[0];
    }
    getItem() {
        return this.#result;
    }
}

let pq = new PriorityQueue()
pq.enqueue('a', 1);
pq.enqueue('d', 4);
pq.enqueue('z', 0);
pq.enqueue('b', 2);
pq.enqueue('c', 3);
pq.enqueue('x', -1);

console.log('getItem', pq.getItem());
console.log('dequeue', pq.dequeue());
console.log('dequeue', pq.dequeue());
console.log('dequeue', pq.dequeue());
console.log('getItem', pq.getItem());
