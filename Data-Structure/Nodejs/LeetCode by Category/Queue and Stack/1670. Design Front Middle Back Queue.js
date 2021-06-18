//1670. Design Front Middle Back Queue
/*
Design a queue that supports push and pop operations in the front, middle, and back.

Implement the FrontMiddleBack class:

FrontMiddleBack() Initializes the queue.
void pushFront(int val) Adds val to the front of the queue.
void pushMiddle(int val) Adds val to the middle of the queue.
void pushBack(int val) Adds val to the back of the queue.
int popFront() Removes the front element of the queue and returns it. If the queue is empty, return -1.
int popMiddle() Removes the middle element of the queue and returns it. If the queue is empty, return -1.
int popBack() Removes the back element of the queue and returns it. If the queue is empty, return -1.
Notice that when there are two middle position choices, the operation is performed on the frontmost middle position choice. For example:

Pushing 6 into the middle of [1, 2, 3, 4, 5] results in [1, 2, 6, 3, 4, 5].
Popping the middle from [1, 2, 3, 4, 5, 6] returns 3 and results in [1, 2, 4, 5, 6].
*/
{
    // Doubly linked list node
    function ListNode(val, prev, next) {
        this.val = val || 0;
        this.prev = prev || null;
        this.next = next || null;
    }

    var FrontMiddleBackQueue = function () {
        this.head = null;
        this.tail = null;
        this.len = 0;
    };

    /** 
     * @param {number} val
     * @return {void}
     */
    FrontMiddleBackQueue.prototype.pushFront = function (val) {
        if (this.len === 0) {
            this.head = new ListNode(val);
            this.tail = this.head;
            this.len += 1;
            return;
        }

        let newNode = new ListNode(val);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode; // the new node becomes the new head
        this.len += 1;
    };

    /** 
     * @param {number} val
     * @return {void}
     */
    FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
        if (this.len <= 1) {
            this.pushFront(val);
            return;
        }
        let cur = this.head;
        for (let i = 1; i < Math.floor(this.len / 2); i++) { // we go to previous node of median
            cur = cur.next;
        }
        let newNode = new ListNode(val);
        let next = cur.next;
        cur.next = newNode;
        newNode.prev = cur;
        newNode.next = next;
        if (next) next.prev = newNode;
        this.len += 1;
    };

    /** 
     * @param {number} val
     * @return {void}
     */
    FrontMiddleBackQueue.prototype.pushBack = function (val) {
        if (this.len === 0) {
            this.pushFront(val);
            return;
        }

        let newNode = new ListNode(val);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode; // end node becomes the new tail
        this.len += 1;
    };

    /**
     * @return {number}
     */
    FrontMiddleBackQueue.prototype.popFront = function () {
        if (this.len === 0) {
            return -1;
        }
        let front = this.head;
        let next = front.next;
        if (next) next.prev = null;
        this.head = next;
        this.len -= 1;
        return front.val;
    };

    /**
     * @return {number}
     */
    FrontMiddleBackQueue.prototype.popMiddle = function () {
        if (this.len <= 2) {
            return this.popFront();
        }
        let cur = this.head;
        for (let i = 1; i < Math.ceil(this.len / 2); i++) { // we go to median node
            cur = cur.next;
        }

        let prev = cur.prev;
        let next = cur.next;
        cur.prev = null;
        cur.next = null;
        if (prev) prev.next = next;
        if (next) next.prev = prev;
        this.len -= 1;
        return cur.val;
    };

    /**
     * @return {number}
     */
    FrontMiddleBackQueue.prototype.popBack = function () {
        if (this.len <= 1) {
            return this.popFront();
        }
        let end = this.tail;
        let prev = end.prev;
        end.prev = null;
        prev.next = null;
        this.tail = prev;
        this.len -= 1;
        return end.val;
    };
    //Design Search Autocomplete System
    //Design A Leaderboard
    //Tweet Counts Per Frequency
}