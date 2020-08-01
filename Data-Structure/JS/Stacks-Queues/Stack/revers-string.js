class Stack {
    #result;
    constructor() {
        this.#result = [];
    }
    push(data) {
        return this.#result.push(data);
    }
    pop() {
        return this.#result.pop()
    }

    isEmpty() {
        return this.#result.length === 0;
    }

    getItem() {
        return this.#result;
    }
}

const reverseStr = function (str) {
    let stack = new Stack();
    let result = '';
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    while (!stack.isEmpty()) {
        result += stack.pop();
    }
    return result;
}


console.log(reverseStr('abcdef'));