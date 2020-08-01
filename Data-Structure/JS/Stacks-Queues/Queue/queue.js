class Queue {
    constructor() {
        this.result = [];
    }

    enqueue(data) {
        return this.result.push(data);
    }

    dequeue() {
        return this.result.shift();
    }

    head() {
        return this.result[0];
    }
}

let que = new Queue();
que.enqueue(5)
que.enqueue(4)
que.enqueue(3)
console.log(que);
console.log(que.head());
que.dequeue()
console.log(que.head());