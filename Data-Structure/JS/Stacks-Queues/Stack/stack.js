class Stack {
    #result;
    constructor() {
        this.#result = [];
    }

    push(data) {
        return this.#result.push(data);
    }

    pop() {
        return this.#result.length > 0
            ? this.#result.pop()
            : undefined;
    }

    peek() {
        return this.#result.length > 0
            ? this.#result[this.#result.length - 1]
            : undefined;
    }
}

let stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
console.log(stack);
console.log(stack.peek());
stack.pop()
console.log(stack.peek());
stack.pop()
console.log(stack.peek());
stack.pop()
console.log(stack.peek());
stack.pop()