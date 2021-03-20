{
    console.log(!2); // false
    console.log(![2].length); // false
    console.log(![].length); // true
}
{
    console.log([0, 1, 2, 3, 4].slice(-1)[0]);
    console.log([0, 1, 2, 3, 4].slice(-1));
    console.log([0, 1, 2, 3, 4].slice(2, -1));
    console.log([0, 1, 2, 3, 4].slice(2, -1)[0]); // 2
}

{
    class twoQueueToStack {
        constructor() {
            this.queue = [];
            this._queue = [];
        }
        push(x) {
            this.queue.push(x);
        }
        pop() {
            while (this.queue.length > 1) {
                this._queue.push(this.queue.shift());
            }
            let ans = this.queue.shift();
            while (this._queue.length) {
                this.queue.push(this._queue.shift());
            }
            return ans;
        }
        top() {
            return this.queue.slice(-1)[0];
        }
        empty() {
            return !this.queue.length;
        }
    }
}