{
    //思路和09-1.用两个栈实现队列类似，但不大一样。
    //每次元素出队时，所有元素一定会转移到另一个队列中。因此，插入和删除一定发生在有元素的队列。
    class Queue {
        constructor() {
            this.queue = [];
        }
        get size() {
            return this.queue.length;
        }
        enqueue(val) {
            this.queue.unshift(val);
        }
        dequeue() {
            this.queue.pop(val);
        }
    }

    class Stack {
        constructor() {
            this.queue = new Queue();
            this.backupQueue = new Queue();
        }

        get size() {
            return this.queue.size + this.backupQueue.size;
        }

        append(val) {
            if (queue.size) {
                queue.enqueue(val);
                return queue.size;
            } else {
                backupQueue.enqueue(element);
                return backupQueue.size;
            }
        }

        delete() {
            if (queue.size) {

                while (queue.size > 1) {
                    backupQueue.enqueue(queue.dequeue());
                }

                return queue.dequeue();

            } else if (backQueue.size > 1) {

                while (backupQueue.size) {
                    queue.enqueue(backupQueue.dequeue());
                }

                return backupQueue.dequeue();
            }
        }
    }
}