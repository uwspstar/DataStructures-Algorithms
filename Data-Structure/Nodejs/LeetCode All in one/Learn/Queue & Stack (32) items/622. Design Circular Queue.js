//622. Design Circular Queue
/*
Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

Implementation the MyCircularQueue class:

MyCircularQueue(k) Initializes the object with the size of the queue to be k.
int Front() Gets the front item from the queue. If the queue is empty, return -1.
int Rear() Gets the last item from the queue. If the queue is empty, return -1.
boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
boolean isEmpty() Checks whether the circular queue is empty or not.
boolean isFull() Checks whether the circular queue is full or not.
You must solve the problem without using the built-in queue data structure in your programming language.

Input
["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output
[null, true, true, true, false, 3, true, true, true, 4]

Explanation
MyCircularQueue myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1); // return True
myCircularQueue.enQueue(2); // return True
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(4); // return False
myCircularQueue.Rear();     // return 3
myCircularQueue.isFull();   // return True
myCircularQueue.deQueue();  // return True
myCircularQueue.enQueue(4); // return True
myCircularQueue.Rear();     // return 4
*/
{
    /**
 * @param {number} k
 */
    var MyCircularQueue = function (k) {
        this.head = 0; //index
        this.tail = 0;
        this.size = k + 1; // 多申请一个空间。因为会有个空位置。
        this.list = [];
    };
    /**
     * @return {boolean}
     */
    MyCircularQueue.prototype.isEmpty = function () {
        return this.head == this.tail;
    };

    /**
     * @return {boolean}
     */
    MyCircularQueue.prototype.isFull = function () {
        return (this.tail + 1) % this.size === this.head;
    };

    /**
     * @return {number}
     */
    MyCircularQueue.prototype.Front = function () {
        if (!this.isEmpty()) {
            return this.list[this.head];
        }
        return -1;
    };

    /**
     * @return {number}
     */
    MyCircularQueue.prototype.Rear = function () {
        if (!this.isEmpty()) {// 取尾部之前的一个元素
            return this.list[(this.tail + this.size - 1) % this.size];
        }
        return -1;
    };


    /** 
     * @param {number} value
     * @return {boolean}
     */
    MyCircularQueue.prototype.enQueue = function (value) {
        if (!this.isFull()) {// 注意不应该直接push
            this.list[this.tail] = value;
            this.tail = (this.tail + 1) % this.size;
            return true;
        }
        return false;
    };

    /**
     * @return {boolean}
     */
    MyCircularQueue.prototype.deQueue = function () {
        if (!this.isEmpty()) {
            let front = this.list[this.head];
            this.head = (this.head + 1) % this.size;
            return true;
        }
        return false;
    };



    //Design Circular Deque
    //Design Front Middle Back Queue

}