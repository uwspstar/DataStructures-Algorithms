{
    console.log([0, 1, 2, 3, 4].slice(-1)[0]);
    console.log([0, 1, 2, 3, 4].slice(-1));
    console.log([0, 1, 2, 3, 4].slice(2, -1));
    console.log([0, 1, 2, 3, 4].slice(2, -1)[0]); // 2
}

{
    class twoQueueToStack {
        constructor() {
            this.inQueue = [];
            this.outQueue = [];
        }
        push(x) {
            if (this.inQueue.length > 0) {
                this.outQueue.push(this.inQueue.pop());
            }
            this.inQueue.push(x);
        };
        pop() {
            if (this.empty()) return null;
            if (this.inQueue.length == 0) {
                this.inQueue.push(this.outQueue.pop())
            }
            return this.inQueue.pop();
        };
        top() {
            if (this.inQueue.length == 0 && this.outQueue.length > 0) {
                this.inQueue.push(this.outQueue.pop());
            }
            return this.inQueue[0];
        };
        empty() {
            return this.inQueue.length == 0 && this.outQueue.length == 0;
        }
    }
}