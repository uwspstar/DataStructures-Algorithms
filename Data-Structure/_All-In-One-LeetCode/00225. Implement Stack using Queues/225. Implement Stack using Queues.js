var MyStack = function () {
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    for (let i = 1; i < this.queue.length; i++) {
        this.queue.push(this.queue.shift());
    }
    return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    for (let i = 1; i < this.queue.length; i++) {
        this.queue.push(this.queue.shift());
    }
    let temp = this.queue.shift();
    this.queue.push(temp);

    return temp;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue.length === 0
};